import { call } from '@orpc/server'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { cn } from 'cn'
import { Fragment } from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { OAuthButton } from '@/components/oauth-button'
import { buttonVariants } from '@/components/ui/button'
import { appConfig } from '@/config'
import { useSession } from '@/lib/auth/client'
import { orpc } from '@/lib/orpc/client'
import { helloProducer } from '@/lib/orpc/router'

const GITHUB_REPO_URL = 'https://github.com/soheilghanbary/start'
const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${appConfig.name} ${appConfig.version} - Soheil Ghanbary`

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => await call(helloProducer),
})

function Home() {
	const serverData = Route.useLoaderData()
	const { data: clientData } = useSuspenseQuery(orpc.hello.queryOptions())
	const session = useSession()

	return (
		<section className="flex size-full h-dvh items-center justify-center">
			<div className="mx-auto w-full max-w-md animate-blurred-fade-in animate-duration-400 space-y-4 p-4">
				<ModeToggle />
				<h1 className="font-black text-4xl">
					<span>{appConfig.name}</span>
				</h1>
				<p className="font-normal text-base">{appConfig.description}</p>
				<div className="grid grid-cols-2 gap-x-2">
					<a href={GITHUB_REPO_URL} className={cn(buttonVariants(), 'w-full')}>
						Get Started
					</a>
					<OAuthButton />
				</div>
				<p className="text-muted-foreground text-xs">{COPYRIGHT_TEXT}</p>
				<div className="flex items-center justify-between">
					<p className="text-muted-foreground text-xs">
						Mode:{' '}
						<span className="font-medium text-primary underline decoration-wavy underline-offset-3">
							{process.env.NODE_ENV}
						</span>
					</p>
					<ModeToggle />
				</div>
				<div className="rounded-2xl border bg-muted p-4 font-medium text-muted-foreground text-xs/5 dark:bg-card [&>span]:text-foreground">
					<span>Response on Server:</span>
					<pre>{JSON.stringify(serverData) || 'null'}</pre>
					<hr className="my-2" />
					<span>Response on Client:</span>
					<pre>{JSON.stringify(clientData) || 'null'}</pre>
					{session.data ? (
						<Fragment>
							<hr className="my-2" />
							<p className="font-medium text-foreground">
								Hello {session.data?.user.name}
							</p>
						</Fragment>
					) : (
						<p className="mt-2">User is not signed in</p>
					)}
				</div>
			</div>
		</section>
	)
}
