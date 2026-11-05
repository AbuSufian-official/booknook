
import Borrowbtn from "@/app/components/borrowbtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

// Demo book data


export default async function BookDetails({ params }) {

    const usertoken = await auth.api.getToken({
        headers: await headers()
    })
    


    const { id } = await params;
    const FD = await fetch(`https://booknook-server-amber.vercel.app/books/${id}`, {
        headers: {
            authorization: usertoken?.token
        }
    })
    const book = await FD.json()










    return (
        <main className="min-h-screen bg-[#f8fbff]">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#027cd4] to-[#70c5f5] px-5 py-12 text-white sm:py-16">
                <div className="mx-auto max-w-7xl">
                    <Link
                        href="/books"
                        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
                    >
                        ← Back to All Books
                    </Link>

                    <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-100">
                        BookNook Library
                    </p>

                    <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Discover Your Next Favorite Book
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
                        Explore the details, learn something new, and start your
                        reading journey with BookNook.
                    </p>
                </div>
            </section>

            {/* Book Details */}
            <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">

                    {/* Book Image */}
                    <div className="lg:col-span-5">
                        <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-lg lg:sticky lg:top-8">
                            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-blue-50 sm:h-[500px]">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="mt-5 flex items-center justify-between gap-3">
                                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#027cd4]">
                                    {book.category}
                                </span>

                                <span
                                    className={`rounded-full px-4 py-2 text-xs font-bold ${book.available
                                        ? "bg-green-50 text-green-600"
                                        : "bg-red-50 text-red-600"
                                        }`}
                                >
                                    {book.available ? "Available" : "Borrowed"}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Book Information */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

                            <span className="text-sm font-bold uppercase tracking-[2px] text-[#027cd4]">
                                Book Information
                            </span>

                            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                                {book.title}
                            </h2>

                           

                            <div className="my-7 h-px bg-gray-100" />

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">
                                    About This Book
                                </h3>

                                <p className="mt-3 text-sm leading-8 text-gray-600 sm:text-base">
                                    {book.description}
                                </p>
                            </div>

                            {/* Book Details */}
                            <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl bg-blue-50 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Author
                                    </p>
                                    <p className="mt-2 font-bold text-gray-900">
                                        {book.author}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-blue-50 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Category
                                    </p>
                                    <p className="mt-2 font-bold text-gray-900">
                                        {book.category}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-blue-50 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Total Copies
                                    </p>
                                    <p className="mt-2 font-bold text-gray-900">
                                        {book.copies}
                                    </p>
                                </div>
                            </div>

                            {/* Added By Information */}
                            <div className="rounded-2xl border border-gray-100 p-5">
                                <div className="flex items-center gap-4">
                                    
                                    <div>
                                        <p className="text-xs text-gray-700">
                                            Added to BookNook by
                                        </p>
                                        <h4 className="mt-1 font-bold text-gray-900">
                                            {book.userName}
                                        </h4>
                                        
                                    </div>
                                </div>
                            </div>

                            {/* Borrow Button */}
                            <div className="mt-8">
                                <Borrowbtn books={book} />

                                <p className="mt-4 text-center text-xs leading-6 text-gray-400">
                                    Borrow your favorite book and enjoy reading.
                                    Please return it within the borrowing period.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#027cd4] to-[#65b8ed] p-6 text-white">
                            <h3 className="text-lg font-bold">
                                A World of Knowledge Awaits!
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-blue-50">
                                Every book is an opportunity to learn, grow, and
                                discover something new. Happy reading!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
