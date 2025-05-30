import React, { useState } from "react";
import { Check, Lock, Truck, RotateCcw, Phone } from "lucide-react";

export default function CasperCheckout() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [selectedShipping, setSelectedShipping] = useState("standard");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">casper</div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Lock className="w-4 h-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-600">
                    Email me with news and offers
                  </span>
                </label>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">State</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                  </select>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={selectedShipping === "standard"}
                      onChange={(e) => setSelectedShipping(e.target.value)}
                      className="text-blue-600"
                    />
                    <div>
                      <div className="font-medium">Standard Shipping</div>
                      <div className="text-sm text-gray-600">
                        5-7 business days
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold">FREE</span>
                </label>
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="shipping"
                      value="expedited"
                      checked={selectedShipping === "expedited"}
                      onChange={(e) => setSelectedShipping(e.target.value)}
                      className="text-blue-600"
                    />
                    <div>
                      <div className="font-medium">Expedited Shipping</div>
                      <div className="text-sm text-gray-600">
                        2-3 business days
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold">$75</span>
                </label>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Payment</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on card"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              {/* Product */}
              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <div className="w-12 h-8 bg-gray-400 rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">The Casper Original Mattress</h3>
                  <p className="text-sm text-gray-600">Queen Size</p>
                  <p className="text-sm text-gray-600">Qty: 1</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold">$1,195</div>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="py-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$1,195.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$95.60</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$1,290.60</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Truck className="w-4 h-4 text-blue-600" />
                    <span>Free shipping & returns</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <RotateCcw className="w-4 h-4 text-blue-600" />
                    <span>100-night trial</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span>10-year warranty</span>
                  </div>
                </div>
              </div>

              {/* Complete Order Button */}
              <button className="w-full bg-blue-600 text-white py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors">
                Complete Order
              </button>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>Your information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Need help? Call 1-888-498-2654</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
