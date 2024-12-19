"use client"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

    const [email, setEmail] = useState();
    const [contraseña, setContraseña] = useState();

    const router = useRouter()
       

    const iniciarSesion = async ()=> {
        try {
            const result = await signInWithEmailAndPassword(auth, email, contraseña)
            alert("Exito")
            router.push('/')
        } catch (error) {
            alert(error)
        }
    }

    return(
        <div>
            <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Emai" />
            <input onChange={(e)=> setContraseña(e.target.value)} type="text"  placeholder="contraseña"/>
            <button onClick={iniciarSesion}>Iniciar</button>
        </div>
    )

}