import { useState } from "react";
import { useCategories } from "../hooks/useCategories";
import { useMeals } from "../hooks/useMeals";
import { motion } from "framer-motion";

interface Category {
  idCategory: string;
  strCategory: string;
}

const allowedCategories = ["Seafood", "Chicken", "Beef"];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Seafood");
  const [limit, setLimit] = useState(6);
  const [hasExpanded, setHasExpanded] = useState(false);

  const { data: categoriesData } = useCategories();
  const { data: mealsData, isLoading } = useMeals(selectedCategory);

  const meals = mealsData?.meals || [];

  return (
    <div className="mt-10">
      <h2 className="text-2xl mb-6">Categories</h2>

      {/* 🔹 Categories */}
      <div className="flex gap-4 flex-wrap mb-8">
        {categoriesData?.categories
          .filter((c: Category) =>
            allowedCategories.includes(c.strCategory)
          )
          .map((c: Category) => (
            <motion.div
              key={c.idCategory}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setSelectedCategory(c.strCategory);
                setLimit(6);
                setHasExpanded(false); // 👈 مهم
              }}
              className={`p-4 rounded-xl cursor-pointer transition 
                ${
                  selectedCategory === c.strCategory
                    ? "bg-red-500"
                    : "bg-gray-800"
                }`}
            >
              {c.strCategory}
            </motion.div>
          ))}
      </div>

      {/* 🔹 Meals */}
      {isLoading ? (
        <p>Loading meals...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.slice(0, limit).map((meal: any) => (
              <motion.div
                key={meal.idMeal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 p-4 rounded-xl"
              >
                <img
                  src={meal.strMealThumb}
                  className="rounded-lg mb-2"
                />
                <p>{meal.strMeal}</p>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Buttons */}
          {meals.length > 6 && (
            <div className="flex gap-4 justify-center mt-8">
              {/* Show More */}
              {limit < meals.length && (
                <button
                  onClick={() => {
                    setLimit((prev) => prev + 6);
                    setHasExpanded(true);
                  }}
                  className="px-6 py-2 bg-red-500 rounded-xl hover:bg-red-600 transition"
                >
                  Show More
                </button>
              )}

              {/* Show Less */}
              {hasExpanded && (
                <button
                  onClick={() => {
                    setLimit(6);
                    setHasExpanded(false);
                  }}
                  className="px-6 py-2 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Categories;