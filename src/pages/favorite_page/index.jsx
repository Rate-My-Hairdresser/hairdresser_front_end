import React, { useState } from 'react';
import FavoriteRow from '../../components/favorites/favorite_row/index';
import HomeIcon from '../../components/favorites/homeicon/index';
import data from '../../components/favorites/data.json';
import Footer from '../../components/favorites/favorite_footer';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState(data);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header Section */}
            <header style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '10px', 
                borderBottom: '1px solid #ddd' ,
                
            }}>
                <HomeIcon />
                <h1 style={{ marginLeft: '10px', fontSize: '24px' }}>My Favorites</h1>
            </header>

            {/* Main Content Section */}
            <main style={{ padding: '10px', flexGrow: 1 }}>
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
            </main>

            {/* Footer */}
            
            <Footer />
        </div>
    );
};

export default FavoritesPage;
