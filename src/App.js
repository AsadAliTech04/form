import React from "react";
import Form from "./Components/Form/Form";
import RightBar from "./Components/Rightbar/Rightbar"
import LeftBar from "./Components/Leftbar/Leftbar"
import "./App.css"
const App = () => {
  return (
    <div  className="App">
      <LeftBar/>
    <Form/>
    <RightBar/>
    </div>
  )
}


export default App;