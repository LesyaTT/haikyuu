import {useNavigate} from "react-router-dom";
import axios from "axios";
import apiClient from "@/api.js";

export const AuthButton = () => {
    const navigator = useNavigate();
    const accessToken = localStorage.getItem('access_token');

    const handleLogout = () => {
        apiClient.post('/logout', {accessToken})
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            })

        localStorage.removeItem('access_token');
        navigator('/');
    };

    return (
        <div>
            {accessToken ? (
                <button className="hover:shadow-white font-bold border-4 border-lightorange flex md:ps-5 md:pe-5 xl:ps-10 xl:pe-10 md:pt-1 xl:pt-2 xl:pb-2 md:pb-1 items-center md:text-lg xl:text-xl rounded-lg" onClick={handleLogout}>Logout</button>
            ) : (
                <a href="/authorization" className="hover:shadow-white font-bold bg-lightorange flex md:ps-5 md:pe-5 xl:ps-10 xl:pe-10 md:pt-1 xl:pt-2 xl:pb-2 md:pb-1 items-center md:text-lg xl:text-xl rounded-lg">Sign In</a>
            )}
        </div>
    );
};
