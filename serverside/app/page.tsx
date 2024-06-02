import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/products"}>All Products</Link>
      {/* <Link href={"/add"}>Add New Product</Link> */}
    </main>
  );
}
