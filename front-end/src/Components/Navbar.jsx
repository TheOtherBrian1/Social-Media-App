import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {IoMdAdd, IoMdSearch} from 'react-icons/io';
const Navbar = ({user, setSearchTerm, searchTerm}) => {
    const navigate = useNavigate();
    if (!user) return null;

    return (
        <div className = "flex gap-2 md:gap-5 w-full mt-5 pb-1 rounded-sm">
            <div className = " rounded-full flex justify-start items-center w-full px-1 bg-white border-none outline-none focus-within:shadow-sm">
                <IoMdSearch fontSize={21} className="ml-1" />
                <input
                    type="text"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    placeholder="Search"
                    value={searchTerm}
                    onFocus={()=>navigate('/search')}
                    className="p-2 w-full rounded-full bg-white outline-none"
                />
            </div>
            <div className="flex gap-3">
                <Link
                    to = {`user-profile/${user?._id}`}
                >
                    <img src = {user.image} alt = {"user-sprite"} className = "w-14 h-12 rounded-lg" />
                </Link>
                <Link
                    className = "hidden md:block"
                    to= '/'
                >
                    <IoMdAdd className = "bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
