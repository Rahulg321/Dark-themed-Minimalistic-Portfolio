import LoadingSpinner from "@/components/LoadingSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
