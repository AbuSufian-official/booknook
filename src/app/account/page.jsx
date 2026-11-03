
"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"


export default function Account() {
  // Sample user information
   const {
          data: session,
          isPending, //loading state
          error, //error object
          refetch //refetch the session
      } = authClient.useSession()
      

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">

      <div className="mx-auto max-w-3xl">

        {/* Page Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your BookNook account.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          {/* Blue Cover */}
          <div className="h-36 bg-[#027cd4] sm:h-44"></div>

          {/* Profile Information */}
          <div className="px-6 pb-10 text-center sm:px-10">

            {/* Profile Image */}
            <div className="-mt-16 flex justify-center">
              <Image
                src={session?.user.image}
                alt="Profile Image"
                width={120}
                height={120}
                unoptimized
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
              />
            </div>

            {/* User Details */}
            <div className="mt-5">
              <h2 className="text-2xl font-bold text-gray-800">
                {session?.user.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {session?.user.email}
              </p>
            </div>

            {/* Divider */}
            <div className="my-7 border-t border-gray-100"></div>

            {/* My Books Button */}
            <Link
              href="/my-books"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#027cd4] px-7 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#0165ad] hover:shadow-md"
            >
              {/* Book Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7v14m0-14C10.5 5.5 7.5 5 3 5v14c4.5 0 7.5.5 9 2m0-14c1.5-1.5 4.5-2 9-2v14c-4.5 0-7.5.5-9 2"
                />
              </svg>

              My Books
            </Link>

          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Welcome to BookNook — Your personal online library.
        </p>

      </div>
    </main>
  );
}
