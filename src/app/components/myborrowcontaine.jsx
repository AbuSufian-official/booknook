"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client"
import Image from 'next/image';
import { useRouter } from "next/navigation";




function Myborrowcontainer({ CDF }) {
    const router = useRouter();
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const arr = CDF.filter((n) => {
        return n.email == session?.user?.email
    })




    const handeldelbtnborrow = async (pera) => {
        const FD = await fetch(`http://localhost:8000/borrows/${pera._id}`, {
            method: "DELETE"
        })



        const DFD = await fetch(`http://localhost:8000/books/${pera._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...pera, borrow: "DELborrow" }),
        })




        router.refresh();

    }







    return (
        <div className="min-h-screen bg-white">

            {/* Header */}
            <section className="bg-[#027cd4] px-4 py-10 text-center sm:py-12">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    My Borrow
                </h1>

                <p className="mt-2 text-sm text-blue-100">
                    Books you added to the borrow section.
                </p>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Book Count */}
                <div className="mb-5 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">
                            Your Collection
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your personal borrow book collection.
                        </p>
                    </div>

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#027cd4]">
                        {arr.length} Books
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
                                    <th className="px-5 py-4">Borro Date</th>
                                    <th className="px-5 py-4">Return Date</th>
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
                                                {book.borrowDate}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#027cd4]">
                                                {book.returnDate}
                                            </span>
                                        </td>



                                        {/* Actions */}
                                        <td className="px-5 py-4">
                                            <div className="flex justify-end gap-2">

                                                <button
                                                    onClick={() => handeldelbtnborrow(book)}
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

export default Myborrowcontainer
