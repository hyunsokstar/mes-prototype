// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store";
// import 'antd/dist/antd.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default wrapper.withRedux(MyApp)
