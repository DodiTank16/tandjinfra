import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, products } from "../../productsData";
import Slider from "./Slider";
import { CategoryTabs } from "./Slider";

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

  const subCategoryIds = useMemo(() => {
    const cat = categories.find((c) => c.id === activeCategory);
    return cat ? cat.subCategories.map((s) => s.id) : [];
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => subCategoryIds.includes(p.subCategory));
  }, [subCategoryIds]);

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
              className="flex gap-10">
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={cardVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Slider>
      </div>
    </section>
  );
}

export default ProductSlider;

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="min-w-[320px] bg-white rounded-2xl shadow-md
                 flex flex-col items-center px-8 py-10 text-center">
      <div className="h-44 w-full flex items-center justify-center mb-8">
        <img src={product.image} alt={product.name} className="max-h-full object-contain grayscale" />
      </div>

      <h4 className="text-base font-semibold text-gray-900 mb-6">{product.name}</h4>

      <button className="text-sm text-red-600 font-medium flex items-center gap-2 cursor-pointer hover:underline">
        View Product <span>👁</span>
      </button>
    </motion.div>
  );
}
