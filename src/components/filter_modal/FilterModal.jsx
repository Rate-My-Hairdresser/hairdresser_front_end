import { Box, Modal, InputBase, Input, Chip, Button, IconButton } from "@mui/material"
import { useState, useEffect } from "react"
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import { HeaderText, MiniHeaderText } from "../../general/Text"


const FilterModal = ({options, selected, open, onClose, onApply, maxPrice}) => {

    const [optionList, setOptionList] = useState([]);
    const [selectedChips, setSelectedChips] = useState([]);
    const [maximumPrice, setMaximumPrice] = useState()

    useEffect(() => {
        setOptionList(options);
    }, [options]);

    useEffect(() => {
        setMaximumPrice(maxPrice);
    }, [maxPrice]);

    useEffect(() => {
        if(selected) {
            setSelectedChips(selected);
        }
    }, [selected]);

    

    const handleMaximumPrice = (event) => {
        if(event.target.value.length <= 4) {
            setMaximumPrice(event.target.value)
        }
    }

    const handleChipClick = (index) => {
        setSelectedChips((prevSelectedChips) => {
            if (prevSelectedChips.includes(index)) {
                // If the chip is already selected, remove it from the array
                return prevSelectedChips.filter((chipIndex) => chipIndex !== index);
            } else {
                // If it's not selected, add it to the array
                return [...prevSelectedChips, index];
            }
        });
    };

    const handleClose = () => {
        setSelectedChips(selected)
        onClose()
    }

    const handleApply = () => {
        onApply({selectedChips: selectedChips, maximumPrice: maximumPrice})
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

                    <FilterRow>
                        <HeaderText style={localheaderStyle}>
                            Maximum price: $
                        </HeaderText>
                        <Input style={inputStyle}
                            sx={{width: "5rem"}}
                            type="number"
                            value={maximumPrice}
                            onChange={handleMaximumPrice}
                        />
                    </FilterRow>
                    {/* <FilterRow>
                        <HeaderText style={localheaderStyle}>
                            Location : 
                        </HeaderText>
                        <Input style={inputStyle}/>
                    </FilterRow> */}
                    <FilterRow>
                        <HeaderText style={localheaderStyle}>
                            Services: 
                        </HeaderText>
                    </FilterRow>
                    <FilterContainer>
                        {
                            optionList.map((value, index) => (
                                <Chip 
                                    sx={{
                                        ...chipStyle,
                                        backgroundColor: selectedChips.includes(index) ? 'primary.main' : 'default',
                                        color: selectedChips.includes(index) ? 'white' : 'inherit',
                                    }} 
                                    label={value} 
                                    onClick={() => handleChipClick(index)}
                                />
                            ))
                            
                        }
                    </FilterContainer>
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

const inputStyle = {
    fontSize: '24px',
    fontweight: 'bold',
    padding: 0
}

const localheaderStyle = {
    margin: 0
}

const containerStyle = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    backgroundColor: '#F2F0EF', 
    borderRadius: '15px',
    padding: '2rem'
}

const FilterRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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