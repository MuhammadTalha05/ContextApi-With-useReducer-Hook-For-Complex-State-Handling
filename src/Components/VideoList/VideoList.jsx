import React, { useContext } from 'react'
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail'
import VideosContext from '../../../context/VideosContext'

const VideoList = ({editVideo}) => {

  const video = useContext(VideosContext)
  return (
    <div className='flex'>
      {
        video?.map((val, index)=>{
          return(
            <div key={index}>
              <VideoThumbnail {...val} editVideo={editVideo}></VideoThumbnail>
            </div>
          )
        })
      }
    </div>
  )
}

export default VideoList