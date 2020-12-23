import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={videoSrc}
          allowFullScreen="allowfullscreen"
        />
      </div>
      <div className="ui segment">
        <h2 className="ui header">
          <i className="user circle icon"></i>
          {video.snippet.channelTitle}
        </h2>
        <h3>{video.snippet.title}</h3>
        <p className="ui message">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
