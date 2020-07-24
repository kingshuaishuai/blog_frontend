import { Avatar, Space, Divider, Tag } from 'antd';
import classNames from 'classnames';
import commonStyles from '@/styles/common/common.module.scss';
import Icon from './Icon';

type AuthorCardProps = {
  author: {
    avatar: string;
    username: string;
    description: string;
    tags: Array<{color: string, value: string}>;
    contact: Array<{channel: string, icon: string, link: string}>
  }
};
const AuthorCard: React.FC<AuthorCardProps> = (props) => {
  const { author } = props;
  return (
    <div className={classNames(commonStyles.right_box, commonStyles.author_info)}>
      <Avatar src={author.avatar} size={96} />
      <h4 style={{marginTop: '12px'}}>{author.username}</h4>
      <p style={{textAlign: 'center', color: '#999'}}>{author.description}</p>
      <Space className={commonStyles.tags}>
        <Icon type="TagsOutlined" />
        {author.tags.map(tag => <Tag key={tag.value} color={tag.color}>{tag.value}</Tag>)}
      </Space>
      <Divider>联系方式</Divider>
      <Space style={{fontSize: '1.2rem'}}>
        {
          author.contact.map(item => (
            <Icon key={item.channel} type={item.icon}/>
          ))
        }
      </Space>
    </div>
  )
}

AuthorCard.displayName = 'AuthorCard';

export default AuthorCard;
