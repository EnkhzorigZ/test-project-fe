import { ModeToggle } from "./ui/mode-toggler";
import HeaderLogo from "./HeaderLogo";

export default function Navbar() {
  return (
    <div className="border-b flex items-center justify-between px-4 py-2 bg-white dark:bg-background">
      <HeaderLogo />
      <ModeToggle />
    </div>
  );
}
