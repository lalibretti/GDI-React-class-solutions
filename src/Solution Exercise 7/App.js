import React, {createContext, useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom"; 
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';


export const PhotosContext = createContext()

function App() {
    const [photos, setPhotos] = useState([])
    const addPhoto = (url) => {
        setPhotos((prevState) => {
            const newPhoto = {
                url: url,
                likes: 0
            }
            return prevState.concat(newPhoto)

            // Photo added to the beginning of array SOLUTION
            // instead of the above return statement use:
            // return prevState.splice(0, 0, newPhoto)
        })
    }

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/5f95dcdbbd69750f00c37370')
            .then(response => response.json())
            .then((data) => {
                setPhotos(data.photos)
            })
    }, [])

    return (
        <PhotosContext.Provider value={{photos, addPhoto}} >
            <div>
                <Header />
                <Routes>
                <Route path = '/' element= {<HomePage /> } />
                <Route path = '/' element= {<AboutPage /> } />
                <Route path = '/' element= {<ProfilePage /> } />
                </Routes>
               <HomePage/>
            </div>
        </PhotosContext.Provider>
    );
}

export default App;