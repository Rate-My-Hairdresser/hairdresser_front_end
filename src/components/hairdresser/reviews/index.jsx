import { Box, Rating } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../general/colors";
import img1 from "./download.jpeg"
const Reviews = () => {
    // Updated sample reviews data with optional photo
    const reviews = [
        {
            rating: 5,
            comment: "Amazing experience! The stylist was very attentive and skilled.",
            photo: img1,
        },
        {
            rating: 1,
            comment: "Great haircut, but had to wait a bit longer than expected. Filler for more words to see what happens when it is a really long comment. I HATED my service. It was TERRIBLE. I will never get my hair cut ever again. Genuineky tramautic. My hair will never be the same ",
            // No photo for this review
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
            {reviews.map((review, index) => (
                <ReviewBox key={index}>
                    <ReviewContent>
                        <Rating name={`review-rating-${index}`} value={review.rating} readOnly />
                        <Comment>{review.comment}</Comment>
                    </ReviewContent>
                    {review.photo && <ReviewPhoto src={review.photo} alt={`Review ${index + 1}`} />}
                </ReviewBox>
            ))}
            <LeaveReviewButton variant="contained">Leave a Review</LeaveReviewButton>
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
`;

const Title = styled.h2`
    margin: 0 0 1rem 0;
    color: ${colors.primary};
    text-align: center;
`;

const ReviewBox = styled(Box)`
    display: flex;
    justify-content: space-between; // Ensures the photo is aligned to the right
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.secondary};
    border-radius: 10px;
`;

const ReviewContent = styled.div`
    flex: 1; // Ensures the content takes up space without overlapping the photo
`;

const Comment = styled.p`
    margin-top: 0.5rem;
`;

const ReviewPhoto = styled.img`
    max-width: 100px; // Adjust as needed
    max-height: 100px;
    margin-left: 1rem;
    border-radius: 8px; // Rounded corners for the photo
    object-fit: cover; // Ensures the photo is properly cropped and scaled
`;

const LeaveReviewButton = styled.button`
    background-color: ${colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100%;
    &:hover {
        background-color: ${colors.secondary};
    }
`;
