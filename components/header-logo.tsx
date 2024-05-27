import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/main">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" height={28} width={28} alt="Logo" />
        <p className="font-semibold text-white text-2xl ml-2.5">FinanceFlow</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
