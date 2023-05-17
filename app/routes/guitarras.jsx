import { Outlet, useOutletContext } from "@remix-run/react"
import styles from '~/assets/css/guitarras.css'

export function links() {
  return ([
    {rel: 'stylesheet', href: styles}
  ])
}


export default function Tienda() {
  const data = useOutletContext()
  console.log(data)
  return (
    <main className="contenedor">
      <Outlet 
        context={useOutletContext()}/>
    </main>
  )
}
