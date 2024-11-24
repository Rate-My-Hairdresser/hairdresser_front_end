import { Box, Modal, InputBase, Input, Chip, Button, IconButton, Slider } from "@mui/material"
import { useState, useEffect } from "react"
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import { HeaderText, MiniHeaderText } from "../../general/Text"


const FilterModal = ({options, selected, open, onClose, onApply, maxPrice, maxDistance}) => {

    const [selectedChips, setSelectedChips] = useState([]);
    const [maximumPrice, setMaximumPrice] = useState(20);
    const [maximumDistance, setMaximumDistance] = useState(0);

    const [oldPrice, setOldPrice] = useState(20);
    const [oldDistance, setOldDistance] = useState(0);

    //this resets the price/distance if they remove it
    useEffect(() => {
        setMaximumPrice(maxPrice);
    }, [maxPrice]);

    useEffect(() => {
        setMaximumDistance(maxDistance);
    }, [maxDistance]);

    

    useEffect(() => {
        if(selected) {
            setSelectedChips(selected);
        }
    }, [selected]);

    const maxPriceChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setMaximumPrice(newValue);
        }
    }

    const maxDistanceChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setMaximumDistance(newValue);
        }
    }

    const handleChipClick = (value) => {
        setSelectedChips((prevSelectedChips) => {
            if (prevSelectedChips.includes(value)) {
                // If the chip is already selected, remove it from the array
                return prevSelectedChips.filter((chipIndex) => chipIndex !== value);
            } else {
                // If it's not selected, add it to the array
                return [...prevSelectedChips, value];
            }
        });
    };

    const handleClose = () => {
        setSelectedChips(selected)
        setMaximumPrice(oldPrice);
        setMaximumDistance(oldDistance);
        onClose();
    }

    const handleApply = () => {
        setOldDistance(maximumDistance);
        setOldPrice(maximumPrice);
        onApply({selectedChips: selectedChips, maximumPrice: maximumPrice, maximumDistance: maximumDistance})
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={containerStyle}>
                    <CloseContainer>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </CloseContainer>
                    <HeaderText>
                        Filters
                    </HeaderText>
                    <Box sx={innerContainer}>
                        
                        <FilterRow>
                            <HeaderText style={localheaderStyle}>
                                Maximum price: 
                            </HeaderText>
                            <Box sx={{width: 300, paddingLeft: 2, display: 'flex', alignItems: 'center'}}>
                                <Slider 
                                    valueLabelDisplay="on"
                                    min={20}
                                    max={400}
                                    value={maximumPrice}
                                    valueLabelFormat={(value) => {return '$' + value}}
                                    onChange={maxPriceChange}
                                />
                            </Box>
                        </FilterRow>
                        <FilterRow>
                            <HeaderText style={localheaderStyle}>
                                Maximum distance: 
                            </HeaderText>
                            <Box sx={{width: 300, paddingLeft: 2, display: 'flex', alignItems: 'center'}}>
                                <Slider 
                                    valueLabelDisplay="on"
                                    min={0}
                                    max={40}
                                    value={maximumDistance}
                                    valueLabelFormat={(value) => {return value + " km"}}
                                    onChange={maxDistanceChange}
                                />
                            </Box>
                        </FilterRow>
                        <FilterRow>
                            <HeaderText style={localheaderStyle}>
                                Services: 
                            </HeaderText>
                        </FilterRow>
                        <FilterContainer>
                            {
                                Object.entries(options).map(([category, services]) => (
                                    <div>
                                    <h3>{category}</h3>
                                    {services.map((value, index) => (
                                        <Chip 
                                            sx={{
                                                ...chipStyle,
                                                backgroundColor: selectedChips.includes(value) ? 'primary.main' : 'default',
                                                color: selectedChips.includes(value) ? 'white' : 'inherit',
                                            }}
                                            key={index}
                                            label={value} 
                                            onClick={() => handleChipClick(value)}
                                        />
                                    ))}
                                    </div>
                                ))
                            }
                        </FilterContainer>
                    </Box>
                    <ApplyFiltersBox>
                        <Button variant="contained" onClick={handleApply}>
                            Apply filters
                        </Button>
                    </ApplyFiltersBox>
                </Box>  
            </Modal>
        </>
    )
}

export default FilterModal;

const chipStyle = {
    marginBottom: '1rem',
    marginRight: '0.5rem'
}

const localheaderStyle = {
    margin: 0,
}

const containerStyle = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: '#F2F0EF', 
    borderRadius: '15px',
    padding: '3rem',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column'
}

const innerContainer = {
    overflowY: 'auto',
}

const FilterRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 30px;
`

const FilterContainer = styled.div`
    margin-top: 1rem;
`

const ApplyFiltersBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

const CloseContainer = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`