import {useState} from "react";
import apiClient from "../api";
import {SecTitle} from "@/components/secTitle.jsx";
import {useNavigate} from "react-router-dom";

export const AuthPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nickname: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [action, setAction] = useState("login"); // Состояние для отслеживания текущего действия

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint =
            action === "login" ? "/authorization" : "/registration";

        const requestData = action === "login" ?
            {
                email: formData.email, password: formData.password
            }
            :
            {
                nickname: formData.nickname,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation
            };

        function removeErrors() {
            let existingErrorContainers = document.querySelectorAll('.error-container');
            existingErrorContainers.forEach((container) => {
                container.remove();
            });
        }

        apiClient
            .post(endpoint, requestData)
            .then((response) => {
                removeErrors();
                const accessToken = response.data.access_token;
                localStorage.setItem('access_token', accessToken);
                navigate('/');
            })
            .catch((error) => {
                removeErrors();
                const errorData = error.response.data.errors;

                for (const field in errorData) {
                    const fieldErrors = errorData[field];
                    fieldErrors.forEach((errorMessage) => {
                        const errorMess = document.createElement('p');
                        errorMess.textContent = errorMessage;
                        errorMess.classList.add('text-2xl', 'text-white');

                        const needleInput = document.querySelector(`input[name="${field}"]`);
                        const errorContainer = document.createElement('div');
                        errorContainer.classList.add('error-container');
                        errorContainer.appendChild(errorMess);

                        needleInput.parentNode.insertBefore(errorContainer, needleInput.nextSibling);
                    });
                }
            });
    };

    return (
        <div
            className="h-[100vh] flex justify-center items-center"
            style={{
                backgroundImage: `url('/imgs/AuthPage/bg.jpg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className="border-4 rounded-2xl p-[50px] text-center border-lightorange bg-black/50">
                <SecTitle
                    title={
                        action === "login" ? "Authorization" : "Registration"
                    }
                />
                <form
                    className="flex gap-5 flex-col mt-[25px] mb-3"
                    onSubmit={handleSubmit}
                >
                    {action === "register" ? (
                        <input autoComplete={'off'}
                               className=" text-white text-2xl border-2 rounded-2xl border-lightorange p-4 bg-black/80"
                               type="text"
                               placeholder={"Nickname"}
                               name={"nickname"}
                               onChange={handleChange}
                        />) : false}
                    <input autoComplete={'off'}
                           className=" text-white text-2xl border-2 rounded-2xl border-lightorange p-4 bg-black/80"
                           type="text"
                           name="email"
                           placeholder="E-mail"
                           onChange={handleChange}
                    />
                    <input autoComplete={'off'}
                           className=" text-white text-2xl border-2 rounded-2xl border-lightorange p-4 bg-black/80"
                           type="password"
                           name="password"
                           placeholder="Password"
                           onChange={handleChange}
                    />
                    {action === "register" ? (
                        <input autoComplete={'off'}
                               className=" text-white text-2xl border-2 rounded-2xl border-lightorange p-4 bg-black/80"
                               type="password"
                               placeholder={"Repeat Password"}
                               name={"password_confirmation"}
                               onChange={handleChange}
                        />
                    ) : false}
                    <button
                        className="hover:shadow-white font-bold bg-lightorange flex justify-center ps-10 pe-10 pt-2 pb-2 items-center text-3xl rounded-lg">
                        {" "}
                        {action === "login" ? "Sign In" : "Sign Up"}{" "}
                    </button>
                </form>
                <button
                    className="link-wrapper text-white/75 text-3xl hover:text-lightorange"
                    onClick={() =>
                        setAction(action === "login" ? "register" : "login")
                    }
                >
                    {action === "login"
                        ? "Let's Register"
                        : "Let's Authorize"}
                </button>
            </div>
        </div>
    );
};
