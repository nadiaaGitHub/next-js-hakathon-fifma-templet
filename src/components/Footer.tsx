import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[92.5%]">
        {/* Find a Store Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2">
            <li className="text-base">BECOME A MEMBER</li>
            <li className="text-base">SIGN UP FOR EMAIL</li>
            <li className="text-base">Send Us Facebook</li>
            <li className="text-base">STUDENT DISCOUNTS</li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Order Status</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Delivery</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Returns</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Payment Options</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">
                  Contact Us On Nike.com Inquiries
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">
                  Contact Us On All Other Inquiries
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* About Nike Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">News</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Careers</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Investors</a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="hover:underline">Sustainability</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex space-x-4">
            <Link href="#" legacyBehavior>
              <a className="hover:opacity-75">
                <Image src="/images/twitter.png" alt="Twitter" width={30} height={30} />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:opacity-75">
                <Image src="/images/facebook.png" alt="Facebook" width={30} height={30} />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:opacity-75">
                <Image src="/images/youtube.png" alt="YouTube" width={30} height={30} />
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:opacity-75">
                <Image src="/images/insta.png" alt="Instagram" width={30} height={30} />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500">
          {/* Location and Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="/images/location.png"
              alt="Location Logo"
              width={24}
              height={24}
              className="block"
            />
            <span className="text-white font-bold">India</span>
            <span>© Copyright Rimel 2022. All rights reserved</span>
          </div>

          {/* Footer Navigation */}
          <nav className="flex space-x-4 text-center">
            <Link href="/find-store" legacyBehavior>
              <a className="text-[11px] hover:underline">Guides</a>
            </Link>
            <Link href="/help" legacyBehavior>
              <a className="text-[11px] hover:underline">Terms of Sale</a>
            </Link>
            <Link href="/join-us" legacyBehavior>
              <a className="text-[11px] hover:underline">Terms of Use</a>
            </Link>
            <Link href="/sign-in" legacyBehavior>
              <a className="text-[11px] hover:underline">Nike Privacy Policy</a>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
