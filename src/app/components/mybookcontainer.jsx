"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client"
import { useState } from "react";
import Image from 'next/image';
import { DialogDemo, WithForm } from './editbook';
import { redirect } from 'next/navigation';


function Mybookcontainer({ data }) {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    let books = data
    const arr = books.filter((n) => {
        return n.userEmail == session?.user?.email
    })





    // const [books, setBooks] = useState(initialBooks);

    // Delete a book
    const handleDelete = async (id) => {
        const { data: tokedata, error } = await authClient.token()
        const FD = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`, {
            method: "DELETE",
            headers: {

                authorization: tokedata?.token
            },
        })
        redirect("/my-books")

    };









    return (
        <div className=" bg-white">

            {/* Header */}
            <section className="bg-[#027cd4] px-4 py-10 text-center sm:py-12">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    My Books
                </h1>

                <p className="mt-2 text-sm text-blue-100">
                    Books you added to the library.
                </p>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-2 py-10 sm:px-6 lg:px-8">

                {/* Book Count */}
                <div className="mb-5 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Your Collection
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your personal book collection.
                        </p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#027cd4]">
                        {books.length} Books
                    </span>
                </div>

                {/* Books Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[650px] text-left">

                            {/* Table Header */}
                            <thead className="bg-blue-50">
                                <tr className="text-sm font-semibold text-gray-700">
                                    <th className="px-5 py-4">Book</th>
                                    <th className="px-5 py-4">Category</th>
                                    <th className="px-5 py-4">Copies</th>
                                    <th className="px-5 py-4 text-right">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-100">

                                {arr.map((book) => (
                                    <tr
                                        key={book._id}
                                        className="transition hover:bg-blue-50/40"
                                    >

                                        {/* Book Information */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">

                                                {/* Book Cover */}
                                                <div
                                                    className={`flex h-14 w-10 shrink-0 items-center justify-center rounded-md shadow-sm`}
                                                >
                                                    <span className={`text-lg font-bold ${book.color}`}>
                                                        <Image src={book.image} width={30} height={30} alt='B' />
                                                    </span>
                                                </div>

                                                <div>
                                                    <h3 className="font-medium text-gray-800">
                                                        {book.title}
                                                    </h3>

                                                    <p className="mt-1 text-xs text-gray-500">
                                                        {book.author}
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Category */}
                                        <td className="px-5 py-4">
                                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#027cd4]">
                                                {book.category}
                                            </span>
                                        </td>

                                        {/* Copies */}
                                        <td className="px-5 py-4 text-sm font-medium text-gray-700">
                                            {book.copies}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4">
                                            <div className="flex justify-end gap-2">



                                                <WithForm bookdata={book} className="rounded-md border border-[#027cd4] px-3 py-1.5 text-xs font-medium text-[#027cd4] transition hover:bg-[#027cd4] hover:text-white" />
                                                <button
                                                    onClick={() => handleDelete(book._id)}
                                                    className="rounded-md bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
                                                >
                                                    Delete
                                                </button>

                                            </div>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {arr.length === 0 && (
                        <div className="px-5 py-16 text-center">
                            <div className="mb-3 text-4xl">📚</div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                No Books Found
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                You haven't added any books to your library yet.
                            </p>
                        </div>
                    )}

                </div>

                {/* Footer */}
                <p className="mt-5 text-center text-xs text-gray-400">
                    Manage and organize your favorite books with BookNook.
                </p>

            </section>
        </div>
    )
}

export default Mybookcontainer










