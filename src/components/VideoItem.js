import React from 'react';

const VideoItem = ({ video }) => {
    return <div>
        <div>{video.snippet.title}</div>
        <div><img src={video.snippet.thumbnails.default.url} alt="" /></div>
    </div> 
}

export default VideoItem