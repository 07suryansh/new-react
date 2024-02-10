import React from 'react'
import PlayButton from './PlayButton';
import Video from './Video';

export default function VideoList({videos,deleteVideos}) {
  return (
    <div>
        {videos.map((video) => (
        <Video
          id={video.key}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          deleteVideos={deleteVideos}
        >
        <PlayButton
          message={"Play Message"}
          onPlay={() => console.log("Playyy")}
          onPause={() => console.log("Paause")}
          // onClick={() => console.log("Playyy")}
        >
          Play
        </PlayButton>
        </Video>  
      ))}
    </div>
  )
}
