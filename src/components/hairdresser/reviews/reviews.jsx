// Reviews.js
import React, { useState } from "react";
import { Box, Rating } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../general/colors";
import ReviewModal from "./reviewModal"; // Import the review modal component

const Reviews = ({reviews, onSubmit}) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <Container>
            <Title>Reviews</Title>
            <LeaveReviewButton onClick={handleOpen}>Leave a Review</LeaveReviewButton>
            {
                (reviews?.map((review, index) => (
                    <ReviewBox key={index}>
                        <ReviewContent>
                            <Rating name={`review-rating-${index}`} value={review.rating} readOnly />
                            <Comment>{review.comment}</Comment>
                        </ReviewContent>
                        {review.photo && <ReviewPhoto src={review.photo} alt={`Review ${index + 1}`} />}
                    </ReviewBox>
                )) || "")
                
            }
            <ReviewModal open={openModal} handleClose={handleClose} onSubmit={onSubmit}/>
        </Container>
    );
};

export default Reviews;

// Styled components
const Container = styled.div`
    background-color: ${colors.background};
    border-radius: 15px;
    padding: 1rem;
    margin-top: 1rem;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Increased shadow size */
    font-family: 'DarkerGrotesque', sans-serif; /* Apply DarkerGrotesque font */
    font-size: 20px; /* Set font size to 20px */
`;

const Title = styled.h2`
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    text-align: center;
    font-family: 'DarkerGrotesque', sans-serif; /* Apply DarkerGrotesque font */

`;

const ReviewBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.dark_background};
    border-radius: 10px;
    font-family: 'DarkerGrotesque', sans-serif; /* Apply DarkerGrotesque font */
    font-size: 20px; /* Set font size to 20px */
`;

const ReviewContent = styled.div`
    flex: 1;
    font-family: 'DarkerGrotesque', sans-serif; /* Apply DarkerGrotesque font */
    font-size: 20px; /* Set font size to 20px */
`;

const Comment = styled.p`
    margin-top: 0.5rem;
    font-family: 'DarkerGrotesque', sans-serif; /* Apply DarkerGrotesque font */
    font-size: 20px; /* Set font size to 20px */
`;

const ReviewPhoto = styled.img`
    max-width: 100px;
    max-height: 100px;
    margin-left: 1rem;
    border-radius: 8px;
    object-fit: cover;
`;

const LeaveReviewButton = styled.button`
    position: absolute;
    top: 10px; 
    right: 10px; 
    background-color: ${colors.dark_background};
    color: black; 
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.75rem;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.4;
    }
`;
