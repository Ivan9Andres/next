"use client"
import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase/config"


export default function Page(){

    const [producto,setProducto]=useState()

    const agregar = async () => {
        try {
            const newDoc = await addDoc(collection(db,'productos'),{
                nombre: producto,
            })
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div>
            <h1>Productos</h1>
            <input type="text" placeholder="Agregar" onChange={(e)=> setProducto(e.target.value)} name="" id=""/>
            <button onClick={()=>agregar()} >Agregar</button>
        </div>
    )
}