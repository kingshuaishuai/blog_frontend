import { List, Space, Tag } from 'antd';
import IconText from './IconText';
import commonStyles from '@/styles/common/common.module.scss';

type PostListItemProps = {
  post: {
    id: number | string;
    title: string;
    description: string;
    cover_img: string;
    category: string;
    tags: Array<string>;
    public_date: string;
    author: string;
    star: number;
    read: number;
  }
}

const PostListItem: React.FC<PostListItemProps> = (props) => {
  const { post } = props;
  return (
    <List.Item
      extra={
        <div className={commonStyles.blog_cover}>
          <img src={post.cover_img} alt={post.title}/>
        </div>
      }
      actions={[
        <IconText icon="FireOutlined" text={post.read} />,
        <IconText icon="HeartOutlined" text={post.star} />,
      ]}
    >
      <List.Item.Meta
        title={
          <>
            <Tag color="blue">{post.category}</Tag>
            {post.title}
          </>
        } 
        description={
          <>
            <div style={{padding: '0.25rem 0'}}>
              <Space>
                <IconText icon="UserOutlined" text={post.author} />
                <IconText icon="icon-date" text={post.public_date} />
              </Space>
            </div>
            {post.description}
          </>
        } />
    </List.Item>
  )
}

PostListItem.displayName = 'PostListItem';

export default PostListItem;
