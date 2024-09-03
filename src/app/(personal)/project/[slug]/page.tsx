import { allPosts } from 'content-collections'
import React from 'react'

const page = ({params}: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p.slug === params.slug)

  return (
    <div>{JSON.stringify(post)}</div>
  )
}

export default page