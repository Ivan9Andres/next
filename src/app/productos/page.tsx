import Image from "next/image";


export default async function Page (){
    const data = await fetch ('https://fakestoreapi.com/products');
    const productos = await data.json();
    console.log(productos)

    return(
        <div className="flex flex-wrap mt-5">
            {
                productos.map(
                    (producto)=>(
                        <div  key={producto.id}>
                            <Image src={producto.image} width={200} height={200} alt="producto"/>
                            <h1>{producto.title}</h1>
                        </div>
                    )
                )
            }
        </div>
    )
}