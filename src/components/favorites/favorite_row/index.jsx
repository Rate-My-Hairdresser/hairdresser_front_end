import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveIconButton from '../removeicon/index';

const FavoriteRow = ({ profilePic, galleryPics, name, bio, onRemove }) => {
  return (
    <div style={{ 
      padding: '15px', 
      position: 'relative', // Relative positioning to properly place the divider
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        paddingBottom: '15px', // Keep padding for the bottom of the row
      }}>
        {/* Section 1: Profile Picture */}
        <div style={{ flex: 1, marginRight: '10px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src={profilePic} 
            alt={`${name}'s profile`} 
            style={{ 
              width: '12vw', // Dynamic size for circular profile picture (12% of viewport width)
              height: '12vw', // Dynamic height
              maxWidth: '80px', // Max size for larger screens
              maxHeight: '80px', // Max height for larger screens
              borderRadius: '50%', 
              objectFit: 'cover' 
            }} 
          />
        </div>
        
        {/* Section 2: Gallery Pictures */}
        <div style={{ 
          flex: 2, 
          width: '120px', // Fixed width for the square
          height: '200px', // Fixed height for the square
          position: 'relative',
          overflow: 'hidden', // Prevents overflow of images
        }}>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gridTemplateRows: 'repeat(2, 1fr)', 
            gap: '0px', // No gap to avoid overflow
            width: '100%', 
            height: '100%', 
          }}>
            {galleryPics.slice(0, 4).map((pic, index) => (
              <img 
                key={index} 
                src={pic} 
                alt={`Gallery ${index + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '5px', 
                  objectFit: 'cover', // Ensures image fills the square
                  overflow: 'hidden', // Added overflow hidden for each image
                }} 
              />
            ))}
            {/* Fill remaining slots with blank divs if less than 4 images */}
            {[...Array(4 - galleryPics.length)].map((_, index) => (
              <div key={index} style={{ backgroundColor: '#f0f0f0', borderRadius: '5px' }} />
            ))}
          </div>
        </div>
        
        {/* Section 3: Name and Bio */}
        <div style={{ flex: 3, padding: '0 10px' }}>
          <h3 style={{ margin: '0' }}>{name}</h3>
          <p style={{ margin: '0' }}>{bio}</p>
        </div>
        
        {/* Section 4: Remove Button */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="secondary" aria-label="remove" onClick={onRemove}>
              <RemoveIconButton />
            </Fab>
          </Box>
        </div>
      </div>

      {/* Divider Line Between Rows */}
      <hr style={{ margin: '0', border: '1px solid #ddd', width: '100%' }} />
    </div>
  );
};

export default FavoriteRow;
