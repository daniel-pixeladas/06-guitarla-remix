import imagen from '../../public/assets/img/nosotros.jpg'
import styles from '~/assets/css/nosotros.css'

export function meta() {
  return ([
    { title: 'Sobre Nosotros | GuitarLA' },
    { description: 'Venta de guitarras'}
  ])
}

export function links() {
  return (
    [
      {rel: 'stylesheet', href: styles},
      {rel: 'preload', href: imagen, as: 'image'}
    ]
  )
}


export default function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>
      <div className='contenido'>
        <img src={imagen} alt="Imagen sobre nosotros" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia mauris sed nulla condimentum sodales. Aenean rutrum tempus urna sit amet venenatis. Integer molestie et arcu id dapibus. Fusce dignissim ante quis suscipit tempus. Donec scelerisque metus nunc, et fermentum arcu efficitur eu. Cras molestie sit amet diam at condimentum. Nulla eu nibh laoreet, laoreet metus sed, ultricies nibh. Phasellus congue lorem at erat iaculis, ut auctor orci fringilla. Donec varius convallis pretium. Vestibulum in molestie neque, ac pretium est. Aliquam non ipsum neque. Nulla facilisi. Cras ut posuere nibh. Nullam consectetur congue urna, id bibendum lectus ultrices id. In quis arcu risus. Proin iaculis, erat eu ultricies maximus, lectus eros ultricies dui, id lobortis diam quam eget purus.</p>
        <p>Vivamus sollicitudin fringilla est quis placerat. Nam placerat tellus sed sem varius porta. Proin pulvinar lorem non aliquam euismod. Fusce nulla orci, vehicula quis magna et, consequat scelerisque lorem. Duis eget mauris varius, malesuada velit at, blandit ex. Nulla volutpat commodo auctor. Proin scelerisque tempor nulla eu pretium. Sed sed mauris in ligula molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris aliquam a tellus id cursus.</p>
        <p>Nam luctus porttitor finibus. Duis scelerisque eros in magna pellentesque, in iaculis neque hendrerit. Etiam a odio gravida, posuere eros quis, gravida ante. Sed pharetra malesuada quam a blandit. Nam purus ligula, iaculis quis porta sodales, dignissim non libero. Quisque in ex turpis. Ut in sem in nisi interdum dignissim eu nec turpis. In porttitor tempor purus, vitae vehicula elit tempor imperdiet. Nullam tortor nulla, fringilla sit amet elementum in, sollicitudin nec dui. Etiam at justo non risus aliquet pellentesque sit amet sit amet mi. Nullam metus ligula, pellentesque at pulvinar vel, imperdiet at orci.</p>
        <p>Sed ante velit, elementum dapibus sem nec, efficitur viverra dui. Pellentesque eros mauris, pharetra non facilisis sed, accumsan hendrerit libero. Nullam ornare fermentum pellentesque. Maecenas in justo placerat, bibendum sem eu, pretium urna. Phasellus nec ipsum id tortor pulvinar tincidunt at id sapien. Nullam iaculis facilisis eros, interdum varius massa lacinia quis. Pellentesque at libero felis. Vestibulum mattis molestie aliquam. Curabitur et sem metus. Vestibulum eu metus vulputate felis semper volutpat. In at nunc in justo pharetra vestibulum sed convallis elit.</p>

      </div>
    </main>
  )
}
