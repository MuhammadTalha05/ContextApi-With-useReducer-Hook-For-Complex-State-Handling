import React, { useContext } from 'react'
import styles from './VideoThumbnail.module.css'
import PlayButton from '../PlayButton/PlayButton'
import VideoDispatch from '../../../context/VideoDispatch'

const VideoThumbnail = ({id, title, channelName, verified,views,time, editVideo}) => {
  const videoDispatch = useContext(VideoDispatch)
  return (
    <div className={styles.wrapper}>
      <button onClick={()=>videoDispatch({type: "DEL", payload: id})} className={styles.delete}>X</button>
      <button onClick={()=>editVideo(id)} className={styles.edit}>✎</button>
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="thumbnail" width={300} height={200}/>
      <h3>{title}</h3>
      <h4>{channelName} {verified && "✅"}</h4>
      <p>Views: {views} . Time: {time}</p>
      <PlayButton onPlay={()=>console.log("Playing..")} onPause={()=>console.log("Paused..")}></PlayButton>

    </div>
  )
}

export default VideoThumbnail