import { Space } from 'antd';
import Icon from './Icon';
import { CSSProperties } from 'react';

const IconText: React.FC<{icon: string, text: string | number, className?: string, style?: CSSProperties}> = ({icon, text, style, className}) => (
  <Space style={style} className={className}>
    <Icon type={icon}/>
    {text}
  </Space>
);

IconText.displayName = 'IconText';

export default IconText;
