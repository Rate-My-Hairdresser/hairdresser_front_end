

import { useCallback, useEffect, useState } from "react";
import { Button, Stack, InputBase, Chip, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
import MapComp from "../../components/map/MapComp";
import { colors } from "../../general/colors";
import SearchIcon from '@mui/icons-material/Search';
import './animation.css';
import FilterModal from "../../components/filter_modal/FilterModal";
import SearchResult from "../../components/search_result/SearchResult";
import { hairServiceFilters } from "../../data/filterChips"
import { search } from "../../general/Search";
import { useWindowDimensions } from  "../../general/helpers"

const Homepage = () => {
    const { height, width } = useWindowDimensions();
    
    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState([])
    const [maximumPrice, setMaximumPrice] = useState()
    const [maximumDistance, setMaximumDistance] = useState();
    const [modalVisible, setModalVisible] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [coordinateResults, setCoordinateResults] = useState([])
    const [currentHover, setCurrentHover] = useState();
    const [hoveredMarker, setHoveredMarker] = useState();
    const [keyIndices, setKeyIndices] = useState();
    const scaleAmount = 0.2//(width/2087)-1  // 0.2 <-laptop

    // search algorithm
    useEffect(() => {
        const results = search(maximumPrice, searchValue, filters)
        console.log(results)
        setCoordinateResults(results[1])
        setSearchResults(results[0])
        setKeyIndices(results[2])
    }, [searchValue, filters, maximumPrice]);


    useEffect(() => {
        if(searchResults[currentHover]) {
            setHoveredMarker(searchResults[currentHover].salon.coordinates)
        } else {
            setHoveredMarker()
        }
        console.log(hoveredMarker)
        // setHoveredMarker(searchResults[currentHover].salon.coordinates)
    }, [currentHover, hoveredMarker, searchResults])

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    };


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
    const slideAmount = Math.abs((height/2-280) - 100 +293.4) * (1 + scaleAmount)

    return (
       <HomepageContainer style={{height: height-100}}>
            <FilterModal options={hairServiceFilters} selected={filters} open={modalVisible} onClose={handleClose} onApply={handleApply} maxPrice={maximumPrice} maxDistance={maximumDistance} />
            <MainContainer>
                <LeftContainer style={{width: sideWidth, transform: `scale(${1-scaleAmount})`}}>
                    <LeftBox style={ (searchValue.length > 0 || filters.length > 0 || maximumPrice) ? {marginTop: height/2 -280, transform: `translateY(${-slideAmount}px)`} : {marginTop: height/2 -280, transform: 'translateY(0px)'}} className={`container ${(searchValue.length > 0 || filters.length > 0 || maximumPrice) ? ''  : 'slide-down'}`} >
                        <BigHeader >FIND</BigHeader>
                        <BigHeader >YOUR</BigHeader>
                        <BigHeader style={{color: colors.dark_background}}>NEW STYLIST</BigHeader>
                        
                        <SearchContainer div>
                            <Stack direction="column">
                                <SearchBox>
                                    <SearchInsides>
                                        <SearchIcon style={styles.largeIcon}/>
                                        <SearchText
                                            placeholder="Search for a hairdresser…"
                                            inputProps={{ 'aria-label': 'search' }}
                                            value={searchValue}
                                            onChange={onSearchChange}
                                        />
                                        <Button variant="contained" disableElevation style={styles.filterButton} onClick={() => setModalVisible(true)}>
                                            Filters
                                        </Button>
                                    </SearchInsides>
                                    <ChipSection>
                                        {
                                            maximumPrice ?
                                                (<NewChips label={"Maximum price: $" + maximumPrice} onDelete={() => setMaximumPrice(false)}/>)
                                            :
                                            (<></>)
                                        }
                                        {
                                            maximumDistance ?
                                                (<NewChips label={"Maximum Distance: " + maximumDistance + 'km'} onDelete={() => setMaximumDistance(false)}/>)
                                            :
                                            (<></>)
                                        }
                                        {
                                            filters.map((value, index) => (
                                                <NewChips label={value} onDelete={() => handleChipDelete(index)}/>
                                            ))
                                        }
                                        
                                    </ChipSection>
                                </SearchBox>
                                <SearchResultsBox className="searchResults" style={searchResults.length > 0 ? {border: `3px solid ${colors.dark_background}`} : {}} onMouseLeave={() => setCurrentHover()}>
                                    {searchResults.map((value, index) => (
                                        <>
                                            <SearchResult hover={currentHover === index} name={value.name} priceLow={value.minimum_price} priceHigh={value.maximum_price} labels={value.filters} images={value.gallery} ratings={value.reviews} onMouseEnter={() => setCurrentHover(index)} index={keyIndices[index]} />
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




export default Homepage;

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


const SearchBox =  styled('div')`
    width: 41rem;
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding-left: 1rem;
    border: 3px solid ${colors.dark_background};
`;

const SearchInsides =  styled('div')`
    height: 5rem;
    display: flex;
    align-items: center;
`;

const SearchText = styled(InputBase)(() => ({
    color: '#333333',
    paddingLeft: '1rem',
    width: '100%',
    fontSize: '30px'
}));

const NewChips = styled(Chip)(() => ({
    marginBottom: '1rem',
    marginRight: '0.5rem',
    backgroundColor: colors.secondaryBackground,
    color: colors.text.primary,
}));

const ChipSection =  styled('div')`
    display: flex;
    flex-wrap: wrap;
`;


const SearchResultsBox = styled('div')`
    margin-top: 1rem;
    width: 42rem;
    background-color: ${colors.offwhite};
    border-radius: 15px;
    max-height: 70vh;
    overflow-y: scroll;
`
