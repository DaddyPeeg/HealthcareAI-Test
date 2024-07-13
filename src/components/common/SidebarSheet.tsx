import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../pages/main/Sidebar";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu size={20} className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
