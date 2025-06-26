"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password") return null;
  return <Navbar />;
}