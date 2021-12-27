import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import CreatePin from './CreatePin';
import PinDetail from './PinDetail';
import Search from './Search';
import Feed from './Feed';
import Navbar from './Navbar';

const Pins = ({user}) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className = "px-2 md:px-5">
            
                <Navbar searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} user = {user} />
            
            <div className = "h-full">
                <Routes>
                    <Route path = "/" element={<Feed />} />
                    <Route path="/category/:categoryId" element={<PinDetail user={user} />} />
                    <Route path="/pin-detail/:pinId" element={<CreatePin user={user} />} />
                    <Route path="/create-pin" element={<CreatePin user={user} />} />
                    <Route path="/search" element={<Search user= {user} searchTerm={searchTerm} setSearchTerm = {setSearchTerm} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Pins
