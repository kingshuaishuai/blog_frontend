import Head from 'next/head'
import { Button } from 'antd';
import Header from '../components/Header';

type AboutProps = {

}
const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="home">
      <Head>
        <title>About</title>
      </Head>
      <Header defaultKey="about"/>
    </div>
  )
}

export default About;
