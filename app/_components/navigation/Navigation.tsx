"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/app/libs/utils"
import Link from "next/link"

const items = [
 {
   title: "BLOG",
   href: "/blog",
 },
]

const Navigation = () => {
 const pathname = usePathname()

 return (
   <header className="bg-black">
     <div className="mx-auto max-w-screen-lg px-2">
       <div className="flex items-center justify-between text-2xl font-bold">
         {items.map((item, index) => (
           <Link
             key={index}
             href={item.href}
             className="py-3 text-center w-full text-white"
           >
             {item.title}
           </Link>
         ))}
       </div>
     </div>
   </header>
 )
}

export default Navigation