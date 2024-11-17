import Link from "next/link";

export default function Home() {
  console.log('home page call')

  return (
    <div>
      <h1>Start Page</h1>
      <Link href='/about' >go to about</Link>
    </div>
  );
}
