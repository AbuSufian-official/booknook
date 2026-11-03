
import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">

      <div className="flex flex-col items-center justify-center">

        {/* Loading Spinner */}
        <div className="relative flex items-center justify-center">

          {/* Outer Circle */}
          <div className="h-20 w-20 rounded-full border-4 border-blue-100"></div>

          {/* Spinner Icon */}
          <ImSpinner8 className="absolute h-20 w-20 animate-spin text-[#027cd4]" />

        </div>

        {/* Loading Text */}
        <h2 className="mt-6 text-xl font-bold text-gray-800">
          Loading...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we load your books.
        </p>

        {/* Brand Name */}
        <p className="mt-5 text-sm font-semibold tracking-widest text-[#027cd4]">
          BOOKNOOK
        </p>

      </div>

    </main>
  );
}
