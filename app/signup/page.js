"use client";
import React, { useEffect } from "react";
import image from '../../src/assets/83161c92ae52a10f49655a798baed5fc.jpeg';
import RegisterAuthentication from "@/src/ui/signup";
import Image from "next/image";

const Register = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:h-screen max-sm:items-center sm:gap-8 lg:gap-20 bg-[#F5F5F5]">
      <div className="w-full h-screen max-sm:hidden">
        <Image
          width={100}
          height={100}
          alt="tuesday markets logo "
          src={image}
          className="w-full h-screen"
        />
      </div>
      <div className="flex flex-col justify-center max-sm:px-8 sm:px-8 lg:px-20 max-sm:items-center">
        <div className="w-full">
          <RegisterAuthentication />
        </div>
      </div>
    </div>
  );
};

export default Register;
