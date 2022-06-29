//The app is been designesd by the help of the Material CSs
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth"
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiAction } from "./store/ui-slice";
let isFirstRender=true;

function App() {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const cart=useSelector((state)=> state.cart);
  const notification=useSelector((state)=>state.ui.notification);

  useEffect(()=>{
    if(isFirstRender){
      isFirstRender=false;
      return;
    }
    const sendRequest=async()=>{
      //Send state as sending request
      dispatch(uiAction.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning"
      }))
      const res=await fetch(
        'https://redux-http-d9439-default-rtdb.firebaseio.com/cartitems.json', 
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
    );
    const data=await res.json();
    //Send state as request is successful
    dispatch(uiAction.showNotification({
      open: true,
      message: "Send request to database successfully",
      type: "success"
    }))
  };
  sendRequest().catch(err =>{
    //Send state as error
    dispatch(uiAction.showNotification({
      open: true,
      message: "Sending messsage failed",
      type: "error",
    }))
  });
},[cart]);
  return (
    <div className="App">
      {notification &&<Notification type={notification.type} message={notification.message}/>}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
