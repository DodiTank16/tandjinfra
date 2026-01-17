import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TiMinus } from "react-icons/ti";
import cementBg from "../../assets/images/cement-bg.png";
import { categories, products } from "../../productsData";

const accordionVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: "easeInOut" },
      opacity: { duration: 0.25 },
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState(categories[0].id);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [showMobileCats, setShowMobileCats] = useState(false);

  const filteredProducts = selectedSubCategory ? products.filter((p) => p.subCategory === selectedSubCategory) : products;

  // ESC closes modal
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActiveProduct(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-24 px-4 md:px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-10">
          Our <span className="text-[#00455E]">Products</span>
        </motion.h1>

        {/* MOBILE: Category Toggle */}
        <div className="md:hidden mb-6">
          <button onClick={() => setShowMobileCats(true)} className="w-full py-3 rounded-xl bg-[#616161] text-white font-medium">
            Browse Categories
          </button>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex gap-10">
          <Sidebar
            expandedCategory={expandedCategory}
            setExpandedCategory={setExpandedCategory}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
          />

          <ProductGrid products={filteredProducts} onSelect={setActiveProduct} />
        </div>

        {/* MOBILE PRODUCTS */}
        <div className="md:hidden">
          <ProductGrid products={filteredProducts} onSelect={setActiveProduct} />
        </div>
      </main>

      {/* MOBILE CATEGORY DRAWER */}
      <AnimatePresence>
        {showMobileCats && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMobileCats(false)}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Categories</h3>
                <XMarkIcon className="w-6 h-6" onClick={() => setShowMobileCats(false)} />
              </div>

              <Sidebar
                mobile
                expandedCategory={expandedCategory}
                setExpandedCategory={setExpandedCategory}
                selectedSubCategory={selectedSubCategory}
                setSelectedSubCategory={(id) => {
                  setSelectedSubCategory(id);
                  setShowMobileCats(false);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProduct(null)}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-xl p-6 max-h-[90vh] overflow-y-auto">
              <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-56 object-cover rounded-2xl mb-4" />
              <h2 className="text-xl font-bold mb-2">{activeProduct.name}</h2>
              <p className="text-gray-600 leading-relaxed">{activeProduct.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------- SIDEBAR ---------------- */
function Sidebar({ expandedCategory, setExpandedCategory, selectedSubCategory, setSelectedSubCategory, mobile = false }) {
  return (
    <aside
      className={`${mobile ? "" : "w-80"} bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-xl border h-fit`}
      style={{
        backgroundImage: `url(${cementBg})`,
        backgroundRepeat: "repeat",
      }}>
      <h3 className="text-sm font-semibold text-gray-600 tracking-wider mb-6 text-center uppercase">Categories</h3>

      {/* All Products */}
      <motion.div
        whileTap={{ scale: 0.97 }}
        onClick={() => setSelectedSubCategory(null)}
        className={`w-full mb-5 flex items-center px-2 py-2 rounded-xl text-sm font-semibold transition hover:text-white
          ${selectedSubCategory === null ? " bg-[#00455E] hover:bg-[#00749e] text-white" : "hover:bg-[#00749e] text-gray-800"}`}>
        All Products
      </motion.div>
      {categories.map((cat) => {
        const isOpen = expandedCategory === cat.id;

        return (
          <div key={cat.id} className="mb-5">
            {/* Category Header */}
            <button
              onClick={() => setExpandedCategory(isOpen ? null : cat.id)}
              className="w-full flex justify-between items-start text-left font-semibold text-gray-800">
              <span>{cat.name}</span>

              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
                <ChevronDownIcon className="w-4 h-4" />
              </motion.span>
            </button>

            {/* Animated Accordion */}
            <motion.div
              variants={accordionVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              className="overflow-hidden">
              <ul className="mt-3 ml-4 space-y-1">
                {cat.subCategories.map((sub) => (
                  <motion.li
                    key={sub.id}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedSubCategory(sub.id)}
                    className={`flex items-start gap-2 cursor-pointer px-3 py-2 rounded-lg text-sm transition
                ${selectedSubCategory === sub.id ? "bg-[#00455E] text-white" : "hover:bg-[#00749e] hover:text-white"}`}>
                    <TiMinus className="w-4 h-4 mt-1 shrink-0" />
                    <span className="leading-snug">{sub.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        );
      })}
    </aside>
  );
}

/* ---------------- PRODUCT GRID ---------------- */
function ProductGrid({ products, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((p) => (
        <motion.div
          key={p.id}
          whileHover={{ y: -4 }}
          onClick={() => onSelect(p)}
          className="bg-white hover:bg-[#00749e] hover:text-white rounded-3xl shadow-xl p-3 cursor-pointer  xl:w-75 lg:w-50 h-fit flex flex-col">
          {/* Image */}
          <img src={p.image} alt={p.name} className="h-[160px] w-full object-cover rounded-2xl mb-4" />

          {/* Title */}
          <h3 className="font-semibold text-sm leading-snug line-clamp-2">{p.name}</h3>

          {/* Spacer to keep consistent bottom */}
          <div className="flex-1" />
        </motion.div>
      ))}
    </div>
  );
}
