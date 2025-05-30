import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutProgress from "../../components/checkout1/checkout/CheckoutProgress";
import CheckoutForm from "../../components/checkout1/checkout/CheckoutForm";
import RightOrderSummary from "../../components/checkout1/checkout/RightOrderSummary";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
    emailUpdates: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("credit");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="bg-white ">
      <div className="bg-[#F8F8F9]">
        <CheckoutProgress currentStep={2} />
      </div>
      <div className="min-h-screen max-w-6xl mx-auto px-4 p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <CheckoutForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <RightOrderSummary
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
      </div>
      {/* Additional checkout content here */}
    </div>
  );
};

export default Checkout;
