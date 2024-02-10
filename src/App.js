import "./App.css";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import VideoDB from './data/data'
import { useState } from "react";
function App() {
  const [videos,setVideos]=useState(VideoDB);

  function addVideos(video){
    setVideos([...videos,{...video,id: videos.length+1}])
  }
  function deleteVideos(id){
    setVideos(videos.filter(video=>video.id!==id))
    console.log(id);
  }
  return (
    <div className="App">
    <AddVideo addVideos={addVideos}/>
    <VideoList deleteVideos={deleteVideos} videos={videos}/>
    </div>
  );
}

export default App;
