import React from 'react'
import { Alert, AlertTitle } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { uiAction } from '../store/ui-slice'

const Notification=({type,message})=> {
    const dispatch=useDispatch();
    const notification=useSelector((state)=> state.ui.notification)
    const handleClose=()=>{
        dispatch(uiAction.showNotification({
            open: false,

        }))
    }
    return (
    <div>
        {notification.open &&<Alert onClick={handleClose} severity={type}>{message}</Alert>}
    </div>
  )
}

export default Notification
