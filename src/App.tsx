

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PostPage from './components/PostPage';
import Add from './components/Add';
import EditProfile from './components/EditProfile';


const App: React.FC = () => {
return (
<div>
<Router>
<Navbar />
<Routes>
<Route path="/" element={<PostPage  />}></Route>
<Route path="/add" element ={<Add/>}></Route>
<Route path="/edit" element ={<EditProfile/>}></Route>
</Routes>
</Router>
</div>
);
}


export default App;