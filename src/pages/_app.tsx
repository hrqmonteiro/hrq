import '../styles/globals.css'
import 'windi.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme='light' disableTransitionOnChange={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp