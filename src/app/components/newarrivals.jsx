import Link from "next/link";


export default async function NewArrivals() {
   const FD=await fetch("http://localhost:8000/books");
    const bbooks=await FD.json()
    
    let bookss=[...bbooks]
    let books=[]
    for(let i of bookss){
        books.unshift(i)
    }
    
   

    return (
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-[3px] text-[#027cd4]">
                            Fresh From Our Library
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            New Arrivals
                        </h2>

                        <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
                            Explore the latest books added to BookNook.
                            Find your next favorite story and start reading.
                        </p>
                    </div>

                    <span className="w-fit rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-[#027cd4]">
                        Latest 6 Books
                    </span>
                </div>

                {/* Books Grid */}
               
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {books.map((book) => (
                            <div
                                key={book._id.toString()}
                                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Book Image */}
                                <div className="relative h-64 overflow-hidden bg-blue-50">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    {/* Category Badge */}
                                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#027cd4] shadow-sm">
                                        {book.category}
                                    </span>
                                </div>

                                {/* Book Information */}
                                <div className="p-5">
                                    <h3 className="truncate text-lg font-bold text-gray-900 transition group-hover:text-[#027cd4]">
                                        {book.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500">
                                        By{" "}
                                        <span className="font-semibold text-gray-700">
                                            {book.author}
                                        </span>
                                    </p>

                                    {/* View Details */}
                                    <Link
                                        href={`/all-book/${book._id}`}
                                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#027cd4] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0165ad]"
                                    >
                                        View Details
                                        <span className="transition-transform group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                

                {/* See All Books Button */}
                <div className="mt-12 text-center">
                    <Link
                        href="/all-book"
                        className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#027cd4] px-8 py-3.5 text-sm font-bold text-[#027cd4] transition duration-300 hover:bg-[#027cd4] hover:text-white"
                    >
                        See All Books
                        <span>→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
