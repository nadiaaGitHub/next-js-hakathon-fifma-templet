"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    country: "India",
    gender: "",
    emailUpdates: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement; // Explicitly assert as HTMLInputElement
    const { id, value, type } = target;
  
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? target.checked : value, // Use 'target.checked' explicitly
    }));
  };
  

  const handleGenderSelect = (gender: string) => {
    setFormData((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password || !formData.firstName || !formData.lastName || !formData.dob || !formData.gender) {
      setError("All fields are required.");
      return;
    }

    // Simulate form submission
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
    setError(""); // Clear error
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
      <div className="p-6 max-w-md w-full sm:p-8">
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
              value={formData.firstName}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Date of Birth Input */}
          <div>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
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
              value={formData.country}
              onChange={handleChange}
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

          {/* Gender Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
            <button
              type="button"
              className={`flex items-center justify-center border px-16 py-2 text-sm ${
                formData.gender === "Female" ? "bg-black text-white" : "border-gray-400 text-gray-700"
              }`}
              onClick={() => handleGenderSelect("Female")}
            >
              Female
            </button>
            <button
              type="button"
              className={`flex items-center justify-center border px-16 py-2 text-sm mt-2 sm:mt-0 sm:ml-4 ${
                formData.gender === "Male" ? "bg-black text-white" : "border-gray-400 text-gray-700"
              }`}
              onClick={() => handleGenderSelect("Male")}
            >
              Male
            </button>
          </div>

          {/* Checkbox for Email Updates */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
            <p className="ml-2 text-sm text-gray-600">
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

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

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
