import React, {useState, useRef, useEffect} from 'react';
import {HiMenu} from 'react-icons/hi';
import {Link, Route, Routes} from 'react-router-dom';
import {userQuery} from '../utils/data';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import Pins from './Pins';
import {client} from '../client.js';
import waddle from '../assets/Waddle.png';
import { AiFillCloseCircle} from 'react-icons/ai';
import { fetchUser } from '../utils/fetchUser';

export default function Home(){
    const [toggleBar, setToggleBar] = useState(false);
    const [user, setUser] = useState(null);
    const userInfo = fetchUser();
    const scrollRef = useRef(null);
    useEffect(() =>{
        const query = userQuery(userInfo?.googleId);
        client.fetch(query)
            .then((data)=>setUser(data[0]))
        
        scrollRef.current.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   
    return(
        <div 
            className = "flex bg-gray-500 md:flex-row flex-col h-screen transition-height duration-75 ease-out"
        >
            <div className = "hidden md:flex h-screen flex-initial">
                <Sidebar user = {user && user} closeToggle = {setToggleBar} />
            </div>
            <div className = "flex md:hidden flex-row">
                <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
                    <HiMenu fontSize={40} className="cursor-pointer" onClick={()=>setToggleBar(true)} />
                    <Link to = '/'>
                        <img src={waddle} alt = "waddle logo" className = "w-32" />
                    </Link>
                    <Link to = {`user-profile/${user?._id}`}>
                        <img src={user?.image} alt = "waddle logo" className = "w-12 rounded-full" />
                    </Link>
                </div>
            </div>
            {toggleBar && (
                <div className = "fixed h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                    <div className = "absolute w-full flex justify-end items-center p-2">
                        <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick = {()=>setToggleBar(false)}/>
                    </div>
                    <Sidebar user = {user && user} closeToggle = {setToggleBar} />
                </div>
            )}
            <div className = "pb-2 flex-1 h-screen overflow-y-scroll scrollbar-thin" ref = {scrollRef}>
                <Routes>
                    <Route path="/user-profile/:userId" element={<UserProfile />} />
                    <Route path= "/*" element={<Pins user={user && user} />} />
                </Routes>
            </div>
        </div>
    )
}