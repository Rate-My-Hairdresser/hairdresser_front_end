import React, { useState } from "react";
import { Modal, TextField } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../general/colors";

const STAR_COUNT = 5;

const ReviewModal = ({ open, handleClose }) => {
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(-1);
    const [comment, setComment] = useState("");

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        console.log("Rating:", rating);
        console.log("Comment:", comment);
        handleClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <ModalContent>
                <CloseButton onClick={handleClose}>✕</CloseButton>
                <Title>Write a Review</Title>
                <StarContainer>
                    {[...Array(STAR_COUNT)].map((_, index) => (
                        <Star
                            key={index}
                            filled={index < (hoveredStar !== -1 ? hoveredStar + 1 : rating)}
                            onClick={() => handleStarClick(index)}
                            onMouseEnter={() => setHoveredStar(index)}
                            onMouseLeave={() => setHoveredStar(-1)}
                        >
                            ★
                        </Star>
                    ))}
                </StarContainer>
                <TextField
                    label="Comment"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={comment}
                    onChange={handleCommentChange}
                />
                <ButtonContainer>
                    <UploadButton onClick={() => document.getElementById('image-upload').click()}>
                        Upload Image
                    </UploadButton>
                    <SubmitButton onClick={handleSubmit}>
                        Submit
                    </SubmitButton>
                </ButtonContainer>
            </ModalContent>
        </Modal>
    );
};

export default ReviewModal;

const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    position: relative;
    max-width: 500px;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    background: none;
    font-size: 1.5rem;
    color: #aaa;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: #f00;
    }
`;

const Title = styled.h2`
    text-align: center;
    margin: 0 0 1rem;
`;

const StarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Star = styled.span`
    font-size: 4rem;
    cursor: pointer;
    color: ${({ filled }) => (filled ? colors.star_color : "#ccc")};
    transition: color 0.2s;

    &:hover {
        color: ${colors.star_color};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

const UploadButton = styled.button`
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    cursor: pointer;
    width: fit-content;

    &:hover {
        opacity: 0.8;
    }
`;

const SubmitButton = styled.button`
    background-color: ${colors.star_color};
    color: black;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.75rem;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
        background-color: ${colors.dark_star};
    }
    &:active {
        opacity: 0.4;
    }
`;
