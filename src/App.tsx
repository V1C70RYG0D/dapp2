

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './components/PostPage';
import Add from './components/Add';
import EditProfile from './components/EditProfile';
import Blogcard from './components/Blogcard/Blogcard';
import Navbar from './components/common/Navbar';
import Profile from './components/Profile/Profile';
import {Login,balance} from './helpers/web3auth';


const App: React.FC = () => {
return (
<div>
    <button onClick={Login}>Login</button>
    <button onClick={balance} > ballence</button>
<Router>
<Navbar />
<Routes>
<Route path="/showmore" element={<PostPage  />}></Route>
<Route path="/add" element ={<Add/>}></Route>
<Route path="/edit" element ={<EditProfile/>}></Route>
<Route path='/' element={<Blogcard/>}></Route>
    <Route  path='/profile' element={<Profile/>}></Route>
</Routes>
</Router>
</div>
);
}


export default App;