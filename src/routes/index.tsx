import { call } from '@orpc/server'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { OAuthButton } from '@/components/oauth-button'
import { Separator } from '@/components/ui/separator'
import { useSession } from '@/lib/auth-client'
import { orpc } from '@/orpc/client'
import { helloProducer } from '@/orpc/router'

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => await call(helloProducer),
})

function Home() {
	const serverData = Route.useLoaderData()
	const { data: clientData } = useSuspenseQuery(orpc.hello.queryOptions())
	const session = useSession()

	return (
		<div className="mx-auto max-w-md space-y-4 p-4">
			<ModeToggle />
			<h1 className="font-black text-4xl">Full-Stack Web Starter</h1>
			<p className="text-muted-foreground text-xs">
				This is a full-stack starter.
			</p>
			<Separator />
			<OAuthButton />
			<div className="rounded-2xl border bg-muted p-4 font-medium text-muted-foreground text-xs/5 [&>span]:text-foreground">
				<span>Response on Server:</span>
				<pre>{JSON.stringify(serverData) || 'null'}</pre>
				<hr className="my-2" />
				<span>Response on Client:</span>
				<pre>{JSON.stringify(clientData) || 'null'}</pre>
				{session.data && (
					<Fragment>
						<hr className="my-2" />
						<p className="font-medium text-foreground">
							Hello {session.data?.user.name}
						</p>
					</Fragment>
				)}
			</div>
		</div>
	)
}
