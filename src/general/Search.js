import hairdresserData from "../data/hairdresserList.json";

/**
 * 
 * @param {*} maximumPrice 
 * @param {*} text 
 * @param {*} filterChips 
 * @returns {[Array, Array]} Returns an array with [0]: filtered hairdresser data, [1]: array of coordinates
 */
export const search = (maximumPrice, text, filterChips) => {
    const textWeight = 10;
    const priceWeight = 5;
    const filterWeight = 1;

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

            if (filterChips.length > 0) {
                filterChips.forEach((filter) => {
                    if (value.filters.includes(filter)) {
                        stylistRelevance += filterWeight;
                    }
                });
            }

            return { key, stylistRelevance };
        })
        .filter(({ stylistRelevance }) => stylistRelevance > 0)
        .sort((a, b) => b.stylistRelevance - a.stylistRelevance);

    const filteredResults = mapArr.map(({ key }) => hairdresserData[key]);
    const coordinates = filteredResults.map(result => result.salon.coordinates);

    return [filteredResults, coordinates];
};
