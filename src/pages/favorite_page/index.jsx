

import { useCallback, useEffect, useState } from "react";
import { Button, Stack, InputBase, Chip, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import MapComp from "../../components/map/MapComp";
import { colors } from "../../general/colors";
import './animation.css';
import FilterModal from "../../components/filter_modal/FilterModal";
import SearchResult from "../../components/favorites/favorite_row/index";
import { hairServiceFilters } from "../../data/filterChips"
import { useWindowDimensions } from  "../../general/helpers"
import { searchByIds } from "../../general/searchByIds";


const Favoritepage = () => {
    const { height, width } = useWindowDimensions();
    
    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState([])
    const [maximumPrice, setMaximumPrice] = useState()
    const [maximumDistance, setMaximumDistance] = useState();
    const [modalVisible, setModalVisible] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [coordinateResults, setCoordinateResults] = useState([])
    const [currentHover, setCurrentHover] = useState();
    const [hoveredMarker, setHoveredMarker] = useState()

    // search algorithm
    useEffect(() => {
        const favoriteIds = ["1", "2", "3", "4"]; // Static list of hairdresser IDs
        const [results, coords] = searchByIds(favoriteIds); // Fetch results and coordinates
        console.log(results);
        setCoordinateResults(coords); // Update coordinates state
        setSearchResults(results);   // Update search results state
    }, []);
    


    useEffect(() => {
        if(searchResults[currentHover]) {
            setHoveredMarker(searchResults[currentHover].salon.coordinates)
        } else {
            setHoveredMarker()
        }
        console.log(hoveredMarker)
        // setHoveredMarker(searchResults[currentHover].salon.coordinates)
    }, [currentHover, hoveredMarker, searchResults])

    


    const handleClose = useCallback(() => {
        setModalVisible(false);
    }, []);


    const handleApply = useCallback((filterObject) => {
        const { selectedChips, maximumPrice, maximumDistance } = filterObject;

        setMaximumDistance(maximumDistance)
        setMaximumPrice(maximumPrice)
        setFilters(selectedChips)
        setModalVisible(false);
    }, []);


    const handleChipDelete = (index) => {
        const tempArr = filters.filter(item => item !== filters[index]);
        setFilters(tempArr);
    };


    // Determine if any filter or search value is applied

    const sideWidth = width/2 -48
    const slideAmount = Math.abs((height/2-280) - 100 +293.4)

    return (
       <HomepageContainer style={{height: height-100}}>
            <FilterModal options={hairServiceFilters} selected={filters} open={modalVisible} onClose={handleClose} onApply={handleApply} maxPrice={maximumPrice} maxDistance={maximumDistance} />
            <MainContainer>
                <LeftContainer style={{width: sideWidth}}>
                    <LeftBox style={ (searchValue.length > 0 || filters.length > 0 || maximumPrice) ? {marginTop: height/2 -280, transform: `translateY(${-slideAmount}px)`} : {marginTop: height/2 -280, transform: 'translateY(0px)'}} className={`container ${(searchValue.length > 0 || filters.length > 0 || maximumPrice) ? ''  : 'slide-down'}`} >
                        <BigHeader style={{color: colors.dark_background}}>Favorites</BigHeader>
                        
                        <SearchContainer div>
                            <Stack direction="column">
                                <SearchResultsBox className="searchResults" style={searchResults.length > 0 ? {border: `3px solid ${colors.dark_background}`} : {}} onMouseLeave={() => setCurrentHover()}>
                                    {searchResults.map((value, index) => (
                                        <>
                                            <SearchResult hover={currentHover === index} name={value.name} priceLow={value.minimum_price} priceHigh={value.maximum_price} labels={value.filters} images={value.gallery} ratings={value.reviews} onMouseEnter={() => setCurrentHover(index)}/>
                                            {
                                                value === searchResults[searchResults.length-1] ? "" : <Divider variant="middle" sx={{borderColor: colors.secondaryBackground}}/>
                                            }
                                            
                                        </>
                                    ))}
                                </SearchResultsBox>
                            </Stack>
                        </SearchContainer>
                    </LeftBox>
                </LeftContainer>


                <RightContainer style={{width: sideWidth, height: height-164}}>
                    <MapContainer style={{width: sideWidth, height: height-164}}>
                        <MapComp mainMarker={hoveredMarker} markers={coordinateResults} /> 
                    </MapContainer>
                </RightContainer>
            </MainContainer>
        </HomepageContainer>
    );
};




export default Favoritepage;

const styles = {
    largeIcon: {
        fontSize: '30px',
        color: colors.dark_background
    },
    filterButton: {
        marginRight: '1rem',
        marginLeft: '1rem',
        borderRadius: '15px',
        backgroundColor: colors.dark_background,
        color: colors.text.primary
    },
}
const BigHeader = styled('h1')`
    font-weight: 400;
    font-size: 72px;
    color: ${colors.text.primary};
    font-family: 'DarkerGrotesque';
    margin: 0px;
`

//background-color: ${colors.background};
const HomepageContainer =  styled('div')`
    display: flex;
    height: 100px;
`;

const MainContainer = styled('div')`
    display: flex;
    gap: 32px;
    width: 100%;
    background-color: ${colors.background};
`;

const LeftBox = styled('div')`
`

const LeftContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:-100px;
`;

const RightContainer = styled('div')`
`;

const MapContainer = styled('div')`
    position: fixed;
`

const SearchContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`


const SearchResultsBox = styled('div')`
    margin-top: 1rem;
    width: 49rem;
    background-color: ${colors.offwhite};
    border-radius: 15px;
    max-height: 689.306px;
    overflow-y: scroll;
`
