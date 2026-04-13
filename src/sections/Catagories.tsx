import { useCategories } from "../hooks/useCategories";
import { motion } from "framer-motion";

 interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}



const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Categories = () => {
  const { data, isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl mb-6">Categories</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex gap-4 flex-wrap"
      >
        {data.categories.map((c: Category) => (
          <motion.div
            key={c.idCategory}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 p-4 rounded-xl cursor-pointer"
          >
            {c.strCategory}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;