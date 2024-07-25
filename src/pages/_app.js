// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import '@/styles/globals.css';
import Layout from '../components/layout';
import { TranslationProvider } from '@/context';

export default function App({ Component, pageProps }) {
  return (
    <TranslationProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </TranslationProvider>
  );
}