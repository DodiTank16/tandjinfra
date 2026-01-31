import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../../productsData";
import Slider, { CategoryTabs } from "./Slider";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

function ProductSlider() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeProduct, setActiveProduct] = useState(null);

  const subCategoryIds = useMemo(() => {
    const cat = categories.find((c) => c.id === activeCategory);
    return cat ? cat.subCategories.map((s) => s.id) : [];
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => subCategoryIds.includes(p.subCategory));
  }, [subCategoryIds]);

  useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProduct]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setActiveProduct(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="py-20 bg-[#f7f7f7]">
      {/* CATEGORY HEADER */}
      <CategoryTabs categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />

      {/* SLIDER */}
      <div className="mt-16 max-w-[1400px] mx-auto px-10">
        <Slider loop autoplay autoplayDelay={4000} itemsPerScroll={1} gap={40}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex gap-10 pb-5">
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={cardVariants}>
                  <ProductCard product={product} onSelect={setActiveProduct} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Slider>
      </div>

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
    </section>
  );
}

export default ProductSlider;

function ProductCard({ product, onSelect }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="
        min-w-[320px] bg-white rounded-2xl shadow-md flex flex-col items-center py-10 text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer
      "
      onClick={() => onSelect(product)}>
      <div className="h-44 w-full flex items-center justify-center mb-8">
        <img src={product.image} alt={product.name} className="max-h-full object-contain" />
      </div>

      <h4 className="text-base font-semibold text-gray-900 mb-6">{product.name}</h4>

      <button
        className="text-sm text-red-600 font-medium flex items-center gap-2 cursor-pointer hover:underline"
        onClick={(e) => {
          e.stopPropagation();
          navigate("/products");
        }}>
        View Product <span>👁</span>
      </button>
    </motion.div>
  );
}
