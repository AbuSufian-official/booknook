import Link from 'next/link';
import React from 'react'
export const metadata = {
  title: "BookNook | All Books",
  description: "Add a book, borrow a book, return a book.",
};
async function Allbooks() {
    const FD=await fetch("http://localhost:8000/books");
    const books=await FD.json()
    console.log(books)
    return (<>
        
            {/* Header */}
            <section className="bg-gradient-to-b from-[#027cd4] to-[#027cd430] px-5 py-16 text-center text-white">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-blue-100">
                    Welcome to BookNook
                </p>

                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    Explore Our Library
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                    Discover your next favorite book. Explore thousands of stories,
                    ideas and knowledge all in one place.
                </p>
            </section>

            {/* Books Section */}
            <section className="container mx-auto  px-2 py-14 sm:px-8 lg:px-2">
                <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-black sm:text-3xl">
                            All Books
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Find the perfect book for your next reading adventure.
                        </p>
                    </div>

                    <div className="rounded-lg bg-blue-50 px-5 py-3 text-sm font-semibold text-[#027cd4]">
                        {books.length} Books Available
                    </div>
                </div>
                

                {/* Book Cards */}
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">


                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Book Image */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-[#027cd4] px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                                    {book.category}
                                </span>
                            </div>

                            {/* Book Information */}
                            <div className="p-5">
                                <h3 className="line-clamp-1 text-lg font-bold text-gray-900 transition group-hover:text-[#027cd4]">
                                    {book.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    By <span className="font-medium text-[#027cd4]">{book.author}</span>
                                </p>

                                <div className="mt-5 border-t border-gray-100 pt-4">
                                    <Link href={`/all-book/${book._id}`}>
                                    
                                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#027cd4] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#0165ad] active:scale-95">
                                        View Details
                                        <span className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    ))}



                </div>

                {/* Bottom Section */}
                <div className="mt-14 rounded-2xl bg-blue-50 px-6 py-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Every Book Has a Story
                    </h2>
                    <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-600">
                        Start your reading journey today. Find a book, borrow it, and
                        enjoy the magic of reading with BookNook.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Allbooks
