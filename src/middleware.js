// app/middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    if (!token || token.role !== "admin") {
      console.log(token);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else if (pathname.startsWith("/SIB")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/SIB/:path*"],
};