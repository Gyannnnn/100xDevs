// export { auth as middleware } from "@/auth"


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";


const protectedRoutes = ["/middleware"];

export default async function middleware(req: NextRequest){
    const session = await auth();

    const isprotected = protectedRoutes.some((route)=>{
       return req.nextUrl.pathname.startsWith(route)
    })

    if(!session && isprotected){
        const absoluteUrl =  new URL("/", req.nextUrl.origin)
        return NextResponse.redirect(absoluteUrl);

        
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}