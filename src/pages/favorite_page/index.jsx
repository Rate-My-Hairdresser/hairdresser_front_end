import React, { useState, useEffect } from 'react';
import FavoriteRow from '../../components/favorites/favorite_row/index';
import HomeIcon from '../../components/favorites/homeicon/index';
import data from '../../components/favorites/data.json'


const FavoritesPage = () => {

    const [favorites, setFavorites] = useState(data);

    return (
        <div>
            {/* Header Section */}
            <header style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '0px' }}>
                <HomeIcon />
                <h1 style={{ marginLeft: '10px', fontSize: '24px' }}>My Favorites</h1>
            </header>

           {/* List of Favorite Rows */}
           {favorites.map((hairdresser) => (
                <FavoriteRow
                    key={hairdresser.id}
                    profilePic={hairdresser.profilePic}
                    galleryPics={hairdresser.galleryPics}
                    name={hairdresser.name}
                    bio={hairdresser.bio}
                    onRemove={() => console.log(`Remove ${hairdresser.name}`)} // Placeholder for remove function
                />
            ))}
        </div>
    );
};

export default FavoritesPage;