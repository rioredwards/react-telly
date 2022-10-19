import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HomePage } from './pages/home/home'

const queryClient = new QueryClient()

function App() {
  return (
	  <QueryClientProvider client={queryClient}>
		<main>
			<HomePage />
		</main>
	  </QueryClientProvider>
  );
}

export default App;
