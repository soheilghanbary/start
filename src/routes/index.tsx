import { call } from '@orpc/server'
import { createFileRoute } from '@tanstack/react-router'
import { helloProducer } from '@/server/orpc/router'

export const Route = createFileRoute('/')({
	component: Home,
	loader: async () => {
		return await call(helloProducer)
	},
})

function Home() {
	const data = Route.useLoaderData()
	return (
		<div>
			<h1>Hello World</h1>
			<button type="button" onClick={() => alert('clicked')}>
				Click me
			</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
