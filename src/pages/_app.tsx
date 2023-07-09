import NextNProgress from 'nextjs-progressbar'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from '@/store/store'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress
				color='#29d'
				startPosition={0.4}
				stopDelayMs={200}
				height={2}
				showOnShallow={true}
				options={{ easing: 'ease', speed: 500 }}
			/>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</Provider>
		</>
	)
}
