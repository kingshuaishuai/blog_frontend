import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/common/index.scss';

const App: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  console.log('page props', pageProps);
  return (
    <Component {...pageProps} />
  )
}

export default App;
