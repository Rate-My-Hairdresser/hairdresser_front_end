import { Box, Typography, Rating } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../general/colors";

const Reviews = () => {
    // Sample reviews data - replace with actual review data
    const reviews = [
        {
            name: "Alice Johnson",
            rating: 5,
            comment: "Amazing experience! The stylist was very attentive and skilled.",
        },
        {
            name: "John Smith",
            rating: 4,
            comment: "Great haircut, but had to wait a bit longer than expected.",
        },
        {
            name: "Sara Lee",
            rating: 3,
            comment: "Okay service, but the atmosphere could be better.",
        },
    ];

    return (
        <Container>
            <Title>Reviews</Title>
            {reviews.map((review, index) => (
                <ReviewBox key={index}>
                    <Typography variant="h6">{review.name}</Typography>
                    <Rating name={`review-rating-${index}`} value={review.rating} readOnly />
                    <Comment>{review.comment}</Comment>
                </ReviewBox>
            ))}
            <LeaveReviewButton variant="contained">Leave a Review</LeaveReviewButton>
        </Container>
    );
};

export default Reviews;

const Container = styled.div`
    background-color: ${colors.offwhite};
    border-radius: 15px;
    padding: 1rem;
    margin-top: 1rem; // Add some space at the top
`;

const Title = styled.h2`
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    text-align: center; // Center title
`;

const ReviewBox = styled(Box)`
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.secondary};
    border-radius: 10px;
`;

const Comment = styled.p`
    margin-top: 0.5rem; // Space between rating and comment
`;

const LeaveReviewButton = styled.button`
    background-color: ${colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100%; // Full-width button
    &:hover {
        background-color: ${colors.secondary}; // Change color on hover
    }
`;
