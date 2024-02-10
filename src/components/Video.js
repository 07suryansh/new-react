import React from "react";
import "./video.css";
export default function Video({
  title,
  id,
  channel,
  views,
  time,
  children,
  deleteVideos,
}) {
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideos(id)}>
          X
        </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
