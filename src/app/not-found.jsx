
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">

      <div className="w-full max-w-xl text-center">

        {/* Book Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-50 text-[#027cd4]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-14 w-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7v14m0-14C10.5 5.5 7.5 5 3 5v14c4.5 0 7.5.5 9 2m0-14c1.5-1.5 4.5-2 9-2v14c-4.5 0-7.5.5-9 2"
            />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold tracking-tight text-[#027cd4] sm:text-9xl">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-5 text-2xl font-bold text-gray-800 sm:text-3xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry, let's get you back to your library.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#027cd4] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#0165ad] hover:shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          Back to Home
        </Link>


      </div>
    </div>
  );
}
