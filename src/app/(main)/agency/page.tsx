import { currentUser } from '@clerk/nextjs';
import React from 'react'

const Page = async () => {
    const user = await currentUser()
    console.log("USER: ", user)
  return (
    <div>Agency final Page</div>
  )
}


export default Page;