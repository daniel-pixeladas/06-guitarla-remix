export async function getCurso() {
    const respuesta = fetch(`${process.env.API_URL}/curso?populate=*`)
    return (await respuesta).json()
}