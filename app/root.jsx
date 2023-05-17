import { Link, Links, LiveReload, Meta, Outlet, Scripts, useCatch } from "@remix-run/react"
import styles from '~/assets/css/index.css'
import Header from "~/components/header"
import Footer from "~/components/footer"
import { useState, useEffect } from "react"




export function meta() {
    return (
        [
            { charset: 'utf-8' },
            { title: 'GuitarLA - Remix' },
            { name: "viewport", content: "width=device-width,initial-scale=1" }
        ]
    )
}

export function links() {
    return [
        { rel: 'stylesheet', href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css' },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: 'true' },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" },
        { rel: 'stylesheet', href: styles }
    ]
}

export default function App() {

    let carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null

    const [ carrito, setCarrito ] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = (guitarra) => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    console.log("Agregando cantidad")
                    guitarraState.cantidad += guitarra.cantidad
                }
                return guitarraState
            })
            // Añadir al carrito
            setCarrito(carritoActualizado)
        } else {
            // Es un registro nuevo
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }
    return (
        <Document>
            <Outlet 
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}/>
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
                {/* <script src="https://kit.fontawesome.com/843a04381e.js" crossorigin="anonymous"></script> */}
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Manejo de errores
export function CatchBoundary() {
    const error = useCatch()
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to="/">Ir a página principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}) {
    return (
        <Document>
            <p className="error">{error.text} { error.message }</p>
            <Link className="error-enlace" to="/">Ir a página principal</Link>
        </Document>
    )
}
