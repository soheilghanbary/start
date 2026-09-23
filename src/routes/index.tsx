import { call } from '@orpc/server'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { orpc } from '@/server/orpc/client'
import { helloProducer } from '@/server/orpc/router'

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => await call(helloProducer),
})

function Home() {
	const serverData = Route.useLoaderData()
	const { data: clientData } = useSuspenseQuery(orpc.hello.queryOptions())
	return (
		<div className="mx-auto max-w-md space-y-4 p-4">
			<ModeToggle />
			<h1 className="font-black text-4xl">Full-Stack Web Starter</h1>
			<p className="text-muted-foreground text-xs">
				This is a full-stack starter.
			</p>
			<Separator />
			<p className="font-medium text-muted-foreground text-xs">
				Response on Server:
			</p>
			<pre>{JSON.stringify(serverData, null, 2) || 'null'}</pre>
			<p className="font-medium text-muted-foreground text-xs">
				Response on Client:
			</p>
			<pre>{JSON.stringify(clientData, null, 2) || 'null'}</pre>
		</div>
	)
}
