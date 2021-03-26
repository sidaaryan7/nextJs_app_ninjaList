import Link from "next/link";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>OOoooopsss.....</h1>
            <h2>the page cannot be found</h2>
            <p>go back to the <Link href="/"><a>Home</a> </Link></p>
        </div>
     );
}
 
export default NotFound;