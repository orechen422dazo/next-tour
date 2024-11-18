// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isAuthenticated = () => {
  return true
}

const protectedRoutes = ['/home']
const publicRoutes = ['/', '/about']

// not-foundページ自体はチェックから除外する必要があります
const systemRoutes = ['/not-found']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 画像やその他の静的ファイルへのアクセスはスキップ
  if (pathname.startsWith('/assets/') || 
      pathname.startsWith('/_next/') || 
      pathname.includes('.')) {
    return NextResponse.next()
  }

  // システムルートはチェックをスキップ
  if (systemRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // 404ページの処理
  const validRoutes = [...protectedRoutes, ...publicRoutes]
  if (!validRoutes.includes(pathname)) {
    // not-foundページを表示
    return NextResponse.rewrite(new URL('/not-found', request.url))
  }

  // 認証が必要なルートのチェック
  if (protectedRoutes.includes(pathname)) {
    const isAuthed = isAuthenticated()
    
    if (!isAuthed) {
      return NextResponse.redirect(new URL('/about', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // 静的ファイルと API ルートを除外
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ]
}