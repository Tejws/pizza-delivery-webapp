import Image from "next/image" 
import Right from "@/app/components/icons/Right"
export default function Hero() {
    return(
        <>
        <section className="hero mt-4">
            <div className="py-12">
            <h1 className="text-8xl font-semibold my-25">Everything<br/> is better <br /> with a &nbsp;<span className="text-red-500">Pizza</span></h1>
            <p className="my-20 text-gray-400 text-4xl ">Pizza is the missing piece hat makes every day complete a simple yet delicious joy in life</p>
           <div className="flex gap-4 ">
            <button className="bg-red-500  flex gap-2 
            items-center text-white px-4 py-2 rounded-full font-semibold relative bottom-10"> Order More<Right/></button>
            <button className="flex gap-2 py-2 text-gray-600 font-semibold relative bottom-10">Learn More <Right /></button>
           </div>
           </div>
        
      
      <div className="relative my-20"> <Image src={'/pizza.png' } layout={'fill'} objectFit={'contain'} alt={'pizza'}/>
      </div>  </section>
        </>
    )
} 