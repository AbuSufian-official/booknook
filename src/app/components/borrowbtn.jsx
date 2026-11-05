"use client"

import React, { use, useState } from 'react'
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
import { WithForm } from './borrowbtnmodal';





function Borrowbtn({ books }) {
    // let [btnvalue, setbtnvalue] = useState(false)
    // const {
    //     data: session,
    //     isPending, //loading state
    //     error, //error object
    //     refetch //refetch the session
    // } = authClient.useSession()

    // const router = useRouter();
    // async function handelBorrowBook(boo) {
    //     const FD = await fetch(`http://localhost:8000/books/${boo._id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ ...boo, borrow: "Doborrow" }),
    //     })

    //     const getFutureDate = (days) => {
    //         const date = new Date();

    //         date.setDate(date.getDate() + days);

    //         return date.toISOString().split("T")[0];
    //     };


    //     const obj = {
    //         title: boo.title,
    //         image: boo.image,
    //         email: session?.user?.email,
    //         borrowDate: getFutureDate(0),
    //         returnDate: getFutureDate(3)
    //     }

    //     const PFD = await fetch(`http://localhost:8000/borrows`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(obj),
    //     })


    //     router.refresh();


    // }

    // const handelDisable = async (bid) => {
    //     const FfD = await fetch(`http://localhost:8000/borrows/`)
    //     const CFfD = await FfD.json();
    //     let a = CFfD.find((n) => {
    //         return ((n.email == session?.user?.email)&&(n.title==bid.title))
    //     })
    //     let btnstate = Boolean(a)

    //     setbtnvalue(btnstate)


    // }

    // handelDisable(books)







    return (
        // <button
        //     onClick={() => handelBorrowBook(books)}
        //     disabled={btnvalue}


        //     className="w-full rounded-xl bg-[#027cd4] px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-1 hover:bg-[#0165ad] hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
        // >

        //     Borrow This Book →

        // </button>
        <WithForm books={books}/>
    )
}

export default Borrowbtn
