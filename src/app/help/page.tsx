export default function HelpPage() {
    return (
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">GET HELP</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </header>
  
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
              <li>
                If you enter your PAN information at checkout, you&apos;ll be able to
                pay for your order with PayTM or a local credit or debit card.
              </li>
              <li>Apple Pay</li>
            </ul>
            <p className="mb-4">
              <a href="#" className="text-blue-500 hover:underline">
                Nike Members
              </a>{" "}
              can store multiple debit or credit cards in their profile for faster
              checkout. If you&apos;re not already a Member,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                join us
              </a>{" "}
              today.
            </p>
  
            <div className="flex space-x-4 mb-8">
              <button className="px-4 py-2 rounded-full bg-black text-white  hover:bg-gray-800">
                JOIN US
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-300">
                SHOP NIKE
              </button>
            </div>
  
            {/* FAQ Section */}
            <h3 className="text-xl font-bold mb-4">FAQs</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Does my card need international purchases enabled?</h4>
              <p className="text-gray-600 text-sm">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
              <p className="text-gray-600 text-sm">
                Please note, some banks may charge a{" "}
                <span className="italic">small transaction fee</span> for
                international orders.
              </p>
            </div>
  
            <div className="mb-4">
              <h4 className="font-semibold">Can I pay for my order with multiple methods?</h4>
              <p className="text-gray-600 text-sm">
                No, payment for Nike orders can&apos;t be split between multiple
                payment methods.
              </p>
            </div>
  
            <div>
              <h4 className="font-semibold">
                Why don&apos;t I see Apple Pay as an option?
              </h4>
              <p className="text-gray-600 text-sm">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you&apos;ll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                version of Wallet. Additionally, you&apos;ll need to use Safari to use
                Apple Pay on Nike.com.
              </p>
            </div>
          </div>
  
          {/* Right Section (Contact Us) */}
          <aside className="bg-gray-50 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
            <div className="flex items-start space-x-4 mb-4">
              <div className="text-3xl">📞</div>
              <div>
                <p className="font-semibold">000 800 919 0566</p>
                <p className="text-gray-600 text-sm">
                  Products & Orders: 24 hours a day, 7 days a week <br />
                  Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 mb-4">
              <div className="text-3xl">💬</div>
              <div>
                <p className="font-semibold">James Kemer</p>
                <p className="text-gray-600 text-sm">7 days a week</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">✉️</div>
              <div>
                <p className="font-semibold">We&apos;ll reply within</p>
                <p className="text-gray-600 text-sm">five business days</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
  