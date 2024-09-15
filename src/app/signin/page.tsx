import { createServerComponentClient } from '@/utils/supabase/server'
import { signin, signup } from './actions'

export default function LoginPage() {
  const onClick = async () => {
    const supabase = createServerComponentClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signin}>Sign in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <button onClick={onClick}>ぐーぐる</button>
    </div>
  )
}
