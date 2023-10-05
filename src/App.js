import React, {createContext} from 'react';
import './style.css';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
//import FeedItem from './components/FeedItem';
//import FeedList from './components/FeedList';

export const PhotosContext = createContext(); 

function App() {
    return (
        <PhotosContext.Provider value ={{photos: DataTransfer.photos}} >
        <div>
            <Header />
            <HomePage />
        </div>
        </PhotosContext.Provider >
    );
}

export default App;
