import Head from 'next/head'
import { Button } from 'antd';

type ReadProps = {

}
const Column: React.FC<ReadProps> = (props) => {
  return (
    <div className="read">
      <Head>
        <title>column</title>
      </Head>
    </div>
  )
}

export default Column;
