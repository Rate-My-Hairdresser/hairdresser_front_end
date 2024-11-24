

import { useCallback, useEffect, useState } from "react";
import { Button, IconButton, Stack, InputBase, Chip, Grid2 } from "@mui/material";
import { Title } from "../../general/Text";
import { styled } from '@mui/material/styles'; // This is for MUI's styled function
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
    const [maximumDistance, setMaximumDistance] = useState();
    const [modalVisible, setModalVisible] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [coordinateResults, setCoordinateResults] = useState([])

    // search algorithm
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
    const isSearchOrFilterApplied = searchValue || filters.length > 0 || maximumPrice;


    return (
       <HomepageContainer>
            <FilterModal options={hairServiceFilters} selected={filters} open={modalVisible} onClose={handleClose} onApply={handleApply} maxPrice={maximumPrice} maxDistance={maximumDistance} />
            <StyledHeader>
    {/* Header content */}
</StyledHeader>
<Logo
style={{
                color: 'white',
                top:5,
                fontSize: '20px',
                font: 'baloo',
               
            }}>
    ✄RateMyHairdresser
</Logo>
<LoginContainer>
    <HairDresserSignInBtn color="secondary" />
</LoginContainer>

            <MainContainer>
                <LeftContainer>
                <Topbar>
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <StyledHeader /> {/* Render the black header bar */}
    <Title
            style={{
                fontWeight: 'bold',
                whiteSpace: 'pre-line',
                textAlign: 'left',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 1,
                WebkitTextStroke: '4px #ff6698', // Thicker black outline
            }}
        >
            Search{"\n"}For a{"\n"}Hairdresser
        </Title>


        {/* White text */}
        <Title
            style={{
                color: 'white',
                whiteSpace: 'pre-line',
                textAlign: 'left',
                position: 'relative',
                zIndex: 2,
                font: 'modak',
            }}
        >
            Search{"\n"}For a{"\n"}Hairdresser
            </Title>
    </div>
</Topbar>
            {/* <LoginContainer>
                <HairDresserSignInBtn/>
            </LoginContainer> */}


                    <SearchBoxContainer>
                        <SearchBox>
                            <SearchInsides>
                                <SearchIcon style={styles.largeIcon} />
                                <SearchText
                                    placeholder="Hairdresser name..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    value={searchValue}
                                    onChange={onSearchChange}
                                />
                                <Button variant="contained" disableElevation style={styles.filterButton} onClick={() => setModalVisible(true)}>
                                    Filters
                                </Button>
                            </SearchInsides>
                            <ChipSection>
                                {maximumPrice && (<NewChips label={"Maximum price: $" + maximumPrice} onDelete={() => setMaximumPrice(false)} />)}
                            {
                                maximumDistance ?
                                    (<NewChips label={"Maximum Distance: " + maximumDistance + "km"} onDelete={() => setMaximumDistance(false)}/>)
                                :
                                (<></>)
                            }
                                {filters.map((value, index) => (
                                    <NewChips label={value} onDelete={() => handleChipDelete(index)} />
                                ))}
                            </ChipSection>
                        </SearchBox>


                        <SearchResultsBox style={{ backgroundColor: isSearchOrFilterApplied ? colors.offwhite : '#ff88af' }}>
                            {searchResults.map((value, index) => (
                                <SearchResult key={index} name={value.name} priceLow={value.minimum_price} priceHigh={value.maximum_price} labels={value.filters} />
                            ))}
                        </SearchResultsBox>
                    </SearchBoxContainer>


                   
                </LeftContainer>


                <RightContainer>
                    <MapComp markers={[]} /> {/* Use your coordinate data here */}
                </RightContainer>
            </MainContainer>
        </HomepageContainer>
    );
};




export default Homepage;




const styles = {
    largeIcon: {
        fontSize: '30px',
        color: '#333333'
    },
    filterButton: {
        marginRight: '1rem',
        marginLeft: '1rem',
        borderRadius: '15px',
        backgroundColor: '#ff6698'
    }
}


const HomepageContainer =  styled('div')`
    background-color: ${colors.background};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
`;

const MainContainer = styled('div')`
    display: flex;
    width: 100%;
    height: 100vh; 
    align-items: stretch; 
`;

const LeftContainer = styled('div')`
    width: 500%;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 8vh; 
    height: 80vh; 
`;


const RightContainer = styled('div')`
    position: fixed;
    height: 100vh; 
    position: relative; 
    width: 500%;   
`;




const SearchBoxContainer = styled('div')`
    margin-top: 2rem;
    overflow-y: hidden;
    overflow-x: hidden;
    `;


const SearchBox =  styled('div')`
    width: 90%;
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
    marginRight: '0.5rem'
}));


const ChipSection =  styled('div')`
    display: flex;
    flex-wrap: wrap;
`;
const SearchResultsBox = styled('div')`
    margin-top: 1rem;
    width: 100%;
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
    box-sizing: border-box;
    min-height: 150px;
    max-height: 300px; 
    overflow-y: auto;
`;


const Topbar = styled('div')`
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 5rem; 

`;


const StyledHeader = styled('div')`
    position: fixed; 
    background-color: ${colors.dark_background};
    top: 0;
    left: 0;

    width: 100%;
    height: 50px;
    z-index: 1; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

`;

const LoginContainer = styled('div')`
    position: fixed; 
    top: 0;
    right: 1rem; 
    z-index: 2; 
    color: pink;
`;
const Logo = styled('div')`
    color: #faa7d5;
    position: fixed;
    padding-top: 0.5rem;
    top: 0;
    left: 1rem; 
    z-index: 2; 
    color: pink;
    `;
