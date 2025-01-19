"use client";
import Link from "next/link";
import { Menu, Grid2X2, UsersRound, LogOut, BarChart2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TooltipContent, TooltipProvider, Tooltip, TooltipTrigger } from "@/src/components/ui/tooltip";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { Button } from "@/src/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className={`hidden border-r font-sans bg-[#151515] md:block ${'w-[220px] lg:w-[280px]'}`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center justify-between px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            {<span className="font-custom"></span>}
          </Link>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start text-sm font-medium ">
            <TooltipProvider>
              <Link href='/dashboard' prefetch legacyBehavior>
                <a onClick={() => handleLinkClick('/dashboard')}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center relative ${"w-[12rem] left-[1.5rem]"} gap-3 rounded-lg ${activeLink === '/dashboard' ? "bg-muted" : ""} px-4 py-2 text-primary cursor-pointer transition-all hover:text-muted-foreground hover:bg-muted`}
                      >
                        <Grid2X2 strokeWidth={1} className={`relative left-[6px]  ${activeLink === '/dashboard' ? "text-[#000]" : "text-[#fff]"}`} />
                        <p className="font-sans text-[#fff]">
                          {'Dashboard'}
                        </p>
                      </div>
                    </TooltipTrigger>
                    {<TooltipContent side="right">Dashboard</TooltipContent>}
                  </Tooltip>
                </a>
              </Link>
              <Link href='/dashboard/transactions' prefetch legacyBehavior>
                <a onClick={() => handleLinkClick('/dashboard/transactions')}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center relative ${"w-[12rem] left-[1.5rem]"} gap-3 ${activeLink === '/dashboard/transactions' ? "bg-muted" : ""} rounded-lg px-4 py-2 text-primary cursor-pointer transition-all hover:text-muted-foreground mt-[0.5rem] hover:bg-muted`}
                      >
                        <BarChart2 strokeWidth={1} className={`relative left-[6px]  ${activeLink === '/dashboard/transactions' ? "text-[#000]" : "text-[#fff]"}`} />
                        <p className="font-sans text-[#fff]">
                          {'Transctions'}
                        </p>
                      </div>
                    </TooltipTrigger>
                    {<TooltipContent side="right">Stocks</TooltipContent>}
                  </Tooltip>
                </a>
              </Link>
            </TooltipProvider>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
