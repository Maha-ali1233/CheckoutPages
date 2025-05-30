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

  return (
    <div className="mb-6 font-bold">
      <label className="inline-flex items-center">
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
      <div>
        <span className="ml-2 text-sm m-4 text-gray-700">
          Pay securely using your card
        </span>
      </div>

      {paymentMethod === "credit" && (
        <div className="mt-4 space-y-4 text-sm font-normal">
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              className={`w-full p-2 border rounded-md ${
                cardNumber && !isCardNumberValid
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              value={cardNumber}
              maxLength={19}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
            {cardNumber && !isCardNumberValid && (
              <p className="text-red-600 text-xs mt-1">
                Enter a valid 16-digit card number.
              </p>
            )}
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2">
              <label
                className="block mb-1 font-medium text-gray-700"
                htmlFor="expiry"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className={`w-full p-2 border rounded-md ${
                  expiry && !isExpiryValid
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                maxLength={5}
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              {expiry && !isExpiryValid && (
                <p className="text-red-600 text-xs mt-1">
                  Enter a valid expiry date (MM/YY).
                </p>
              )}
            </div>
            <div className="w-1/2">
              <label
                className="block mb-1 font-medium text-gray-700"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className={`w-full p-2 border rounded-md ${
                  cvv && !isCvvValid ? "border-red-500" : "border-gray-300"
                }`}
                maxLength={4}
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
              {cvv && !isCvvValid && (
                <p className="text-red-600 text-xs mt-1">
                  Enter a valid 3 or 4 digit CVV.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
