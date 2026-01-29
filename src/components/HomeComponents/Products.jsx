import ProductSlider from "../Slider/ProductSlider";

const Products = () => {
  return (
    <>
      <section id="products" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
            <span className="text-[#00455E]">Products</span>
          </h1>
          <ProductSlider />
        </div>
      </section>
    </>
  );
};

export default Products;
