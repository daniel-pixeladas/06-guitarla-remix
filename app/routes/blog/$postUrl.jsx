import { useLoaderData } from "@remix-run/react";
import { getPost } from "../../data/posts.server";
import { formatearFecha } from "../../utils/format";
import { getMetaTitle } from '../../utils/seo'

export function meta({data}) {
    if (!data) {
        return [
            {title: `${getMetaTitle('Post no encontrado')}`}
        ]
    } 
    return [
        {title: `${getMetaTitle(data.attributes.titulo)}`},
        {description: `Guitarras, venta de guitarras, entrada ${data.attributes.titulo}`}
    ]
}

export async function loader({ params }) {
    const { postUrl } = params

    const post = await getPost(postUrl)
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post.data[0]
}

export default function Post() {

    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post?.attributes
    return (
        <article className="post mt-3">
            <img className='imagen' src={imagen?.data?.attributes?.url} alt={`Foto de artículo ${titulo}`} />
            <div className='contenido'>
                <h3>{titulo}</h3>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='texto'>{contenido}</p>
            </div>
        </article>

    )
}
