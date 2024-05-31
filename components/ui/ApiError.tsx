import React from "react";
import { useRouter } from "next/navigation";

type ErrorModalProps = {
  message: string;
};

const ApiError = ({ message }: ErrorModalProps) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="mt-4 text-gray-700">{message}</p>
        <button
          onClick={handleGoBack}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ApiError;
