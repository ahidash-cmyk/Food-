const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-black text-white p-4 flex gap-6 z-50">
      <button onClick={() => scrollTo("home")}>Home</button>
      <button onClick={() => scrollTo("categories")}>Categories</button>
      <button onClick={() => scrollTo("recipes")}>Recipes</button>
      <button onClick={() => scrollTo("search")}>Search</button>
    </nav>
  );
};

export default Navbar;