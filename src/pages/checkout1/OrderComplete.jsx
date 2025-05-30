import React from "react";
import CheckoutProgress from "../../components/checkout1/checkout/CheckoutProgress";
import { useLocation } from "react-router-dom";

const OrderComplete = () => {
  const location = useLocation();
  const items = location.state?.items || [];

  return (
    <div className=" bg-white flex flex-col">
      {/* Progress Bar */}
      <div className="bg-[#F8F8F9] shadow-sm">
        <CheckoutProgress currentStep={3} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-xl w-full bg-[#FAFAFA] p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-[#2E2E2E] mb-4">
            🎉 Thank you for your order!
          </h1>
          <p className="text-gray-600 mb-6">
            We've received your order and are preparing it for shipment.
          </p>

          {/* Ordered Items */}
          <ul className="text-left text-sm text-gray-700 mb-6 divide-y divide-gray-200">
            {items.map(({ id, name, quantity }) => (
              <li key={id} className="py-2 flex justify-between">
                <span>{name}</span>
                <span className="font-semibold">× {quantity}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-4 bg-[#917E61] hover:bg-[#7e6a53] text-white font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
