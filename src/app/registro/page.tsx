"use client"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useState } from "react"
import { auth} from "../firebase/config";
import Figura from "@/components/Figura";

export default function Registro() {

    const registrarUsuario = async () => {
        const result = await createUserWithEmailAndPassword(auth, email, contraseña)
        console.log(result)
    }

    const provider = new GoogleAuthProvider()

    const registrarseGoogle = async ()=>{
        try {
            signInWithPopup(auth, provider)
        } catch (error) {
            alert(error)
        }
    }
  
    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md  shadow-md p-8">
                <h1 className="text-2xl font-bold text-center">WELCOME Ruix</h1>
                <p className="text-sm text-gray-600 text-center mb-6">Welcome to Ruix, dashboard Community</p>

                <button onClick={registrarseGoogle} className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-200">

                    Continue With Google
                </button>

                

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-sm text-gray-500">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div>
                    {/* <div className="mb-4">

                        <input 
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="name"
                        />
                    </div> */}
                    <div className="mb-4">

                        <input onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-4">

                        <input onChange={(e) => setContraseña(e.target.value)}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="password"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                            required
                        />Remember Me
                    </div>

                    <button onClick={registrarUsuario} type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
                        Registrarse
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account? <a href="#" className="text-yellow-500 hover:underline">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
