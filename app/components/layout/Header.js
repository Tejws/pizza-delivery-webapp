import Link from "next/link";
export default function Header(){
    return(
        <>
         <header className="flex items-center justify-between">
      <Link className="flex text-red-600 font-semibold text-3xl"href="">ST Pizza</Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-400">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
       
      </nav>
      <nav className=" flex items-center gap-6 font-semibold text-gray-400">
      <Link href={'/login'}>Login</Link>
      <Link href={'/register'}className="bg-red-600 text-white rounded-full px-6 py-2">Register</Link>
      </nav>
    </header>
        </>
    )
}