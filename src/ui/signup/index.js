import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";

const SectionHeader = () => {
  return (
    <div className="py-6 pb-4 max-sm:text-center">
      <h1 className="text-md font-bold font-sans">{'Register in Wallet Application'}</h1>
    </div>
  );
};

const RegisterAuthentication = () => {
  const router = useRouter();
  const [isloading, setIsloading] = useState(false);
  const [title] = useState("Register in Wallet Application");

  const initialData = {
    username: "",
    email: "",
    password: "",
  };

  const { errors, values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialData,
    onSubmit: () => {
      setIsloading(true);

      // Get existing users from localStorage or initialize an empty array
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if email is already registered
      const isEmailTaken = users.some((user) => user.email === values.email);

      if (isEmailTaken) {
        alert("Email is already registered!");
        setIsloading(false);
        return;
      }

      // Save new user
      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful!");
      setIsloading(false);

      // Redirect to login page
      router.push("/login");
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col mb-6 gap-3">
        <SectionHeader title={title} />
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Joe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="*************"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isloading}
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300 disabled:bg-gray-400"
        >
          {isloading ? "Loading..." : "Sign Up"}
        </button>

        <div className="mt-4">
          <p className="text-gray-800/50 font-sans">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0177fd]">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterAuthentication;
