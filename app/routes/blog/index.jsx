import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/data/posts.server"
import ListadoPosts from "~/components/listado-posts"

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

export default function Blog() {
  const posts = useLoaderData();
  return (
    <ListadoPosts posts={posts} />
  )
}
