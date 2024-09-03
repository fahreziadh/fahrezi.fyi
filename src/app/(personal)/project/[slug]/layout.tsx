import { allPosts } from 'content-collections'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container max-w-[680px]'>{children}</div>
  )
}

export default layout