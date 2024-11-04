// Reviews.js
import React, { useState } from "react";
import { Box, Rating } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../general/colors";
import img1 from "./download.jpeg";
import ReviewModal from "./reviewModal"; // Import the new modal component

const Reviews = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const reviews = [
        {
            rating: 5,
            comment: "Amazing experience! The stylist was very attentive and skilled.",
            photo: img1,
        },
        {
            rating: 1,
            comment: "Great haircut, but had to wait a bit longer than expected. Filler for more words to see what happens when it is a really long comment. I HATED my service. It was TERRIBLE. I will never get my hair cut ever again. Genuineky tramautic. My hair will never be the same ",
        },
        {
            rating: 3,
            comment: "Okay service, but the atmosphere could be better.",
            photo: "path/to/photo2.jpg",
        },
    ];

    return (
        <Container>
            <Title>Reviews</Title>
            <LeaveReviewButton onClick={handleOpen}>Leave a Review</LeaveReviewButton>
            {reviews.map((review, index) => (
                <ReviewBox key={index}>
                    <ReviewContent>
                        <Rating name={`review-rating-${index}`} value={review.rating} readOnly />
                        <Comment>{review.comment}</Comment>
                    </ReviewContent>
                    {review.photo && <ReviewPhoto src={review.photo} alt={`Review ${index + 1}`} />}
                </ReviewBox>
            ))}
            <ReviewModal open={openModal} handleClose={handleClose} /> {/* Use the new modal component */}
        </Container>
    );
};

export default Reviews;

// Styled components
const Container = styled.div`
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
    margin-top: 1rem;
    position: relative;
`;

const Title = styled.h2`
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    text-align: center;
`;

const ReviewBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.secondary};
    border-radius: 10px;
`;

const ReviewContent = styled.div`
    flex: 1;
`;

const Comment = styled.p`
    margin-top: 0.5rem;
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
    background-color: ${colors.star_yellow}; // Set to the same color as the stars
    color: black; 
    border: none;
    border-radius: 5px;
    padding: .75rem 1.75rem;
    font-size: 1.2rem; // Increase font size here

    cursor: pointer;
    &:hover {
        background-color: ${colors.dark_star}; 
    }
`;
