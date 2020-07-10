import Head from 'next/head'
import { Button } from 'antd';
import Header from '../components/Header';

type OpenSourceProps = {

}
const OpenSource: React.FC<OpenSourceProps> = (props) => {
  return (
    <div className="open-source">
      <Head>
        <title>open source</title>
      </Head>
    </div>
  )
}

export default OpenSource;
