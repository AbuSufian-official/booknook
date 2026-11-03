"use client"
import { redirect } from 'next/navigation'
import React from 'react'

function Borrowbtn({books}) {
    async function handelBorrowBook(boo) {
        const FD = await fetch(`http://localhost:8000/books/${boo._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...boo, borrow: "Doborrow" }),
        })
        redirect(`/all-book/${boo._id}`)

    }
    return (
        <button
            onClick={() => handelBorrowBook(books)}

            className="w-full rounded-xl bg-[#027cd4] px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-100 transition duration-300 hover:-translate-y-1 hover:bg-[#0165ad] hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
        >

            Borrow This Book →

        </button>
    )
}

export default Borrowbtn
