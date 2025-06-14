import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="">
            <div>
                <Link href="/">Woven</Link>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/checkout">Checkout</Link>
            </div>
            <div>
                
            </div>
        </nav>
    )
}