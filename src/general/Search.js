import hairdresserData from "../data/hairdresserList.json";
import { hairServiceFilters } from "../data/filterChips";

/**
 * 
 * @param {*} maximumPrice 
 * @param {*} text 
 * @param {*} filterChips 
 * @returns {JSON}
 */
export const search = (maximumPrice, text, filterChips) => {
    //basic constants(weights, number of results)
    const textWeight = 10
    const priceWeight = 5
    const filterWeight = 1;
    const numberOfResults = 10;


    // Convert filterChips indices to filter text
    const filterText = filterChips
        .filter((chip) => hairServiceFilters[chip] !== undefined)
        .map((chip) => hairServiceFilters[chip]);

    const mapArr = Object.entries(hairdresserData)
        .map(([key, value]) => {
            let stylistRelevance = 0;

            // Check if text matches name or salon name
            if (text) {
                if (value.name.includes(text)) stylistRelevance += textWeight;
                if (value.salon.name.includes(text)) stylistRelevance += textWeight;
            }

            // Check if price is within maximumPrice
            if (maximumPrice && value.minimum_price <= maximumPrice) {
                stylistRelevance += priceWeight;
            }

            // Check if filters match
            if (filterText.length > 0) {
                filterText.forEach((filter) => {
                    if (value.filters.includes(filter)) {
                        stylistRelevance += filterWeight;
                    }
                });
            }

            return { key, stylistRelevance };
        })
        .filter(({ stylistRelevance }) => stylistRelevance > 0) // Only keep relevant items
        .sort((a, b) => b.stylistRelevance - a.stylistRelevance) // Sort by relevance descending
        .slice(0, numberOfResults); // Limit to top 10

    // Build final array based on sorted keys
    return mapArr.map(({ key }) => hairdresserData[key]);
};
