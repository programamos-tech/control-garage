import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_HEADER = "x-next-locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  const locale = pathname.startsWith("/es") ? "es" : "en";
  const res = NextResponse.next();
  res.headers.set(LOCALE_HEADER, locale);
  return res;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
