// export default function Signup(){
//     return (
//         <div>
//             <h1>welcome to the signup page</h1>
//         </div>
//     );
// }


import { useState } from "react";
import api from "../api/axios";

export default function Signup() {
    const [from, setFrom] = useState({
        name: "",
        email: "",
        password: "",
    })


    const [msg, setMsg] = useState("");

    const handleChange = async (e) => {
        setFrom({
            ...from,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/signup", from);
            setMsg(response.data.message);

        } catch (error) {
            setMsg(error.respopnse?.data?.message || 'an error occurred');
        }
    }

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
    
    <h2 className="text-2xl font-bold mb-6 text-center">
      Create Account
    </h2>

    {msg && (
      <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
        {msg}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="name"
        placeholder="Enter Name"
        value={from.name}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
      />

      <input
        name="email"
        placeholder="Enter Email"
        value={from.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
      />

      <input
        name="password"
        placeholder="Enter Password"
        value={from.password}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
      >
        Sign Up
      </button>

    </form>

  </div>
</div>
    )
}