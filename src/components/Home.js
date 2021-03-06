import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../actions/auth';

export const Home = () => {
const dispatch = useDispatch();

const responseGoogle = ({ profileObj }) => {
    dispatch( loginWithGoogle(
        profileObj.googleId, 
        profileObj.name,
        profileObj.email, 
        profileObj.imageUrl
    ))
}

    return (
        <div className='home__maincontainer'>
            <div className='home__container-img'>
                <img 
                    src='https://irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg'
                    alt='PizzaImagen' 
                    className='img-home'
                />
            </div>
            <div className='home__container'>
                <p className='ts__home-medium'>Welcome to PizzaBoy order your Pizza! <br /><br />Don't forget Sign Up with your Google Account</p>
                <GoogleLogin
                    clientId="376676721491-30jufr1sfi4pd9a46mjs3ea741ncgid5.apps.googleusercontent.com"
                    buttonText="Sign In with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
};
