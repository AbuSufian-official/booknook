
import React from 'react'
import Myborrowcontainer from '../components/myborrowcontaine';
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
export const metadata = {
  title: "BookNook | MY BORROWS ",
  description: "Share a book with fellow readers on BookNook.",
}
async function Myborrows() {
 const usertoken = await auth.api.getToken({
        headers: await headers()
    })

const FD = await fetch(`https://booknook-server-amber.vercel.app/borrows`,{
    headers:{
        authorization: usertoken?.token
    }
})
const CDF=await FD.json()
    
    return (
<Myborrowcontainer CDF={CDF}/>
    )
}

export default Myborrows











