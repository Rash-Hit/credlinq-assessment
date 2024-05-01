import Image from "next/image";

function NavBar() {
  return (
    <nav className="bg-[url('https://smehealthcheck.credilinq.ai/static/images/header-bg.jpg')] flex bg-cover flex-row justify-between px-52 py-7 items-center w-full">
        <Image
          src="https://smehealthcheck.credilinq.ai/static/images/logo.svg"
          alt="Logo"
          width={130}
          height={120}
        />
        <p className="text-white text-2xl">
          SME HealthCheck - Get Started
        </p>
    </nav>
  );
}

export default NavBar;
