import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header, { MenuKeys } from '@/components/Header';
import 'antd/dist/antd.css';
import '@/styles/base/index.scss';
import { navRoutes } from '@/utils/helper';

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  let baseRoute = router.pathname.slice(1).split('/')[0];
  if (baseRoute === '') {
    baseRoute = 'home';
  }
  console.log('baseRoute is: ', baseRoute);
  return (
    <>
      {navRoutes.includes(baseRoute) && <Header defaultKey={baseRoute as MenuKeys} />}
      <main className="main-area">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App;
