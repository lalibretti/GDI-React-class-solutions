import React from 'react';
import FeedItem from './FeedItem.jsx';

function FeedList(props) {
    const {props} = props;
    return (
        <div className="FeedList">
            {
                photos.map((photo,i) =>
                <FeedItem photo ={photo} key={i} />
                )
            }
            <FeedItem />
        </div>
    );
};

export default FeedList;