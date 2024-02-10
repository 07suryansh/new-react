import React, { useState } from "react";
import "./AddVideo.css";
import videos from "../data/data";

const intialState={
  channel: "Channel 4",
  views: "70M",
  time: "9 month ago",
  title:'',
}

export default function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(intialState);
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(intialState)
  }
  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form action="">
      <input
        type="text"
        onChange={handleChange}
        name="title"
        id=""
        placeholder="Title"
        value={video.title}
      />
      <input
        type="text"
        onChange={handleChange}
        name="views"
        id=""
        placeholder="Views"
        value={video.views}
      />
      <button onClick={handleSubmit}>Add Video</button>
    </form>
  );
}
