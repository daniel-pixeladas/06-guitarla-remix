export function getMetaTitle(titulo) {
    let metaTitle = ''
    // const separator = process.env.META_TITLE_SEPARATOR
    // const metaName = process.env.META_TITLE_NAME
    const separator = "|"
    const metaName = "Guitar LA"
    if (titulo){
        metaTitle = titulo + " " + separator + " " + metaName
    } else {
        metaTitle = ` ${separator} ${metaName}`
    }
    return metaTitle
}