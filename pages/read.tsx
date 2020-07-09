import Head from 'next/head'
import { Button } from 'antd';
import Header from '../components/Header';

type ReadProps = {

}
const Read: React.FC<ReadProps> = (props) => {
  return (
    <div className="read">
      <Head>
        <title>open source</title>
      </Head>
      <Header defaultKey="read"/>
    </div>
  )
}

export default Read;
