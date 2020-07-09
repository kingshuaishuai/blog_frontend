import * as LocalIcon from '@ant-design/icons';
import { createFromIconfontCN, HomeOutlined } from '@ant-design/icons';
import React, { CSSProperties, ComponentType } from 'react';
import { IconFontProps } from '@ant-design/icons/lib/components/IconFont';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

type CommonIconProps = {
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
  className?: string;
}

type AntIconProps = {
  type: string;
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

type CustomIconFontProps = {
  component?: ComponentType<CustomIconComponentProps> 
} & CommonIconProps;

const IconFont:React.SFC<CustomIconFontProps> = createFromIconfontCN({
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
  const iconFontProps = {
    className,
    ...commonProps
  }

  return iconfont ? <IconFont { ...iconFontProps }/> : <AntIcon { ...antIconProps}/>;
}

Icon.defaultProps = {
  iconfont: false
}

export default Icon;
