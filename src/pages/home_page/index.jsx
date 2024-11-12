import { useCallback, useEffect, useState } from "react";
import { Button, IconButton, Stack, InputBase, Chip, Grid2 } from "@mui/material";
import { Title } from "../../general/Text";
import style from "styled-components";
import { styled } from '@mui/material/styles';
import MapComp from "../../components/map/MapComp";
import { colors } from "../../general/colors";
import SearchIcon from '@mui/icons-material/Search';
import './animation.css';
import FilterModal from "../../components/filter_modal/FilterModal";
//import hairdresserData from "../../data/hairdresserList.json"
import SearchResult from "../../components/search_result/SearchResult";
import HairDresserSignInBtn from "../../components/hairdresser_login/SignInButton";
import { hairServiceFilters } from "../../data/filterChips"
import { search } from "../../general/Search";




const Homepage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState([])
    const [maximumPrice, setMaximumPrice] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [coordinateResults, setCoordinateResults] = useState([])



    // search algorithm -- currently only checks for price

    useEffect(() => {
        
        const results = search(maximumPrice, searchValue, filters)

        // setCoordinateResults(tempCoords)

        setSearchResults(results)

    }, [searchValue, filters, maximumPrice]);


    

    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleClose = useCallback(() => {
        setModalVisible(false);
    }, []);

    const handleApply = useCallback((filterObject) => {
        const { selectedChips, maximumPrice } = filterObject;

        setMaximumPrice(maximumPrice)

        console.log(selectedChips)
        setFilters(selectedChips)
        setModalVisible(false);
    }, []);

    const handleChipDelete = (index) => {
        const tempArr = filters.filter(item => item !== filters[index])
        setFilters(tempArr)
    }

    // return (
    //     <>
    //         <FilterModal options={hairServiceFilters} selected={filters} open={modalVisible} onClose={handleClose} onApply={handleApply} maxPrice={maximumPrice}/>
    //         <MapContainer>
    //             <MapComp markers={coordinateResults}/>
    //         </MapContainer>
    //         <Topbar>
    //             <Title>Rate My Hairdresser</Title>
    //         </Topbar>
    //         <LoginContainer>
    //             <HairDresserSignInBtn/>
    //         </LoginContainer>
    //         <SearchContainer div className={`container ${(searchValue.length > 0 || filters.length > 0 || maximumPrice) ? 'slide-up' : 'slide-down'}`}>
    //             <Stack direction="column">
    //                 <SearchBox>
    //                     <SearchInsides>
    //                         <SearchIcon style={styles.largeIcon}/>
    //                         <SearchText
    //                             placeholder="Search for a hairdresser…"
    //                             inputProps={{ 'aria-label': 'search' }}
    //                             value={searchValue}
    //                             onChange={onSearchChange}
    //                         />
    //                         <Button variant="contained" disableElevation style={styles.filterButton} onClick={() => setModalVisible(true)}>
    //                             Filters
    //                         </Button>
    //                     </SearchInsides>
    //                     <ChipSection>
    //                         {
    //                             maximumPrice ?
    //                                 (<NewChips label={"Maximum price: $" + maximumPrice} onDelete={() => setMaximumPrice(false)}/>)
    //                             :
    //                             (<></>)
    //                         }
    //                         {
    //                             filters.map((value, index) => (
    //                                 <NewChips label={hairServiceFilters[value]} onDelete={() => handleChipDelete(index)}/>
    //                             ))
    //                         }
                            
    //                     </ChipSection>
    //                 </SearchBox>
    //                 <SearchResultsBox>
    //                     {searchResults.map((value, index) => (
    //                         <SearchResult name={value.name} priceLow={value.minimum_price} priceHigh={value.maximum_price} labels={value.filters}/>
    //                     ))}
    //                 </SearchResultsBox>
    //             </Stack>
                
    //         </SearchContainer>
    //     </>
    // )
    return (
        <Grid2 container>
            <Grid2 size={4}>
                {/* <SearchContainer div className={`container ${(searchValue.length > 0 || filters.length > 0 || maximumPrice) ? 'slide-up' : 'slide-down'}`}> */}
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
                                filters.map((value, index) => (
                                    <NewChips label={hairServiceFilters[value]} onDelete={() => handleChipDelete(index)}/>
                                ))
                            }
                            
                        </ChipSection>
                    </SearchBox>
                    <SearchResultsBox>
                        {searchResults.map((value, index) => (
                            <SearchResult name={value.name} priceLow={value.minimum_price} priceHigh={value.maximum_price} labels={value.filters}/>
                        ))}
                    </SearchResultsBox>
                </Stack>
                
            </Grid2>

        </Grid2>
    )
}

export default Homepage;

const styles = {
    largeIcon: {
        fontSize: '30px',
        color: '#333333'
    },
    filterButton: {
        marginRight: '1rem',
        marginLeft: '1rem',
        borderRadius: '15px'
    }
}

const SearchText = styled(InputBase)(({}) => ({
    color: '#333333',
    paddingLeft: '1rem',
    width: '100%',
    fontSize: '24px'
}))

const NewChips = styled(Chip)(({}) => ({
    marginBottom: '1rem',
    marginRight: '0.5rem'
}))



const Topbar = style.div`
    position: absolute;
    width: 100%;
    text-align: center;
`

const LoginContainer = style.div`
    position: absolute;
    right: 2rem;
    top: 21.44px;
    margin-top: auto;
`
const MapContainer = style.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

const SearchContainer = style.div`
    position: absolute;
    top: 35%;
    width: 100%;
    display: flex;
    justify-content: center;
`

const SearchBox = style.div`
    width: 100%;
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding-left: 1rem;
`

const SearchInsides = style.div`
    height: 5rem;
    display: flex;
    align-items: center;
`

const ChipSection = style.div`

`

const SearchResultsBox = style.div`
    margin-top: 1rem;
    width: 36rem;
    background-color: ${colors.offwhite};
    border-radius: 15px;

`