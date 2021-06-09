import type { AppProps } from 'next/app'
import '@fontsource/inter'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
    return <Component {...pageProps} />
}

export default MyApp
