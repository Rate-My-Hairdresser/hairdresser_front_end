import React, { useRef, useState } from "react";
import { Modal, TextField, Stack } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../general/colors";

const STAR_COUNT = 5;

const ReviewModal = ({ open, handleClose, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [photo, setPhoto] = useState();
    const [hoveredStar, setHoveredStar] = useState(-1);
    const [comment, setComment] = useState("");
    const [error, setError] = useState(""); // State for the error message
    const fileInputRef = useRef();

    const handleStarClick = (index) => {
        setRating(index + 1);
        setError(""); // Clear error if they click a star
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = () => {
        if (rating === 0) {
            setError("Please select a star rating."); // Set error if no rating
            return;
        }
        onSubmit(comment, photo, rating);
        handleClose();
    };

    const handleUpload = (event) => {
        const files = event.target.files;
        console.log(files);
        setPhoto(URL.createObjectURL(files[0]));
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
                {error && <ErrorMessage>{error}</ErrorMessage>} {/* Display error */}
                <Stack direction="row" spacing={2}>
                <TextField
    label="How was your service?"
    multiline
    rows={4}
    variant="outlined"
    fullWidth
    margin="normal"
    value={comment}
    onChange={handleCommentChange}
    inputProps={{ maxLength: 200 }} // Set maxLength to 200
    helperText={`${comment.length}/200 characters`} // Display character count
    sx={{
        "& .MuiInputLabel-root": {
            color: colors.black, // Set the label color to dark_background
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#ccc", // Default border color
            },
            "&:hover fieldset": {
                borderColor: "#888", // Border color on hover
            },
            "&.Mui-focused fieldset": {
                borderColor: colors.dark_background, // Use dark background color for border on focus
            },
        },
    }}
/>


    {photo && (
        <ImageContainer>
            <RemoveButton onClick={() => setPhoto(null)}>✕</RemoveButton>
            <ImagePreview src={photo} />
        </ImageContainer>
    )}
</Stack>
                <ButtonContainer>
                    <input
                        onChange={(e) => handleUpload(e)}
                        multiple={false}
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                    />
                    <UploadButton onClick={() => fileInputRef.current.click()}>
                        {photo ? "Replace Image" : "Upload Image (optional)"}
                    </UploadButton>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
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

const ErrorMessage = styled.p`
    color: black;
    font-size: 0.9rem;
    text-align: center;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
    margin-top: 16px;
    margin-bottom: 8px;
    width: 140px;
    height: 125px;
    position: relative;
`;

const ImagePreview = styled.img`
    width: 140px;
    height: 125px;
    object-fit: cover;
    border-radius: 5px;
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

const RemoveButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    color: black;
    font-size: 1rem;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }
`;

const SubmitButton = styled.button`
    background-color: ${colors.dark_background};
    color: black;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1.75rem;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.4;
    }
`;
