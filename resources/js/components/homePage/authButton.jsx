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
                <button className="hover:shadow-white font-bold border-4 border-lightorange flex ps-10 pe-10 pt-2 pb-2 items-center text-xl rounded-lg" onClick={handleLogout}>Logout</button>
            ) : (
                <a href="/authorization" className="hover:shadow-white font-bold bg-lightorange flex ps-10 pe-10 pt-2 pb-2 items-center text-xl rounded-lg">Sign In</a>
            )}
        </div>
    );
};
