import Head from 'next/head';
import Link from 'next/link';
import { Carousel, List, Empty, Row, Col, Radio } from 'antd';
import classNames from 'classnames';
import Icon from '@/components/Icon';
import homeStyles from '../styles/pages/home.module.scss';
import commonStyles from '@/styles/common/common.module.scss';
import { useRef } from 'react';

type HomeProps = {

}
const Home: React.FC<HomeProps> = (props) => {
  const carouselRef = useRef<Carousel>()
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
        <Col className={homeStyles.opensource_recommend} xs={24} sm={24} md={8}>
          <div className={homeStyles.opensource_item}>
            <img className={homeStyles.opensource_img} src="3.jpg"/>
            <div className={homeStyles.img_mask}></div>
          </div>
          <div className={homeStyles.opensource_item}>
            <img className={homeStyles.opensource_img} src="4.jpg"/>
            <div className={homeStyles.img_mask}></div>
          </div>
        </Col>
      </Row>
      <Row className={commonStyles.page}>
        <Col xs={24} sm={24} md={18} >
          <List 
            className={commonStyles.box}
            header="精选专栏"
            locale={{emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"/>}}
          />
          <List 
            className={commonStyles.box}
            header={
              <Radio.Group defaultValue="a" className="list-header-radio-group">
                <Radio.Button type="link" value="a">最新博客</Radio.Button>
                <Radio.Button type="link" value="b">最热博客</Radio.Button>
              </Radio.Group>
            }
            locale={{emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据"/>}}
          />
        </Col>
        <Col xs={0} sm={0} md={6}>
          <div className={commonStyles.right_box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quo, possimus dicta, omnis consequatur quibusdam repellat voluptatibus doloribus laudantium inventore vitae dolore. Temporibus atque, quis hic inventore optio voluptas aspernatur.
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Home;
