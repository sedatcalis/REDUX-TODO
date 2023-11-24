import React from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from '../redux/actıons/todoActıon'

const ThemeButton = () => {
    const dispatch = useDispatch()
    const handleThemeChange = (e) =>{
        e.preventDefault()
        const newTheme = e.target.checked=== true ? "#fff" : "#000000"
        dispatch(setTheme(newTheme))
    
    }
  return (
    <div className="love position-absolute top-0 end-0 mt-5 mx-5">
    <input onChange={handleThemeChange} id="switch" type="checkbox"/>
    <label className="love-heart" htmlFor="switch">
      <i className="left"></i>
      <i className="right"></i>
      <i className="bottom"></i>
      <div className="round"></div>
    </label>
  </div>
  )
}

export default ThemeButton
