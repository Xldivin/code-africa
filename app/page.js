import Navbar from "@/src/ui/Navbar";
import MainPage from "@/src/ui/Mainpage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MainPage />
    </div>
  );
}
