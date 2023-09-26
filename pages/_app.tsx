import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/src/core/store/store';
import { Layout } from '@/src/ui/components';
import '@/src/ui/scss/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
 return (
  <Provider store={store}>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </Provider>
 );
};

export default App;
