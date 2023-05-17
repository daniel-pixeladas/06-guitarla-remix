import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../data/guitarras.server"
import { getPosts } from "../data/posts.server"
import { getCurso } from "../data/curso.server"
import ListadoGuitarras from '../components/listado-guitarras'
import ListadoPosts from "../components/listado-posts"
import Curso from "../components/curso"

import stylesGuitarras from '../assets/css/guitarras.css'
import stylesPosts from '../assets/css/blog.css'
import stylesCurso from '../assets/css/curso.css'

export function meta() {

}

export function links() {
  return [
    {rel: 'stylesheet', href: stylesGuitarras},
    {rel: 'stylesheet', href: stylesPosts},
    {rel: 'stylesheet', href: stylesCurso},
  ]

}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

export default function Index() {
  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}/>
      </main>

      <Curso curso={curso?.attributes} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  )
}
