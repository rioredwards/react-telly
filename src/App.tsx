import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
	createBrowserRouter,
	RouterProvider,
  } from 'react-router-dom'
import { HomePage, Lesson2 } from './pages'

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <HomePage/>,
	},
	{
		path: "/lesson-2",
		element: <Lesson2/>,
	  },
  ]);

function App() {
  return (
	  <QueryClientProvider client={queryClient}>
		<main>
		<RouterProvider router={router} />
		</main>
	  </QueryClientProvider>
  );
}

export default App;
