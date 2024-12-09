import { Check, ChevronDown, CircleAlert } from "lucide-react";


function Topbar(){
    return(
        <div className="w-full p-3 bg-indigo-900  hidden md:flex justify-center items-center ">
            <div className="max-w-7xl mx-auto flex justify-between  gap-2 ml-24">
            <Check color="#e9e2e2" />
                <p className="text-white ">Free shipping on all orders over $50</p>
            </div>
            <div className="text-white flex mr-24 space-x-5">
                <p className="flex">
                    Eng
                <ChevronDown />
            </p>
                <p>Faqs</p>
                <p className="flex">
                <CircleAlert />
                    Need Help</p>
            </div>
               
        </div>
    )
}
export default Topbar;