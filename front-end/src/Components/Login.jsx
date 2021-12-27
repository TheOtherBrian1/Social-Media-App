import React from 'react';
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import video from'../assets/share.mp4'
import waddle from '../assets/Waddle.png';
import {client} from '../client';



export default function Login(){
    const navigate = useNavigate();

    const responseGoogle = (response)=>{
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.profileObj))
    
        const {name, googleId, imageUrl} = response.profileObj;
    
        const doc = {
            _id: googleId,
            _type: 'user',
            name: name,
            image: imageUrl
        }
        
        client.createIfNotExists(doc)
            .then(()=>{
                navigate('/', {replace:true})
            })
            .catch((err)=>console.log('Extreme Error', err));
    }

    return(
        <div className="flex justify-start items-center flex-col h-screen">
            <div className = 'relative w-full h-full'>
                <video 
                    className = "h-full w-full object-cover"
                    src = {video}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                />
                <div className = "absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-opacity-60 bg-black">
                    <div className = "m3 w-56">
                        <img src = {waddle} alt = "Waddle Logo" />
                    </div>
                    <div className = "p-5">
                        <div className = "shadow-2xl">
                            <GoogleLogin
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy="single_host_origin"
                                clientId={process.env.REACT_APP_GOOGLE_AUTH_KEY_PUBLIC}
                                render = {(renderProps)=>(
                                    <button
                                        type = "button"
                                        onClick = {renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className = "bg-mainColor flex justify-center items-center p-3 rounded-lg bg-opacity-05 bg-white cursor-pointer outline-none"
                                    >
                                        <FcGoogle className = "mr-4" />
                                        Sign in with Google
                                    </button>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}