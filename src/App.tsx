

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PostPage from './components/PostPage';
import Add from './components/Add';
import EditProfile from './components/EditProfile';
import {Login, balance } from './helpers/web3auth'


const App: React.FC = () => {
return (
<div>
    <button onClick={Login}>Login</button>
    <button onClick={balance} > ballence</button>
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


export default App;w