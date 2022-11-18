import React from "react";
import "./App.css"
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details"
import SearchResult from "./Pages/SearchResult";
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Protected from "./Components/Protected/Protected";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from './Components/Header/Header'
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/details/:id' element={
            <Protected>
              <Details />
            </Protected>
          } />
          <Route path='/search-result' element={<SearchResult />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <ToastContainer theme="colored" position="top-right" />
      </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  )
}

export default App
