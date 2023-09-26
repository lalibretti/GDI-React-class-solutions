import React from 'react';

function Likes(props) {
	const {totalLikes} = props;
	return (
		<div className="Likes">
			<span>{totalLikes}</span>
			<button className="LikesButton">
				Like
			</button>
		</div>
	);
}

export default Likes;
