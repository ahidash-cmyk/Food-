const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-black text-white p-4 flex gap-4">
      <button onClick={() => scrollTo("home")}>Home</button>
      <button onClick={() => scrollTo("trending")}>Trending</button>
      <button onClick={() => scrollTo("top")}>Top Rated</button>
      <button onClick={() => scrollTo("search")}>Search</button>
    </nav>
  );
};
export default Navbar;