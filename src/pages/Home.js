import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Meta from '../components/Restore/Meta'
import BlogCard from '../components/HomeProduct/BlogCard'
import ProductCard from '../components/HomeProduct/ProductCard'
import SpecialProduct from '../components/HomeProduct/SpecialProduct'

const Home = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('hctab1');

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Meta title={'Trang chủ'} />
      <section className='home-wrapper-1 py-3'>
        <div className='container-xxl'>
          <img src="images/poster.jpg" alt="main banner" className='main_banner' />
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>Cho đơn hàng từ 1 triệu đồng </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Ưu đãi hằng ngày</h6>
                    <p className='mb-0'>Mua là có quà, giảm giá cực sâu</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Hỗ trợ 24/7</h6>
                    <p className='mb-0'>Nhân viên hỗ trợ tận tình</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Hỗ trợ trả góp</h6>
                    <p className='mb-0'>Lãi xuất 0%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Thanh toán đa dạng</h6>
                    <p className='mb-0'>Bảo mật thông tin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-title text-center'>SẢN PHẨM MỚI</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

        </div>
      </section >

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3' >
              <a href="/product">
                <img src="images/hb_img1.webp" alt="Index Banner Image 1" className="custom-img img-thumbnail" />
              </a>
            </div>
            <div className='col-6'>
              <a href="/product">
                <img src="images/hb_img2.webp" alt="Index Banner Image 1" className="custom-img img-thumbnail" />
              </a>
            </div>
            <div className='col-3'>
              <a href="/product">
                <img src="images/hb_img3.webp" alt="Index Banner Image 1" className="custom-img img-thumbnail" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-title text-center'>SẢN PHẨM NỔI BẬT</h3>
              <div className='hc-tabs-wrapper'>
                <div className='tab text-center'>
                  <button
                    className={`hc-tablinks ${activeTab === 'hctab1' ? 'active' : ''} mx-2`}
                    onClick={() => handleTabClick('hctab1')}
                  >
                    Thương Hiệu Nike
                  </button>

                  <button
                    className={`hc-tablinks ${activeTab === 'hctab2' ? 'active' : ''} mx-2`}
                    onClick={() => handleTabClick('hctab2')}
                  >
                    Thương Hiệu Mizuno
                  </button>
                  <button
                    className={`hc-tablinks ${activeTab === 'hctab3' ? 'active' : ''} mx-2`}
                    onClick={() => handleTabClick('hctab3')}
                  >
                    Thương Hiệu Kamito
                  </button>
                  <button
                    className={`hc-tablinks ${activeTab === 'hctab4' ? 'active' : ''} mx-2`}
                    onClick={() => handleTabClick('hctab4')}
                  >
                    Thương hiệu Puma
                  </button>
                </div>

                <div id='hctab1' className={`hc-tabcontent ${activeTab === 'hctab1' ? 'd-block' : ''}`}>
                  <div className='row'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
                <div id='hctab2' className={`hc-tabcontent ${activeTab === 'hctab2' ? 'd-block' : ''}`}>
                  <div className='row'>
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>

                <div id='hctab3' className={`hc-tabcontent ${activeTab === 'hctab3' ? 'd-block' : ''}`}>
                  <div className='row'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>

                <div id='hctab4' className={`hc-tabcontent ${activeTab === 'hctab4' ? 'd-block' : ''}`}>
                  <div className='row'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <h3 className='section-title text-center'>KHO ẢNH & VIDEO</h3>
          <div class="container text-center">
            <div class="row align-items-center mt-4">
              <div class="col image-col">
                <a href="images/hg_img_thumb1.webp">
                  <img className='img-thumbnail' src='images/hg_img_thumb1.webp' alt='Ảnh 1' />
                </a>
              </div>
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img_thumb2.webp' alt="Ảnh 1" />
              </div>
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img_thumb3.webp' alt="Ảnh 1" />
              </div>
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img_thumb4.webp' alt="Ảnh 1" />
              </div>
            </div>

            <div class="row align-items-center mt-4">
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img_thumb5.webp' alt="Ảnh 1" />
              </div>
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img6.webp' alt="Ảnh 1" />
              </div>
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img7.webp' alt="Ảnh 1" />
              </div>
              <div class="col image-col">
                <img className="img-thumbnail" src='images/hg_img8.webp' alt="Ảnh 1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='special-wrapper py-5 home-wrapper-2 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Sản phẩm hot</h3>
            </div>
          </div>
          <div className='row'>
            
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            
          </div>
        </div>
      </section> */}

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-title text-center'>Sản phẩm bán chạy</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-title text-center'>TIN TỨC NỔI BẬT</h3>
            </div>
            <div className='col-3'><BlogCard /></div>
            <div className='col-3'><BlogCard /></div>
            <div className='col-3'><BlogCard /></div>
            <div className='col-3'><BlogCard /></div>
          </div>
        </div>
      </section>

      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-5 w-30 custom-image-col'>
                    <img src="images/brand_img1.webp" alt="brand" />
                  </div>
                  <div className='mx-5 w-30 custom-image-col'>
                    <img src="images/brand_img2.webp" alt="brand" />
                  </div>
                  <div className='mx-5 w-30 custom-image-col'>
                    <img src="images/brand_img3.webp" alt="brand" />
                  </div>
                  <div className='mx-5 w-30 custom-image-col'>
                    <img src="images/brand_img4.webp" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home