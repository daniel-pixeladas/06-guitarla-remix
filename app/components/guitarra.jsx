import { Link } from "@remix-run/react";


export default function Guitarra({ guitarra }) {
    const {nombre, descripcion, imagen, precio, url} = guitarra
    const urlImagen = imagen.data.attributes.formats.medium.url;
    return (
        <div className="guitarra">
            <img src={urlImagen} alt={`Guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">{precio?.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}</p>
                <Link className="enlace" to={`/guitarras/${url}`}>Ver guitarra</Link>
            </div>
        </div>
    )
}
