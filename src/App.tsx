import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'

import { appTheme } from 'theme'
import Footer from 'containers/Footer'
import Header from 'containers/Header'
import Home from 'containers/Home/inedx'
import ListingDetail from 'containers/ListingDetail'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/spots/:id' element={<ListingDetail />}/>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
)

export default App
