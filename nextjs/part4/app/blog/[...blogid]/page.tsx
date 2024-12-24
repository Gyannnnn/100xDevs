import React from 'react'

export default async function page({params}:{
    params:{
        blogid: Array
    }
}) {

    const blogid = (await params).blogid

  return (
    <div>page  {JSON.stringify(blogid)}</div>
  )
}
