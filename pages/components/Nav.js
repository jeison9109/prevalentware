import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [enableMenu, setEnambleMenu] = React.useState(false);
  const handleHamburgerMenu = () => setEnambleMenu(!enableMenu);

  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 p-2 bg-primary">
      <div className="flex justify-between items-center gap-2">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <Image src="/images/logo.svg" height={50} width={50} />
            <h1 className="text-white font-sans lg:Roboto">Gente PreValente</h1>
          </a>
        </Link>
        <div className="flex gap-1 hidden lg:flex">
          <Image src="/images/search.svg" height={16} width={16} />
          <input
            placeholder="Buscar..."
            type="text"
            className="bg-transparent text-white font-sans lg:Roboto text-sm"
          />
        </div>
        <div className="flex md:hidden">
          <Image
            src="/images/hamburger.svg"
            height={20}
            width={20}
            className="cursor-pointer text-white font-sans lg:Roboto text-sm"
            onClick={handleHamburgerMenu}
          />
        </div>
      </div>
      <div
        className={`justify-end items-center gap-10 py-5 md:p-0 md:flex ${
          enableMenu ? "block" : "hidden"
        }`}
      >
        <div className="flex gap-1">
          <Image src="/images/settings.svg" height={16} width={16} />
          <h1 className="text-white font-sans lg:Roboto text-sm">
            Administración
          </h1>
        </div>
        <div className="flex gap-1">
          <Image src="/images/business.svg" height={16} width={16} />
          <h1 className="text-white text-white font-sans lg:Roboto text-sm">
            Empleo
          </h1>
          <Image src="/images/arrow-down.svg" height={16} width={16} />
        </div>
        <div className="flex gap-1">
          <Image src="/images/ico-cv.svg" height={16} width={16} />
          <h1 className="text-white font-sans lg:Roboto text-sm">Mi CV</h1>
        </div>
        <div className="flex gap-1">
          <Image src="/images/ellipse.svg" height={16} width={16} />
          <h1 className="text-white font-sans lg:Roboto text-sm">User Name</h1>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
