import { signIn } from '@/lib/auth-client'
import { Button } from './ui/button'

export const OAuthButton = () => {
	return (
		<Button type="button" onClick={() => signIn.social({ provider: 'google' })}>
			Sign In with Google
		</Button>
	)
}
