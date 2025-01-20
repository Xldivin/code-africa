import React, { useState } from "react";
import EmailLogin from "./EmailAuthentication";

const LoginAuthentication = () => {

  return (
    <div className="w-full">
      <div className="py-8 max-sm:text-center">
        <h1 className="text-2xl font-bold font-sans">
          Login 
        </h1>
      </div>
      <div className="flex items-center justify-start gap-2">
      </div>
      <div className="my-6">{<EmailLogin />}</div>
    </div>
  );
};

export default LoginAuthentication;