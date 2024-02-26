import Image from "next/image" 
import MenuItem from "/app/menu/MenuItem"
import SectionHeaders from "@/app/components/layout/SectionHeaders";
export default function HomeMenu(){

    return(
        <section className="">
            <div className="absolute  left-0 right-0 w-full justify-start">
            <div className="absolute left-0 justify-start -top-[120px] text-left -z-10">
                <Image src={'/sallad1.png'} width={500} height={300} alt={'sallad'}/>
            </div>
            <div className="absolute -top-40 right-0 -z-10 ">
                <Image src={'/sallad2.png'} width={500} height={300} alt={'sallad'}/>
            </div>
            </div>
        <div className="text-center mb-4">

            {/* <h3 className="uppercase text-gray-500 text-m font-semibold leading-4 relative left-5 top-60" >Check Out</h3>
            <h2 className="text-red-500 font-bold text-6xl italic relative left-4 top-60">Menu</h2>
         */}
         <div className="relative top-60"><SectionHeaders  subHeader={'Check out '}
         mainHeader={'Menu'} />
        </div>
        </div>
        <div className="grid grid-cols-5 gap-4 relative top-80 justify-center  items-center max-width: 768px">
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
           <MenuItem/>
           
        </div>
        </section>
    )
}