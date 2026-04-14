import Section from "./components/Section";
import Layout from "./layout/Layout";
import Categories from "./sections/Catagories";

// import Recipes from "./sections/Recipes";
import Search from "./sections/Search";

function App() {
  return (
    <Layout>
      <Section id="home">
        <div className="mt-10">
          <h1 className="text-4xl font-bold mb-5 mt-0">🍔 Food App</h1>

          <p className="text-gray-400 mt-3 mb-5 text-xl">
            Discover delicious meals from around the world
          </p>

          <div className="flex gap-8 mt-6">
            {["Seafood", "Chicken", "Beef"].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-red-500 transition"
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="mt-6 px-6 py-2 bg-red-500 rounded-xl hover:bg-red-600">
            Explore Meals
          </button>
        </div>
      </Section>

      <Section id="categories">
        <Categories />
      </Section>
{/* 
      <Section id="recipes">
        <Recipes />
      </Section> */}

      <Section id="search">
        <Search />
      </Section>
    </Layout>
  );
}

export default App;
