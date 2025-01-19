"use client";
import { Button } from "@/src/components/ui/button";
import { User } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu";
import { usePathname } from 'next/navigation';


const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/dashboard';
  const isPortfolio = pathname === '/dashboard/portfolio';
  const isWatchlist = pathname === '/dashboard/watchlist';
  const isStock = pathname === '/dashboard/stocks' || /^\/stocks\/[^/]+$/.test(pathname);
  const isWallet = pathname === '/dashboard/payment';
  const isOrders = pathname === '/dashboard/orders';
  const isCommunity = pathname === '/dashboard/community';

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
          </DropdownMenu>
          <p className="mt-[0.6rem] text-gray-500">
            Eric
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
