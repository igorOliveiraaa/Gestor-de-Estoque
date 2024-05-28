export default function RootLayout(){
    return(
        <>
        <header>
            <link to="/" className="logo">React Stock</link>
            <nav>
            <link to="/">Início</link>
            <link to="/items">Items</link>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        <footer>
            Feito com React e React Router! =D
        </footer>
        </>
    )
}