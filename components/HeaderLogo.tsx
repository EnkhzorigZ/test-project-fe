import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function HeaderLogo() {
  return (
    <Link href={"/"} className="">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative ">
          <Image
            src={logo}
            alt="Logo"
            fill
            className="rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="font-semibold">Цаг захиалгын платпорм</h1>
      </div>
    </Link>
  );
}
