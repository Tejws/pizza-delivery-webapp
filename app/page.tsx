import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import HomeMenu from "@/app/components/layout/HomeMenu";
import SectionHeaders from "@/app/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HomeMenu />
    <section className="text-center my-16 relative top-80">
      <SectionHeaders
      subHeader={'Our Story'}
      mainHeader={'About us'}/>
      <div className="max-w-md mx-auto mt-4 flex flex-col gap-4 text-gray-500">
      <p>
      
         Get in Touch

We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Our dedicated team is here to assist you.
        
         </p>
</div>
  
    </section>
    <section className="text-center my-8 relative top-80">
      <SectionHeaders subHeader={'Don\'t Hesitate'}
      mainHeader={'Contact us'}/>
      <a className="text-4xl" href="tel:+9307518851"></a>
      +93 07 51 88 51
    </section>
  
    </>
  );
}
