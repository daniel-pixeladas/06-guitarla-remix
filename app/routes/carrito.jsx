import { useOutletContext } from '@remix-run/react'
import styles from '../assets/css/carrito.css'
import { getMetaTitle } from '../utils/seo'
import { formatearPrecio } from '../utils/format'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'

export function links() {
    return [
        { rel: 'stylesheet', href: styles }
    ]
}

export function meta() {
    return [
        { title: getMetaTitle("Carrito de compras") },
        { description: "Carrito de compra de tienda guitarras" }
    ]
}

export default function Carrito() {

    const [total, setTotal] = useState(0)
    const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])
    return (
        // Este client only es para evitar el error de hydratation por las diferencias
        // entre cliente y servidor
        <ClientOnly
            fallback={'Loading...'}>
            {() => (


                <main className="contenedor">
                    <h1 className="heading">Carrito de compras</h1>
                    <div className="contenido">
                        <div className='carrito'>
                            <h2>Artículos</h2>
                            {carrito?.length === 0 ? 'Carrito vacío' : (
                                carrito?.map(producto => (
                                    <div key={producto.id} className='producto'>
                                        <div>
                                            <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                                        </div>
                                        <div>
                                            <p className='nombre'>{producto.nombre}</p>
                                            <p className='cantidad'>Cantidad: </p>
                                            <select className='select'
                                                value={producto.cantidad}
                                                onChange={e => actualizarCantidad({
                                                    cantidad: e.target.value,
                                                    id: producto.id
                                                })}>
                                                <option value="">-- Seleccione --</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <p className='precio'>Precio: <span>{formatearPrecio(producto.precio)}</span></p>
                                            <p className='subtotal'>Subtotal: <span>{formatearPrecio(producto.precio * producto.cantidad)}</span></p>
                                        </div>
                                        <button className='btn_eliminar'
                                            onClick={() => eliminarGuitarra(producto.id)}>X</button>
                                    </div>
                                ))
                            )
                            }
                        </div>

                        <aside className="resumen">
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: {formatearPrecio(total)}</p>
                        </aside>
                    </div>
                </main>
            )}
        </ClientOnly>

    )
}
