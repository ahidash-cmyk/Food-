import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "../api/food";

export const useMeals = (categories: string) => {
  return useQuery({
    queryKey: ["Meals", categories],
    queryFn: () => getMealsByCategory(categories),
    enabled: !!categories,
  });
};