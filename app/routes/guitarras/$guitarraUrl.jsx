import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "../../data/guitarras.server"
import { formatearPrecio } from "../../utils/format";
import { getMetaTitle } from "../../utils/seo";
import { useState } from "react";

export function meta({data}) {  
  if (!data){
    return [
      {title: 'Guitarra no encontrada'},  
    ]
  } 
  const titulometa = getMetaTitle("Guitarra " + data.data[0].attributes.nombre)
  return [
    {title: titulometa},
  ]
}

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return guitarra
}


function Guitarra() {

  const { agregarCarrito } = useOutletContext()
  const [ cantidad, setCantidad ] = useState(0)
  
  const guitarra = useLoaderData()
  const {nombre, descripcion, imagen, precio } = guitarra.data[0].attributes 

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad")
      return
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }
  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{formatearPrecio(precio)}</p>
        <form className="formulario"
          onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad</label>
          <select id="cantidad"
          onChange={e => setCantidad(parseInt(e.target.value))}>
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito"></input>
        </form>
      </div>
    </div>
  )
}

export default Guitarra