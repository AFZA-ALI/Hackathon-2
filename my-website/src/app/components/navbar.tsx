import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="bg-gray-100 p-5 flex">
        <Image
          src={"/Logo Icon.jpg"}
          width={40}
          height={30}
          alt="icon"
          className="ml-24 mr-2"
        />
        <p className="text-3xl font-semibold">Comforty</p>

        {/* Make this container take full width */}
        <div className="flex justify-end ml-auto w-full">
          <button className="bg-white flex py-2 px-3 gap-3 mr-24 rounded-xl">
            <ShoppingCart />
            cart
            <Image src={"/No.jpg"} width={20} height={20} alt="number" />
          </button>
        </div>
      </div> 

      {/* nav */}
<div className="bg-white p-3 flex justify-between items-center">
  {/* Left Side: Navigation Links */}
  <ul className="flex flex-col md:flex-row items-center ml-24 gap-y-2 md:gap-y-0 md:gap-x-8 font-semibold">
    <li>
      <Link className="text-gray-600 hover:text-teal-700 hover:underline" href="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="text-gray-600 hover:text-teal-700 hover:underline" href="/shop">
        Shop
      </Link>
    </li>
    <li>
      <Link className="text-gray-600 hover:text-teal-700 hover:underline" href="/product">
        Product
      </Link>
    </li>
    <li>
      <Link className="text-gray-600 hover:text-teal-700 hover:underline" href="/Pages">
        Pages
      </Link>
    </li>
    <li>
      <Link className="text-gray-600 hover:text-teal-700 hover:underline" href="/about">
        About
      </Link>
    </li>
  </ul>

  {/* Right Side: Contact Number */}
  <div className="mr-24">
    <p className="text-gray-600 font-semibold">
      Contact: <span className="text-black">+1 (123) 456-7890</span>
    </p>
  </div>
  </div>
  </div>
  );
}

export default Navbar;
