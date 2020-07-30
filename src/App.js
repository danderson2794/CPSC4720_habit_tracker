import React from 'react';
import Home from "./components/Home"
import Button from "@material-ui/core/Button"
import './App.css';

function App() {
return(
  <div>
        <div>
            <Button variant="contained" style={{justifyContent:'center'}} color="primary" onClick={Home}>home</Button>
            <Button variant="contained" style={{justifyContent:'center'}} color="primary">Productivity Tips</Button>
            <Button variant="contained" style={{justifyContent:'center'}} color="primary">Popular Videos</Button>
            <Button variant="contained" style={{justifyContent:'center'}}  color="primary">Techniques</Button>
            </div>
    <Home />
  </div>
)
}


export default App;
