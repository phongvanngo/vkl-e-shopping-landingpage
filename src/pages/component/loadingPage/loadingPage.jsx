import React from "react";
import { useSelector } from "react-redux";
import "./loadingPage.css";

export default function LoadingPage() {
  const isLoading = useSelector((state) => state.loading.isLoading);
  if (isLoading === false) return null;
  return (
    <div className="my-loader-wrapper">
      <div className="my-loader"></div>
    </div>
  );
}
