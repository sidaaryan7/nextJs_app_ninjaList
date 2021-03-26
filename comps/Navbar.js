import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
    <nav>
        <div className="logo">
            <Image src="/logo.png" width={128} height={77}/>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/contact"><a>contact</a></Link>
        
        <Link href="/Ninjas"><a>Ninja Listing</a></Link>
        
        
        


    </nav>  );
}
 
export default Navbar;