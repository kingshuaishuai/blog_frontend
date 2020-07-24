import Head from 'next/head'
import { Button } from 'antd';
import Header from '../../../components/Header';

type BlogProps = {

}
const Post: React.FC<BlogProps> = (props) => {
  return (
    <div className="post">
      <Head>
        <title>blog</title>
      </Head>
      post id
    </div>
  )
}

export default Post;
