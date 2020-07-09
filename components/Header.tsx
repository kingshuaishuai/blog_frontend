import Link from 'next/link';
import { Row, Col, Menu } from 'antd';
import Icon from './Icon';
import headerStyles from '../styles/components/Header.module.scss';

enum menuKeys {
  HOME = 'home',
  BLOG = 'blog',
  READ = 'read',
  OPEN_SOURCE = 'open-source',
  ABOUT = 'about'
}
type HeaderProps = {
  defaultKey: 'home' | 'blog' | 'read' | 'open-source' | 'about'
}

const Header: React.FC<HeaderProps> = (props) => {
  console.log(props);
  const { defaultKey } = props;
  return (
    <header className={headerStyles.container}>
      <Row className={headerStyles.content} align="middle" justify="space-between">
        <Col className={headerStyles.left} md={8}>
          <Link href="/">
            <span className={headerStyles.logo_wrapper}><Icon iconfont className={headerStyles.logo} type="icon-geekrole" /></span>
          </Link>
          <span className={headerStyles.slogan}>让追求极致刻于灵魂深处!</span>
        </Col>
        <Col className={headerStyles.right} flex={1}>
          <Menu defaultSelectedKeys={[defaultKey]} className={headerStyles.menu} mode="horizontal">
            <Menu.Item key={menuKeys.HOME}><Link href="/"><a><Icon type="HomeOutlined"/>首页</a></Link></Menu.Item>
            <Menu.Item key={menuKeys.BLOG}><Link href="/blog"><a><Icon type="icon-blog" iconfont />博客</a></Link></Menu.Item>
            <Menu.Item key={menuKeys.READ}><Link href="/read"><a><Icon type="ReadOutlined" />专栏</a></Link></Menu.Item>
            <Menu.Item key={menuKeys.OPEN_SOURCE}><Link href="/open-source"><a><Icon type="icon-repository" iconfont />开源项目</a></Link></Menu.Item>
            <Menu.Item key={menuKeys.ABOUT}><Link href="/about"><a><Icon type="InfoCircleOutlined" />关于</a></Link></Menu.Item>
          </Menu>
          {/* <div>注册</div>
          <div>登录</div> */}
        </Col>
      </Row>
    </header>
  )
}

Header.defaultProps = {
  defaultKey: 'home'
}

export default Header;
