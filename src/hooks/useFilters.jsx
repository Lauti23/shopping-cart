import { FiltersContext } from "../context/FilterContext";
import { useContext } from "react";

export function useFilters() {
    const { filters } = useContext(FiltersContext) 

    const filterProducts = (products) => {
        return products.filter((prod) => {
            return (
                prod.price >= filters.minPrice &&
                (filters.category === "all" ||
                    prod.category === filters.category)
            );
        });
    };

    return { filters, filterProducts }
}