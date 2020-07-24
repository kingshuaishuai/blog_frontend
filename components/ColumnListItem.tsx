import { List } from 'antd';
import IconText from './IconText';
import commonStyles from '@/styles/common/common.module.scss';

type ColumnListItemProps = {
  column: {
    id: number | string;
    title: string;
    description: string;
    cover_img: string;
    category: string;
    author: string;
  }
}

const ColumnListItem: React.FC<ColumnListItemProps> = (props) => {
  const { column } = props;
  return (
    <List.Item
      extra={
        <div className={commonStyles.column_cover}>
          <img src={column.cover_img} alt={column.title} />
        </div>
      }
    >
      <List.Item.Meta 
        title={column.title}
        description={
          <>
            <IconText style={{ marginBottom: '0.25rem' }} icon="UserOutlined" text={column.author}></IconText>
            <div>{column.description}</div>
          </>
        }
      />
    </List.Item>
  )
}

ColumnListItem.displayName = 'ColumnListItem';

export default ColumnListItem;