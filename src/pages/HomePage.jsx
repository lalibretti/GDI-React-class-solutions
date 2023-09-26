import React from "react";
import ImageUploaderForm from '../components/ImageUploaderForm.jsx';
import FeedList from "../components/FeedList.jsx";


function HomePage(){
    return (
    <div className="HomePage">
        <ImageUploaderForm />
        <FeedList photos={photos} />
    </div>
    );
}

export default HomePage;