import React, { useEffect, useState } from "react";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sampleOrderData = {
  name: "SUMMER20",
  coupon: 15.0,
  items: [
    { id: 1, name: "Cool Sneakers", price: 59.99, quantity: 2 },
    { id: 2, name: "Comfy Hoodie", price: 39.99, quantity: 1 },
    { id: 3, name: "Sport Socks", price: 9.99, quantity: 3 },
  ],
  shipping: 5.0,
  tax: 8.0, // Replacing 'discount' with tax
};

export default function RightOrderSummary({ paymentMethod, setPaymentMethod }) {
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(sampleOrderData);
        }, 1000);
      });
    };

    fetchOrderData().then((data) => {
      setOrderData(data);
    });
  }, []);

  if (!orderData) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm w-full md:w-1/3">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Your order</h2>
        <p>Loading order details...</p>
      </div>
    );
  }
  const handleRemoveItem = (id) => {
    const updatedItems = orderData.items.filter((item) => item.id !== id);
    setOrderData({ ...orderData, items: updatedItems });
  };

  const subtotal = orderData.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + orderData.shipping + orderData.tax;
  const handlePlaceOrder = () => {
    navigate("/order-complete", { state: { items: orderData.items } });
  };

  return (
    <div className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm w-full md:w-1/3">
      <h2 className="text-[22px] font-bold text-gray-800 mb-4">Your order</h2>

      <ul className="divide-y divide-gray-200 mb-4">
        {orderData.items.map(({ id, name, price, quantity }) => (
          <li
            key={id}
            className="flex flex-col justify-between  py-2 font-bold"
          >
            <div>
              {name} x {quantity}
            </div>
            <div className="flex gap-4">
              <span>${(price * quantity).toFixed(2)}</span>
              <button
                onClick={() => handleRemoveItem(id)}
                className="text-red-500 hover:text-red-700 font-bold text-lg"
              >
                ×
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
        <div className="flex flex-col justify-between text-gray-700 font-bold">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex flex-col justify-between text-gray-700 font-bold">
          <span>Coupon: {orderData.name}</span>
          <span>${orderData.coupon.toFixed(2)}</span>
        </div>

        <div className="flex flex-col justify-between text-gray-700 font-bold">
          <span>Shipping</span>
          <span>Enter your shipping address first</span>
        </div>

        <div className="flex flex-col justify-between text-gray-700 font-bold">
          <span>Tax</span>
          <span>$ {orderData.tax.toFixed(2)}</span>
        </div>

        <div className="flex flex-col justify-between text-lg font-bold border-t border-gray-300 pt-2">
          <span>Total</span>
          <span className="text-[24px]">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment method selection */}
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
                className="w-full p-2 border border-gray-300 rounded-md"
              />
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
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
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
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 flex flex-col space-y-2 font-bold text-gray-800">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="payment"
            value="installments"
            checked={paymentMethod === "installments"}
            onChange={() => setPaymentMethod("installments")}
            className="form-radio accent-amber-700"
          />
          <span className="ml-2">Interest-free Installments</span>
        </label>

        <label className="inline-flex items-center">
          <input
            type="radio"
            name="payment"
            value="crypto"
            checked={paymentMethod === "crypto"}
            onChange={() => setPaymentMethod("crypto")}
            className="form-radio accent-amber-700"
          />
          <span className="ml-2">Crypto (Powered by NetCents)</span>
        </label>
      </div>

      {/* Terms and conditions checkbox */}
      <div className="mb-6">
        <label className="inline-flex items-center text-sm text-gray-700">
          <input type="checkbox" className="form-checkbox accent-amber-700" />
          <span className="ml-2">
            I accept the{" "}
            <a href="#" className="underline">
              <span className="text-[#A2B44F]">Terms </span>and Conditions
            </a>
          </span>
        </label>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-[#917E61] hover:bg-[#917E61] text-white font-bold py-3 px-4 rounded-lg transition duration-200"
      >
        Place order
      </button>

      <div className="text-center mt-4 text-xs text-gray-500 font-bold">
        POWERED BY netcents
      </div>
    </div>
  );
}
