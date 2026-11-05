
import React from 'react'
import Myborrowcontainer from '../components/myborrowcontaine';
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

async function Myborrows() {
 const usertoken = await auth.api.getToken({
        headers: await headers()
    })

const FD = await fetch(`http://localhost:8000/borrows`,{
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











