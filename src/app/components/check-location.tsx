"use client";
import React, { useEffect } from "react";

const CheckLocation = () => {
  useEffect(() => {
    if (!localStorage.getItem("location")) {
      fetch("/api/location")
        .then((res) => res.json())
        .then((data) => localStorage.setItem("location", data.loc));
    }
  }, []);
  return null;
};

export default CheckLocation;
