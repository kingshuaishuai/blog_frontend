import Head from 'next/head';
import Link from 'next/link';
import { Carousel, List, Empty, Row, Col, Radio, Card, Tabs, Avatar, Tag, Space, Divider } from 'antd';
import classNames from 'classnames';
import Icon from '@/components/Icon';
import homeStyles from '../styles/pages/home.module.scss';
import commonStyles from '@/styles/common/common.module.scss';
import { useRef, useState, CSSProperties } from 'react';

type HomeProps = {

}

const IconText: React.FC<{icon: string, text: string | number, className?: string, style?: CSSProperties, iconfont?: boolean}> = ({icon, text, style, className, iconfont}) => (
  <Space style={style} className={className}>
    <Icon type={icon} iconfont={iconfont}/>
    {text}
  </Space>
);

IconText.defaultProps = {
  iconfont: false
}

const Home: React.FC<HomeProps> = (props) => {
  const carouselRef = useRef<Carousel>();

  const columnList = [
    {
      id: 0,
      title: 'TS + Next.js实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '4.jpg',
      category: '前端',
      author: 'kingShuaishuai'
    },
    {
      id: 2,
      title: 'TS + Next.js9.4 + Apollo实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '3.jpg',
      category: '前端',
      author: 'kingShuaishuai'
    },
    {
      id: 3,
      title: 'TS + Next.js9.4 + Apollo实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '5.jpg',
      category: '前端',
      author: 'kingShuaishuai'
    }
  ]
  const columnCategories = [
    {
      key: 'hot',
      tab: '热门专栏'
    },
    {
      key: 'new',
      tab: '最新专栏'
    }
  ]

  const blogCategories = [
    {
      key: 'new',
      tab: '最新博客'
    },
    {
      key: 'hot',
      tab: '热门博客'
    }
  ]
  const [columnKey, setColumnKey] = useState('hot');
  const [blogKey, setBlogKey] = useState('new');

  const postList = [
    {
      id: 0,
      title: 'TS + Next.js9.4 + Apollo实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '1.jpg',
      category: '前端',
      tags: ['next.js', 'typescript', 'graphql', 'apollo', 'ssr', '博客'],
      public_date: '2020-07-20 10:00:10',
      author: '一帅同学',
      star: 1000,
      read: 20000,
    },
    {
      id: 1,
      title: 'TS + Next.js9.4 + Apollo实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '3.jpg',
      category: '前端',
      tags: ['next.js', 'typescript', 'graphql', 'apollo', 'ssr', '博客'],
      public_date: '2020-07-20 10:00:10',
      author: '一帅同学',
      star: 1000,
      read: 20000,
    },
    {
      id: 2,
      title: 'TS + Next.js9.4 + Apollo实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '4.jpg',
      category: '前端',
      tags: ['next.js', 'typescript', 'graphql', 'apollo', 'ssr', '博客'],
      public_date: '2020-07-20 10:00:10',
      author: '一帅同学',
      star: 1000,
      read: 20000,
    },
    {
      id: 3,
      title: 'TS + Next.js9.4 + Apollo实战博客前端页面',
      description: '本专栏通过介绍Typescript + Next.js9.4 + Apollo带领各位希望实战博客前端页面',
      cover_img: '5.jpg',
      category: '前端',
      tags: ['next.js', 'typescript', 'graphql', 'apollo', 'ssr', '博客'],
      public_date: '2020-07-20 10:00:10',
      author: '一帅同学',
      star: 1000,
      read: 20000,
    }
  ]
  const handleColumnChange = (val) => {
    console.log('change', val)
  }
  const author = {
    avatar: 'avatar.png',
    username: '一帅同学',
    description: '不做cv搬运工，不是自己的cv过来还是别人的.',
    tags: [
      { color: 'magenta', value: '月亮不睡我不睡'},
      { color: 'volcano', value: '我是秃头小宝贝'},
      { color: 'red', value: '红红'},
      { color: 'orange', value: '火火'},
      { color: 'gold', value: '前端'},
      { color: 'lime', value: '全栈'},
      { color: 'green', value: 'vue'},
      { color: 'blue', value: 'react'},
      { color: 'cyan', value: '呕吼'},
      { color: 'geekblue', value: 'geekrole'},
      { color: 'purple', value: '紫色'}
    ],
    contact: [
      {
        channel: 'github',
        icon: 'GithubOutlined',
        link: ''
      },
      {
        channel: 'qq',
        icon: 'QqOutlined',
        link: ''
      },
      {
        channel: 'wechat',
        icon: 'WechatOutlined',
        link: ''
      }
    ]
  }
  return (
    <>
      <Head>
        <title>GeekRole</title>
      </Head>
      <Row className={commonStyles.page}>
        <Col className={homeStyles.banner} xs={24} sm={24} md={16}>
          <Carousel ref={carouselRef} className={homeStyles.carousel}  dots={{className: 'carousel_dots'}} easing="ease-in-out">
            <div className={homeStyles.carousel_item}>
              <Link href="/">
                <img className={homeStyles.carousel_img} src="1.jpg" alt=""/>
              </Link>
              <div className={homeStyles.carousel_info}>
                <h3 className={homeStyles.carousel_title}>手把手教你搭建博客</h3>
                <p className={homeStyles.carousel_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit nam numquam ad ut beatae provident ipsam, officia culpa placeat illo blanditiis. Facilis enim maiores voluptatum nulla, dolore ratione deserunt.</p>
              </div>
            </div>
            
            <img className={homeStyles.carousel_item} src="2.png" alt=""/>
            <img className={homeStyles.carousel_item} src="3.jpg" alt=""/>
            <img className={homeStyles.carousel_item} src="4.jpg" alt=""/>
            <img className={homeStyles.carousel_item} src="5.jpg" alt=""/>
          </Carousel>
          <span onClick={() => carouselRef.current.prev()} className={classNames(homeStyles.carousel_control, homeStyles.carousel_control_left)}>
            <Icon type="icon-enter" rotate={180} iconfont/>
          </span>
          <span onClick={() => carouselRef.current.next()} className={classNames(homeStyles.carousel_control, homeStyles.carousel_control_right)}>
            <Icon type="icon-enter" iconfont/>
          </span>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <h3 className={homeStyles.opensource_title}>精选开源</h3>
          <div className={homeStyles.opensource_recommend}>
            <div className={homeStyles.opensource_item}>
              <img className={homeStyles.opensource_img} src="3.jpg"/>
              <div className={homeStyles.img_mask}></div>
            </div>
            <div className={homeStyles.opensource_item}>
              <img className={homeStyles.opensource_img} src="4.jpg"/>
              <div className={homeStyles.img_mask}></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={commonStyles.page}>
        <Col xs={24} sm={24} md={18} >
          <List
            itemLayout="vertical"
            dataSource={columnList}
            className={classNames(commonStyles.box, 'common-list', 'column-list')}
            header={
              <Tabs defaultActiveKey={columnKey} onChange={handleColumnChange} tabBarExtraContent={<Link href="/column" passHref><a>更多</a></Link>}>
                {
                  columnCategories.map(item => (
                    <Tabs.TabPane tab={item.tab} key={item.key} />
                  ))
                }
              </Tabs>
            }
            locale={{emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"/>}}
            renderItem={column => (
              <List.Item
                key={column.id}
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
            )}
          />
          <List
            itemLayout="vertical"
            className={classNames(commonStyles.box, 'common-list', 'blog-list')}
            header={
              <Tabs defaultActiveKey={blogKey} onChange={handleColumnChange} tabBarExtraContent={<Link href="/blog" passHref><a>更多</a></Link>}>
                {
                  blogCategories.map(item => (
                    <Tabs.TabPane tab={item.tab} key={item.key} />
                  ))
                }
              </Tabs>
            }
            dataSource={postList}
            renderItem={
              post => (
                <List.Item
                  key={post.id}
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
                            <IconText icon="icon-date" iconfont text={post.public_date} />
                          </Space>
                        </div>
                        {post.description}
                      </>
                    } />
                </List.Item>
              )
            }
            locale={{emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"/>}}
          />
        </Col>
        <Col xs={0} sm={0} md={6}>
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
                  <Icon type={item.icon}/>
                ))
              }
            </Space>
          </div>
          
        </Col>
      </Row>
    </>
  )
}

export default Home;
