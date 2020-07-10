import Link from 'next/link';
import { Row, Col, Menu, Popover } from 'antd';
import classNames from 'classnames';
import Icon from './Icon';
import { useWindowWidth } from '../hooks/useWindowWidth';
import headerStyles from '@/styles/components/Header.module.scss';
import { MenuMode } from 'antd/lib/menu';

enum menuKeys {
  HOME = 'home',
  BLOG = 'blog',
  READ = 'read',
  OPEN_SOURCE = 'open-source',
  ABOUT = 'about'
}

export type MenuKeys = 'home' | 'blog' | 'read' | 'open-source' | 'about';

type MenuCompProps = {
  defaultKey: MenuKeys;
  mode: MenuMode,
  className?: string
}

const MenuComp: React.FC<MenuCompProps> = (props) => {
  const { defaultKey, mode, className } = props;
  const classes = classNames(className, headerStyles.menu)
  return (
    <Menu overflowedIndicator={<Icon type="MenuOutlined" />} defaultSelectedKeys={[defaultKey]} className={classes} mode={mode}>
      <Menu.Item key={menuKeys.HOME}><Link href="/" passHref><a><Icon type="HomeOutlined"/>首页</a></Link></Menu.Item>
      <Menu.Item key={menuKeys.BLOG}><Link href="/blog" passHref><a><Icon type="icon-blog" iconfont />博客</a></Link></Menu.Item>
      <Menu.Item key={menuKeys.READ}><Link href="/read" passHref><a><Icon type="ReadOutlined" />专栏</a></Link></Menu.Item>
      <Menu.Item key={menuKeys.OPEN_SOURCE}><Link href="/open-source" passHref><a><Icon type="icon-repository" iconfont />开源项目</a></Link></Menu.Item>
      <Menu.Item key={menuKeys.ABOUT}><Link href="/about" passHref><a><Icon type="InfoCircleOutlined" />关于</a></Link></Menu.Item>
    </Menu>
  )
}

type HeaderProps = {
  defaultKey: 'home' | 'blog' | 'read' | 'open-source' | 'about'
}

const Header: React.FC<HeaderProps> = (props) => {
  console.log(props);
  const { defaultKey } = props;
  const { windowWidth } = useWindowWidth();
  return (
    <header className={headerStyles.container}>
      <Row align="middle"  className={headerStyles.content}>
        {
          windowWidth < 768 && 
            <Popover 
              overlayClassName="unordered_popover"
              placement="bottomRight"
              content={
                <MenuComp className={headerStyles.vertical_menu} defaultKey={defaultKey} mode="vertical" />
              }
              trigger="click"
            >
              <Icon className={headerStyles.unordered_list} type="UnorderedListOutlined"/>
            </Popover>
        }
        <Col className={headerStyles.left} xs={24} sm={24} md={7}>
          <Link href="/">
            <img className={headerStyles.logo} src="/Logo.svg" alt="Geekrole"/>
          </Link>
          <div className={headerStyles.slogan}>让追求极致刻于灵魂深处!</div>
        </Col>
        <Col className={headerStyles.right} xs={0} sm={0} md={17}>
          {
            windowWidth >= 768 && <MenuComp defaultKey={defaultKey} mode="horizontal" />
          }
        </Col>
      </Row>
    </header>
  )
}

Header.defaultProps = {
  defaultKey: 'home'
}

export default Header;
