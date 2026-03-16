import { NextRequest, NextResponse } from 'next/server';

/**
 * OAuth callback route for Supabase auth
 * Handles the redirect after OAuth authentication
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/auth/login?error=no_code', request.url));
  }

  try {
    // Exchange the code for a session
    // This would typically involve calling your backend API
    // or Supabase auth endpoint directly

    // For now, we'll redirect to the dashboard
    // In production, you'd validate the code and create a session
    const response = NextResponse.redirect(new URL('/dashboard', request.url));

    // Set auth cookie here if needed
    // response.cookies.set('auth_token', token, { httpOnly: true });

    return response;
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(new URL('/auth/login?error=callback_failed', request.url));
  }
}
