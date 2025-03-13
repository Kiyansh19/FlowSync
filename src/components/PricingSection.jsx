import React from "react";

const Pricing = () => {
  return (
    <section className="py-20  bg-gradient-to-t from-blue-200 via-blue-100 to-white " id="pricing">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300 p-1">
          Simple & Transparent Pricing
        </h2>
        <p className="text-lg mb-16 max-w-xl mx-auto font-semibold">
          Choose the plan that's right for you. No hidden fees, no surprises . Get started with FlowSync today!
        </p>

        <div className="grid md:grid-cols-3 gap-12 pb-10">
          {/* Free Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out  hover:border-2 border-purple-500">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Free Plan</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">$0/mo</p>
            <ul className="mb-8 space-y-2 text-left text-gray-600">
              <li>✅ Basic Features</li>
              <li>✅ Perfect for Individuals</li>
              <li>✅ Limited Support</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out relative hover:border-2 border-purple-500">
            <div className="absolute top-0 right-0 bg-yellow-500 text-xs text-white font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Pro Plan</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">$19/mo</p>
            <ul className="mb-8 space-y-2 text-left text-gray-600">
              <li>✅ All Features</li>
              <li>✅ AI Automation</li>
              <li>✅ Priority Support</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:border-2 border-purple-500 ">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Enterprise Plan</h3>
            <p className="text-4xl font-bold text-gray-800 mb-4">$49/mo</p>
            <ul className="mb-8 space-y-2 text-left text-gray-600">
              <li>✅ Custom Integrations</li>
              <li>✅ Team Access</li>
              <li>✅ Unlimited Automation</li>
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
