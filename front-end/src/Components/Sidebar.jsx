import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';


import waddle from '../assets/Waddle.png';

const Sidebar = ({user, closeToggle}) => {
    const handleCloseSidebar = ()=>{closeToggle && closeToggle(false)}
    const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
    const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";
    
    const categories = [
        {name: 'Animals'},
        {name: 'Wallpapers'},
        {name: 'Photo'},
        {name: 'Coding'},
        {name: 'Gaming'},
        {name: 'Other'}
    ]

    return (
        <div className = " flex flex-col justify-between bg-gray-400 h-full overflow-y-scroll max-w-[18rem] md:max-w-md hide-scrollbar scrollbar-thin">
            <div className="flex flex-col w-full">
                <Link
                    to = "/"
                    className="flex px-5 pr-10 gap-2 my-6 pt-1 w-full items"
                    onClick = {handleCloseSidebar}
                >
                    <img src = {waddle} alt="waddle logo" className = "w-1/2" />
                </Link>
                <div className = "flex flex-col gap-5">
                    <NavLink
                        to = "/"
                        className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                    >
                        <RiHomeFill />
                        Home
                    </NavLink>
                    <h3 className = "mt-2 font-extrabold text-lg px-5 text-base 2xl:text-xl">Discover Categories</h3>
                    {categories.slice(0, categories.length-1).map((category, i)=>(
                        <NavLink
                            key={category.name+i}
                            to={`/category/${category.name}`}
                            className = {({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                        >
                            {category.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
                <Link
                    to = {`user-profile/${user._id}`}
                    className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
                    onClick={handleCloseSidebar}
                >
                    <img src = {user.image} className = "w-10 h-10 rounded-full" alt = "user sprite" />
                    <h3 className = "m-auto text-xl">{user.name}</h3>
                </Link>
            )}
        </div>
    )
}

export default Sidebar