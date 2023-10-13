// import React, { useState } from 'react';
//
// export const Identification = ({ onLogin, valueBtn }) => {
//     const [formData, setFormData] = useState({
//         nickname: '',
//         email: '',
//         password: '',
//         sbmtPassword:''
//     });
//
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onLogin(formData);
//     };
//
//     if ({valueBtn})
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name='nickname' placeholder='Nickname'/>
//             <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//             <input type="password" name='sbmtPassword' placeholder='Repeat password' onChange={handleChange}/>
//             <input type="submit" value="Sign in" />
//         </form>
//     );
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//             <input type="submit" value="Sign in" />
//         </form>
//     );
// };
//
