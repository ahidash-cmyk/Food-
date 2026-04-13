const RecipeCard = ({ meal }: any) => {
  return (
    <div className="w-48">
      <img src={meal.strMealThumb} className="rounded-lg" />
      <h3 className="mt-2 text-sm">{meal.strMeal}</h3>
    </div>
  );
};

export default RecipeCard;