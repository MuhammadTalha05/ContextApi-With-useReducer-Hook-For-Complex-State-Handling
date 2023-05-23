import React, { useContext, useReducer, useState } from 'react'
import {videoDB} from './Database/db'
import AddVideo from './Components/AddVideo/AddVideo';
import VideoList from './Components/VideoList/VideoList';
import ThemeContext from '../context/ThemeContext';
import VideosContext from '../context/VideosContext';
import VideoDispatch from '../context/VideoDispatch';

const App = () => {
  
  const [updatingVideo, setUpdatingVideo] = useState(null)

  const themeContext = useContext(ThemeContext);
  const [mode, setMode] = useState(themeContext)

  console.log(mode);

  const videoReducer = (video, action)=>{
    switch(action.type)
    {
      // Adding Video..............
      case "ADD":
        return [...video, {...action.payload, id:video.length+1}]

      // Deleting Video..............
      case 'DEL':
          return video.filter((val)=>{
            return val.id !== action.payload
          })  

      //// Updating Video...............    
      case "EDIT":
        const index = video.findIndex((val)=>{
          return(
            val.id===action.payload.id
          )
        })
    
        const updates = [...video]
        updates.splice(index, 1, action.payload)
        setUpdatingVideo(null)
        return updates
        
      ////// Default Value 
      default:
        return video  
    }
  }

  const [video, dispatch] = useReducer(videoReducer , videoDB)


  const editVideo=(id)=>{
    setUpdatingVideo(video.find((val)=>{
      return(
        val.id===id
      );
    }))
  }


  return (
    
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={video}>
          <VideoDispatch.Provider value={dispatch}>
            <button onClick={()=>setMode(mode!=="darkMode" ?  "darkMode" : "" )}>{mode == "darkMode" ? "Light Mode" : "DarkMode"}</button>
            <div className={mode}>
            <h2 style={{textAlign:"center", backgroundColor:'#000', color:'#fff', paddingBlock:'18px', fontSize:30}}>YOUTUBE VIDEOS DASHBOARD</h2>
            <div>
              <AddVideo dispatch={dispatch} updatingVideo={updatingVideo}></AddVideo>
            </div>
            <VideoList dispatch={dispatch} editVideo={editVideo}/>
            </div>
          </VideoDispatch.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App