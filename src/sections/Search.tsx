import { useState } from "react";
import { useSearchMeals } from "../hooks/useSearchMeals";
import { motion } from "framer-motion";

const Search = () => {
  const [query, setQuery] = useState("");
  const { data, refetch } = useSearchMeals(query);

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className="p-6">

      {/* البحث */}
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          className="p-2 text-black rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search meal..."
        />

        <motion.button
          onClick={handleSearch}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Search
        </motion.button>
      </motion.div>

      {/* النتائج */}
      <motion.div
        className="flex gap-4 flex-wrap mt-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {data?.meals?.map((m: any) => (
          <motion.div
            key={m.idMeal}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-gray-800 text-white rounded shadow"
          >
            {m.strMeal}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Search;