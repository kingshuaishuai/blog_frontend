import * as LocalIcon from '@ant-design/icons';
import { createFromIconfontCN, HomeOutlined } from '@ant-design/icons';
import React, { CSSProperties } from 'react';
import { IconFontProps } from '@ant-design/icons/lib/components/IconFont';

type CommonIconProps = {
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
}

type AntIconProps = {
  type: string;
  className?: string;
  twoToneColor?: string
} & CommonIconProps

const AntIcon: React.FC<AntIconProps> = (props) => {
  const { type, ...rest } = props;
  return React.createElement(
    LocalIcon[type],
    {
      ...rest
    }
  )
}

AntIcon.defaultProps = {
  spin: false
}

const IconFont:React.SFC<IconFontProps> = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1932420_gv5s5pemjpp.js'
  ]
})

type IconProps = {
  iconfont?: boolean,
} & AntIconProps & IconFontProps;

const Icon: React.FC<IconProps> = (props) => {
  const { iconfont, className, twoToneColor, ...commonProps } = props;
  const antIconProps: AntIconProps = {
    className,
    twoToneColor,
    ...commonProps
  }

  return iconfont ? <IconFont { ...commonProps }/> : <AntIcon { ...antIconProps}/>;
}

Icon.defaultProps = {
  iconfont: false
}

export default Icon;
