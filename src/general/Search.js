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
    const textWeight = 10
    const priceWeight = 5
    const filterWeight = 1;
    const numberOfResults = 6;


    const filterText = filterChips
        .filter((chip) => hairServiceFilters[chip] !== undefined)
        .map((chip) => hairServiceFilters[chip]);

    const mapArr = Object.entries(hairdresserData)
        .map(([key, value]) => {
            let stylistRelevance = 0;

            if (text) {
                if (value.name.includes(text)) stylistRelevance += textWeight;
                if (value.salon.name.includes(text)) stylistRelevance += textWeight;
            }

            if (maximumPrice && value.minimum_price <= maximumPrice) {
                stylistRelevance += priceWeight;
            }

            if (filterText.length > 0) {
                filterText.forEach((filter) => {
                    if (value.filters.includes(filter)) {
                        stylistRelevance += filterWeight;
                    }
                });
            }

            return { key, stylistRelevance };
        })
        .filter(({ stylistRelevance }) => stylistRelevance > 0)
        .sort((a, b) => b.stylistRelevance - a.stylistRelevance)
        .slice(0, numberOfResults);

    return mapArr.map(({ key }) => hairdresserData[key]);
};
