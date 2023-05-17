import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "~/data/guitarras.server"
import { getMetaTitle } from "~/utils/seo"
import ListadoGuitarras from "~/components/listado-guitarras"


export function meta() {
  return [
    {title: getMetaTitle("Tienda de guitarras")},
    {description: "Nuestra colección de guitarras"}
  ]
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

export default function Tienda() {
  const guitarras = useLoaderData()
  return (
    <ListadoGuitarras guitarras={guitarras}/>
  )
}
