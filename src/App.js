import React from 'react'
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';
import {originals,action,comedy,horror,romance,documentaries} from './url'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title='Netflix Originals' />
      <RawPost url={action} title='Action Movies' isSmall/>
      <RawPost url={comedy} title='Comedy Movies' isSmall/>
      <RawPost url={horror} title='Horror Movies' isSmall/>
      <RawPost url={romance} title='Romance Movies' isSmall/>
      <RawPost url={documentaries} title='documentaries' isSmall/>
    </div>
  );
}

export default App;
