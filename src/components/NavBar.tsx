import Link from "next/link";



export default function NavBar() {
    return (
        <nav className="navbar flex justify-between items-center px-5 py-2.5 bg-black text-white">
           <Link href={'/'}> <div className="navbar-logo m-0 text-2xl">
                <h1>Criptoplanet</h1>
            </div></Link>
            <ul className="navbar-menu list-none flex m-0 p-0">
                <li><Link href={'/productos'}>productos</Link></li>
                <li><a href="#watchlist">Watchlist</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><Link href={'/agregar'}>agregar</Link></li>
            </ul>
            <div className="navbar-settings flex items-center gap-2.5">

                <h5>English</h5>


                <div className="settings2 border-l border-gray-300 pl-2.5">
                    <h5>USD</h5>
                </div>


            </div>
            <div className="navbar-buttons">
                <Link href={'/login'}><button className="btn-signin">Sign in</button></Link>
                <Link href={'/registro'}><button className="btn-register">Register</button></Link>
            </div>

        </nav>
    )
}