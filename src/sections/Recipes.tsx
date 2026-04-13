import { useState } from "react";
import { useMeals } from "../hooks/useMeals";
import { motion } from "framer-motion";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [category, setCategory] = useState("Seafood");
  const { data, isLoading } = useMeals(category);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">

      {/* العنوان */}
      <motion.h2
        className="text-2xl mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Recipes
      </motion.h2>

      {/* الأزرار */}
      <motion.div
        className="flex gap-2 mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button onClick={() => setCategory("Seafood")}>Seafood</button>
        <button onClick={() => setCategory("Chicken")}>Chicken</button>
        <button onClick={() => setCategory("Beef")}>Beef</button>
      </motion.div>

      {/* الكروت */}
      <motion.div
        className="flex gap-4 flex-wrap"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // يطلعوا واحد ورا التاني 🔥
            },
          },
        }}
      >
        {data.meals.map((meal: any) => (
          <motion.div
            key={meal.idMeal}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <RecipeCard meal={meal} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Recipes;