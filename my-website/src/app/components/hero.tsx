import { ArrowRight, ShoppingCart } from "lucide-react"
import Image from "next/image"


function Hero(){
    return(
        <div className="bg-gray-100 w-[1000px] h-[600px] ml-40 rounded-xl">
            <div className="flex">
                {/*left*/}
                <div className="pt-40 w-[50%] h-[600px]">
                    <p className="text-indigo-900 pl-16">WELCOME TO CHAIRY</p>
                    <p className="text-5xl font-bold pl-16 pt-3">Best Furniture
                       Collection for your
                       interior.</p>
                       <button className="py-2 px-3 bg-teal-500 text-white flex gap-2 mt-10 ml-16 rounded-md">Shop Now
                       <ArrowRight color="#fefbfb" />
                       </button>
                </div>
                {/*right*/}
                <div className="w-[50%] h-[600px]">
                    <Image src={"/Product Image.jpg"}
                    width={350}
                    height={350}
                    alt="hero"
                    className="mt-16 ml-20"
                    /> 
                </div>
            </div>

            {/*logo*/}
            <div className="mt-10 gap-5">
                <div className=" flex justify-between items-center" >
                   <Image src={"/Logo.jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>

                   <Image src={"/Logo (1).jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>

                   <Image src={"/Logo (2).jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>

                    <Image src={"/Logo (3).jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>

                    <Image src={"/Logo (4).jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>

                    <Image src={"/Logo (5).jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>
                   
                   <Image src={"/Logo (6).jpg"}
                   width={100}
                   height={100}
                   alt="logo"/>
                </div>
            </div>

            <div>
               <h2 className="text-2xl font-semibold mt-6">Featured Products</h2>
            </div>
         
            <div className="w-full h-[300px] mt-8">
            <div className="flex gap-5">
    {/* Product 1 */}
    <div className="w-[300px] h-[250px] flex flex-col items-center gap-2">
      <Image
        src={"/Image.jpg"}
        width={250}
        height={200}
        alt="product"
        className="rounded-md"
      />
      <span className="mr-24 mt-1 text-teal-700">Library Stool Chair</span>
      <span className="mr-48 font-bold -mt-2">$20</span>
      <button className="py-2 px-2 bg-teal-500 rounded-md ml-48 -mt-14">
      <ShoppingCart color="#f7f7f7" />
      </button>
    </div>
    
    {/* Product 2 */}
    <div className="w-[300px] h-[250px] flex flex-col items-center gap-2">
      <Image
        src={"/Image (1).jpg"}
        width={250}
        height={200}
        alt="product"
        className="rounded-md"
      />
      <span className="mr-24 mt-1">Library Stool Chair</span>
      <span className="mr-48 font-bold -mt-2">$20</span>
      <button className="py-2 px-2 bg-gray-200 rounded-md ml-48 -mt-14">
      <ShoppingCart />
      </button>
    </div>
    
    {/* Product 3 */}
    <div className="w-[300px] h-[250px] flex flex-col items-center gap-2">
      <Image
        src={"/Image (2).jpg"}
        width={250}
        height={200}
        alt="product"
        className="rounded-md"
      />
      <span className="mr-24 mt-1">Library Stool Chair</span>
      <span className="mr-48 font-bold -mt-2">$20</span>
      <button className="py-2 px-2 bg-gray-200 rounded-md ml-48 -mt-14">
      <ShoppingCart />
      </button>
    </div>
    
    {/* Product 4 */}
    <div className="w-[300px] h-[250px] flex flex-col items-center gap-2">
      <Image
        src={"/Image (3).jpg"}
        width={250}
        height={200}
        alt="product"
        className="rounded-md"
      />
      <span className="mr-24 mt-1">Library Stool Chair</span>
      <span className="mr-48 font-bold -mt-2">$20</span>
      <button className="py-2 px-2 bg-gray-200 rounded-md ml-48 -mt-14">
      <ShoppingCart />
      </button>
    </div>
  </div>
</div>

    
            
            

         
        </div>

    )
}
export default Hero