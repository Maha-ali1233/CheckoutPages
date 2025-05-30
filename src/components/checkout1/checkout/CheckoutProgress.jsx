import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutProgress = ({ currentStep = 2 }) => {
  const navigate = useNavigate();

  const steps = [
    { title: "Your Cart", number: 1, path: "/cart" },
    { title: "Checkout Details", number: 2, path: "/checkout" },
    { title: "Order Complete", number: 3, path: "/order-complete" },
  ];

  const handleStepClick = (stepNumber, path) => {
    if (stepNumber <= currentStep) {
      navigate(path);
      s;
    }
  };

  // Internal subcomponent: Step
  const ProgressStep = ({
    title,
    stepNumber,
    isActive,
    isCompleted,
    isClickable,
    onClick,
  }) => {
    const stepClasses =
      isCompleted || isActive
        ? "w-12 h-12 bg-[#A2B44F] text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer"
        : "w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold";

    const titleClasses =
      isCompleted || isActive
        ? "text-xl font-bold text-gray-800 mt-2 mb-4"
        : "text-xl font-bold text-gray-500 mt-2 mb-4";

    return (
      <div className="flex flex-col items-center">
        <div className={titleClasses}>{title}</div>
        <div
          className={stepClasses}
          onClick={isClickable ? onClick : undefined}
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : -1}
        >
          {stepNumber}
        </div>
      </div>
    );
  };

  // Internal subcomponent: Connector
  const ProgressConnector = ({ isCompleted }) => (
    <div
      className={`flex-1 h-1 mx-4 ${
        isCompleted ? "bg-[#A2B44F]" : "bg-gray-300"
      }`}
    ></div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <ProgressStep
              title={step.title}
              stepNumber={step.number}
              isActive={currentStep === step.number}
              isCompleted={currentStep > step.number}
              isClickable={step.number <= currentStep}
              onClick={() => handleStepClick(step.number, step.path)}
            />
            {index < steps.length - 1 && (
              <ProgressConnector isCompleted={currentStep > step.number} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutProgress;
