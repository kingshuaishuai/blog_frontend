import Head from 'next/head'
import { Button } from 'antd';
import Header from '../../components/Header';

type BlogProps = {

}
const Blog: React.FC<BlogProps> = (props) => {
  return (
    <div className="blog">
      <Head>
        <title>blog</title>
      </Head>
    </div>
  )
}

export default Blog;
