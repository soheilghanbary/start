import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { routeTree } from './routeTree.gen'

export function getRouter() {
	const queryClient = new QueryClient()
	const router = createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: 'intent',
	})

	setupRouterSsrQueryIntegration({
		router,
		queryClient,
		// optional:
		// handleRedirects: true,
		// wrapQueryClient: true,
	})

	return router
}
