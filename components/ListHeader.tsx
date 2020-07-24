import Link from 'next/link';
import { Tabs } from 'antd';

type ListHeaderProps = {
  categories: Array<{key: string, tab: string}>, 
  onChange: (activeKey: string) => void,
  extraLink: string,
  defaultKey?: string,
}
const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const { categories, defaultKey, extraLink, onChange } = props;
  return (
    <Tabs defaultActiveKey={defaultKey || categories[0]?.key || ''} onChange={onChange} tabBarExtraContent={extraLink && <Link href={extraLink} passHref><a>更多</a></Link>}>
      {
        categories.map(item => (
          <Tabs.TabPane tab={item.tab} key={item.key} />
        ))
      }
    </Tabs>
  )
}
ListHeader.displayName = 'ListHeader';

export default ListHeader;
