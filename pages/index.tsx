import Head from 'next/head'
import { Button } from 'antd';
import Header from '../components/Header';

type HomeProps = {

}
const Home: React.FC<HomeProps> = (props) => {
  return (
    <div className="home">
      <Head>
        <title>home</title>
        
      </Head>
    </div>
  )
}

export default Home;
