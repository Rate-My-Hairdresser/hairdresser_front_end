import { useState } from "react";
import { Button, IconButton, Stack, InputBase, Chip } from "@mui/material";
import { Title } from "../../general/Text";
import style from "styled-components";
import { styled } from '@mui/material/styles';
import MapComp from "../../components/map/MapComp";
import { colors } from "../../general/colors";
import SearchIcon from '@mui/icons-material/Search';
import './animation.css';




const Homepage = () => {

    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState([])

    const onChange = (event) => {
        setSearchValue(event.target.value)
    }



    return (
        <>
            <MapContainer>
                <MapComp markers={[]}/>
            </MapContainer>
            <Topbar>
                <Title>Rate My Hairdresser</Title>
                
            </Topbar>
            <LoginContainer>
                <Button variant="contained">Login</Button>
            </LoginContainer>
            <SearchContainer div className={`container ${(searchValue.length > 0 || filters.length > 0) ? 'slide-up' : 'slide-down'}`}>
                <SearchBox>
                    <SearchInsides>
                        <SearchIcon style={styles.largeIcon}/>
                        <SearchText
                            placeholder="Search for a hairdresser…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchValue}
                            onChange={onChange}
                        />
                        <Button variant="contained" disableElevation style={styles.filterButton}>
                            Filters
                        </Button>
                    </SearchInsides>
                    <ChipSection>
                        {
                            filters.map((value, index) => (
                                <NewChips label={value} onDelete={() => {}}/>
                            ))
                        }
                    </ChipSection>
                </SearchBox>
                
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