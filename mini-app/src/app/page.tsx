// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import Link from "next/link";
import ButtonRedirect from "./components/ButtonRedirect";
import { redirect } from "next/navigation";


const isAuth = false;
export default function Home() {
  if(!isAuth){
    return (
     redirect('/login') // có thể được gọi ben trong client component và nó sẽ ko chạy trong event handler
    )
  }
  return (
    <main>
    <ul>
      <li>
        <Link href={'/login'}>Login</Link>
      </li>
      <li>
        <Link href={'/register'}>Register</Link>
      </li>
    </ul>
    <ButtonRedirect />
    </main>
  );
}
