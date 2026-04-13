import { useQuery } from "@tanstack/react-query";
import { searchMeals } from "../api/food";

export const useSearchMeals = (query: string) => {
    return useQuery({
        queryKey: ["search", query],
        queryFn: () => searchMeals(query),
        enabled: !!query,
    });
};