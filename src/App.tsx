

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './components/PostPage';
import Add from './components/Add';
import EditProfile from './components/EditProfile';
import Blogcard from './components/Blogcard/Blogcard';
import Navbar from './components/common/Navbar';
import Profile from './components/Profile/Profile';
import HomePage from './components/Home/Home';


const App: React.FC = () => {
return (
<div>
    
<Router>
<Navbar />
<Routes>
    <Route path="/" element={<HomePage/>}></Route>
<Route path="/showmore" element={<PostPage  />}></Route>
<Route path="/add" element ={<Add/>}></Route>
<Route path="/edit" element ={<EditProfile/>}></Route>
<Route path='/pages' element={<Blogcard/>}></Route>
    <Route  path='/profile' element={<Profile/>}></Route>
</Routes>
</Router>
</div>
);
}


export default App;