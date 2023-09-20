import React from 'react';
import './style.css';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import FeedItem from './components/FeedItem';
import FeedList from './components/FeedList';

function App() {
    return (
        <div>
            <Header />
            <HomePage />
            
        </div>
    );
}

export default App;
