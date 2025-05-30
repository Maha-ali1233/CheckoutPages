import React, { useState } from "react";

export default function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  // Controlled form state for credit card details
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Basic validation (can improve or add libraries later)
  const isCardNumberValid = /^\d{16}$/.test(cardNumber.replace(/\s+/g, ""));
  const isExpiryValid = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry);
  const isCvvValid = /^\d{3,4}$/.test(cvv);

  const isCreditFormValid = isCardNumberValid && isExpiryValid && isCvvValid;

  // Format card number as user types (optional, for UX)
  const formatCardNumber = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  // Fake API call simulation
  const handleFakePayment = (method) => {
    alert(`Pretend calling ${method} API...`);
  };

  return (
    <div className="mb-6 flex flex-col font-bold">
      {/* Payment options */}
      <label className="inline-flex items-center mb-3">
        <input
          type="radio"
          name="payment"
          value="credit"
          checked={paymentMethod === "credit"}
          onChange={() => setPaymentMethod("credit")}
          className="form-radio accent-amber-700"
        />
        <span className="ml-2 flex items-center">
          Credit / Debit Card
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="w-6 h-4 ml-2 mr-1"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="MasterCard"
            className="w-6 h-4 mr-2"
          />
        </span>
      </label>

      <label className="inline-flex items-center mb-3">
        <input
          type="radio"
          name="payment"
          value="stripe"
          checked={paymentMethod === "stripe"}
          onChange={() => setPaymentMethod("stripe")}
          className="form-radio accent-amber-700"
        />
        <span className="ml-2">Stripe</span>
      </label>

      <label className="inline-flex items-center mb-3">
        <input
          type="radio"
          name="payment"
          value="paypal"
          checked={paymentMethod === "paypal"}
          onChange={() => setPaymentMethod("paypal")}
          className="form-radio accent-amber-700"
        />
        <span className="ml-2">PayPal</span>
      </label>

      {/* Payment UI Sections */}
      <div className="mt-6 flex flex-col text-sm font-normal">
        {paymentMethod === "credit" && (
          <div className="space-y-5 bg-white p-5 rounded-xl shadow-sm border">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-700 ${
                  cardNumber && !isCardNumberValid
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                maxLength={19}
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(formatCardNumber(e.target.value))
                }
              />
              {cardNumber && !isCardNumberValid && (
                <p className="text-red-500 text-xs mt-1">
                  Enter a valid 16-digit card number.
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-800 mb-1"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-700 ${
                    expiry && !isExpiryValid
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  maxLength={5}
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
                {expiry && !isExpiryValid && (
                  <p className="text-red-500 text-xs mt-1">
                    Enter a valid expiry date (MM/YY).
                  </p>
                )}
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-800 mb-1"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-700 ${
                    cvv && !isCvvValid ? "border-red-500" : "border-gray-300"
                  }`}
                  maxLength={4}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                {cvv && !isCvvValid && (
                  <p className="text-red-500 text-xs mt-1">
                    Enter a valid 3 or 4 digit CVV.
                  </p>
                )}
              </div>
            </div>

            <button
              disabled={!isCreditFormValid}
              onClick={() => alert("Pretend Credit Card payment processed")}
              className={`w-full py-2 rounded-lg font-semibold transition duration-200 ${
                isCreditFormValid
                  ? "bg-amber-700 text-white hover:bg-amber-800"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Pay with Card
            </button>
          </div>
        )}

        {paymentMethod === "stripe" && (
          <div className="p-5 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Stripe Payment</h3>
            <p className="text-gray-600">Simulated Stripe checkout flow.</p>
            <button
              onClick={() => handleFakePayment("Stripe")}
              className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Pay with Stripe
            </button>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="p-5 border rounded-xl bg-white shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">PayPal Payment</h3>
            <p className="text-gray-600">Simulated PayPal login and payment.</p>
            <button
              onClick={() => handleFakePayment("PayPal")}
              className="mt-3 px-5 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition"
            >
              Pay with PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
