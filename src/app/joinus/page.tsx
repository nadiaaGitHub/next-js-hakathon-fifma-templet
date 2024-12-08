import Image from "next/image";
import Link from "next/link";

export default function JoinPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
      <div className="p-6  max-w-md w-full sm:p-8 ">
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
        <h1 className="text-2xl font-bold text-center mb-6">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Join Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* First Name Input */}
          <div>
            <input
              type="text"
              id="firstName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name Input */}
          <div>
            <input
              type="text"
              id="lastName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Date of Birth Input */}
          <div>
            <input
              type="text"
              id="dob"
              placeholder="Date of Birth"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              required
            />
            <p className="text-sm text-gray-500 mt-1 text-center">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>

          {/* Country Selection */}
          <div>
            <select
              id="country"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              required
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
          </div>


{/* Gender Radio Buttons */}
<div className="flex flex-col sm:flex-row sm:justify-between mb-4">
  <button className="flex items-center justify-center border border-gray-400 px-16 py-2 text-sm text-gray-700 mb-2 sm:mb-0">
    <span>Female</span>
  </button>
  <button className="flex items-center justify-center border border-gray-400 px-16 py-2 text-sm text-gray-700 sm:ml-4">
    <span>Male</span>
  </button>
</div>

          {/* Checkbox for Email Updates */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="emailUpdates"
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <p
            
              className="ml-2 text-sm text-gray-600"
            >
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </p>
          </div>

          {/* Terms and Conditions */}
          <p className="text-xs text-gray-600 text-center m-14">
            By creating an account, you agree to Nike&apos;s{" "}
            <Link href="/privacy-policy" legacyBehavior>
              <a className="text-blue-600 hover:underline">Privacy Policy</a>
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-use" legacyBehavior>
              <a className="text-blue-600 hover:underline">Terms of Use</a>
            </Link>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition mt-4"
          >
            JOIN US
          </button>
        </form>

        {/* Sign In Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already a Member?{" "}
            <Link href="/login" legacyBehavior>
              <a className="text-blue-600 hover:underline">Sign In.</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
