import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
      <div className="p-6 bg-white rounded-lg max-w-sm w-full sm:p-8 ">
        {/* Nike Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/Nav-logo.png"
            alt="Nike Logo"
            width={80}
            height={80}
          />
        </div>

        {/* Title */}
        <h1 className="text-lg sm:text-xl font-bold text-center mb-4">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="keepSignedIn"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="keepSignedIn"
                className="ml-2 text-sm text-gray-600"
              >
                Keep me signed in
              </label>
            </div>

            {/* Forgot Password Link */}
            <Link href="/forgot-password" legacyBehavior>
              <a className="text-sm text-blue-600 hover:underline">
                Forgotten your password?
              </a>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            SIGN IN
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Not a Member?{" "}
            <Link href="/signup" legacyBehavior>
              <a className="text-blue-600 hover:underline">Join Us.</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
