import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
// React Router DOM
import { BrowserRouter } from 'react-router-dom'
// React Query
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient(
    {
        defaultOptions: {
            queries: {
                staleTime: 1000 * 10,
                gcTime: 1000
            }
        }
    }
);
// Redux Toolkit Provider and Store
import { Provider } from 'react-redux'
import { store } from './redux/store'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <App />
            </Provider>
        </QueryClientProvider>
    </BrowserRouter>
)
