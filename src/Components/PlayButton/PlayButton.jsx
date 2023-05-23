import React, { useContext, useState } from 'react'
import styles from './PlayButton.module.css'
import ThemeContext from '../../../context/ThemeContext'

const PlayButton = () => {
 
    const [buttonState, setButtonState] = useState(false)

    const handlePerform = ()=>{
        setButtonState(!buttonState)
    }
   
    const themeContext = useContext(ThemeContext)
  return (
    <>
        <div>
            <button className={`${styles.btn} ${themeContext === 'darkMode' ? styles.darkMode : ''}`} onClick={handlePerform}>{buttonState ? "Pause" : "Play"}</button>
        </div>
    </>
  )
}

export default PlayButton