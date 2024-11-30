import hairdresserData from "../data/hairdresserList.json";

/**
 * 
 * @param {Array} idArray Array of hairdresser IDs to retrieve.
 * @returns {[Array, Array]} Returns an array with [0]: filtered hairdresser data, [1]: array of coordinates
 */
export const searchByIds = (idArray) => {
    // Filter hairdresser data based on IDs
    const filteredResults = idArray
        .map(id => hairdresserData[id]) // Map IDs to corresponding hairdresser objects
        .filter(Boolean); // Filter out any undefined values if an ID is invalid

    // Extract coordinates from the filtered results
    const coordinates = filteredResults.map(result => result.salon.coordinates);

    return [filteredResults, coordinates];
};
