"use client";
import { Button } from "@/src/components/ui/button";
import React, { useEffect, useState } from "react";
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu";


const Header = () => {
  const [username, setUsername] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (storedUser && storedUser.username) {
      setUsername(storedUser.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <header data-testid="header" className="flex h-14 items-center bg-[#151515] gap-4 px-4 lg:h-[60px] lg:px-6">
      <div className="w-full flex-1">
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex gap-[1rem]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User strokeWidth={1} className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
              <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="mt-[0.6rem] text-gray-500">
            {username}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
