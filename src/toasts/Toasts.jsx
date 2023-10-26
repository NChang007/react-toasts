import React from 'react'
import "./toasts.css"


// how do i call this like this "toast.danger for red and so on toast.warn toast.success"
const toast = () => {
    //call to action
}
const toastDanger = () => {
    
}
const toasts = () => {
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

export  { toasts }