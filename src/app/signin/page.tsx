import { signin, signup } from './actions'

export default function LoginPage() {
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
      {/*<Link href={'/auth/oauth'}>*/}
      {/*  <button>ぐーぐる</button>*/}
      {/*</Link>*/}
    </div>
  )
}
