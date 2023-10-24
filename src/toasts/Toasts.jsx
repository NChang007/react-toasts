import React from 'react'
import "./toasts.css"



const toast = () => {
    //call to action
}
const toastDanger = () => {
    
}
const Toasts = () => {
    // how do i set up the toast and where uts us sypposed to be 
    // I need the where its going to go
    // The action of coming out and other stuff
  return (
    <div className='toast-container'>
        <div className='toast'>
            This is the text that shows
            <span className='closebtn'>X</span>
        </div>
    </div>
  )
}

export  { Toasts }