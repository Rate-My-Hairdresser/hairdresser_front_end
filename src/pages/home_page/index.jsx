import { useCallback, useEffect, useState } from "react";
import { Button, IconButton, Stack, InputBase, Chip } from "@mui/material";
import { Title } from "../../general/Text";
import style from "styled-components";
import { styled } from '@mui/material/styles';
import MapComp from "../../components/map/MapComp";
import { colors } from "../../general/colors";
import SearchIcon from '@mui/icons-material/Search';
import './animation.css';
import FilterModal from "../../components/filter_modal/FilterModal";
import hairdresserData from "../../data/hairdresserList.json"
import SearchResult from "../../components/search_result/SearchResult";




const Homepage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState([])
    const [maximumPrice, setMaximumPrice] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [searchResults, setSearchResults] = useState([])



    // search algorithm -- currently only checks for price

    useEffect(() => {
        console.log("max: ", maximumPrice)
        let tempArr = []

        Object.entries(hairdresserData).map(([key, value], index) => {
            if(maximumPrice) {
                if(value.minimum_price < maximumPrice) {
                    //price matches
                    tempArr.push(value)
                }
            }
        })

        setSearchResults(tempArr)

    }, [searchValue, filters, maximumPrice]);


    const hairServiceFilters = [
        "Haircut",
        "Hair Coloring",
        "Highlights",
        "Balayage",
        "Ombre",
        "Root Touch-Up",
        "Gloss Treatment",
        "Hair Styling",
        "Blowout",
        "Updo",
        "Braiding",
        "Hair Extensions",
        "Keratin Treatment",
        "Perm",
        "Relaxer",
        "Hair Smoothing",
        "Scalp Treatment",
        "Hair Mask",
        "Deep Conditioning",
        "Bang Trim",
        "Children's Haircut",
        "Men's Haircut",
        "Beard Trim",
        "Hair Consultation",
        "Color Correction",
        "Wedding Hair",
        "Event Styling",
        "Curling",
        "Straightening",
        "Texturizing",
        "Dry Cut",
        "Hair Detox",
        "Custom Color"
    ];

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

    return (
        <>
            <FilterModal options={hairServiceFilters} selected={filters} open={modalVisible} onClose={handleClose} onApply={handleApply} maxPrice={maximumPrice}/>
            <MapContainer>
                <MapComp markers={[]}/>
            </MapContainer>
            <Topbar>
                <Title>Rate My Hairdresser</Title>
            </Topbar>
            <LoginContainer>
                <Button variant="contained">Login</Button>
            </LoginContainer>
            <SearchContainer div className={`container ${(searchValue.length > 0 || filters.length > 0 || maximumPrice) ? 'slide-up' : 'slide-down'}`}>
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
                
            </SearchContainer>
        </>
    )
}

export default Homepage;

const styles = {
    largeIcon: {
        fontSize: '50px',
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
    fontSize: '30px'
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
    width: 35rem;
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