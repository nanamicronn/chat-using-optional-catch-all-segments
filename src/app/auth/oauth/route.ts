import { createServerComponentClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = createServerComponentClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  })

  if (error) {
    return NextResponse.json({ error: error.message })
  }

  return NextResponse.redirect(data.url) // GoogleのOAuth URLにリダイレクト
}
