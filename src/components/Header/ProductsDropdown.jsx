import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../productsData";
function ProductsDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="absolute left-1/2 -translate-x-1/2 mt-4 w-[760px]
        bg-white rounded-2xl shadow-xl border p-6">
      <div className="grid grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h4 className="font-semibold text-gray-800 mb-3">{cat.name}</h4>

            <ul className="space-y-2">
              {cat.subCategories.slice(0, 4).map((sub) => (
                <li key={sub.id} className="hover:bg-[#00455E] hover:border rounded-lg">
                  <Link
                    to={`/products/${cat.id}/${sub.id}`}
                    className="text-sm text-gray-600 hover:text-white block px-2 py-1 rounded-lg transition">
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="flex justify-end mt-6">
        <Link to="/products" className="text-sm font-medium text-[#616161] hover:underline">
          View All Products →
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductsDropdown;
