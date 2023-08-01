import React from 'react'
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import BlogCard from '../components/HomeProduct/BlogCard';

const Blog = () => {
  return(
  <>
    <section id="breadcrumb-wrapper3" class="breadcrumb-w-img">
        <div className="breadcrumb-overlay"></div>
            <div className="breadcrumb-content">
                <div className="wrapper">
                    <div className="inner text-center" style={{color:'white'}}>
                        <div className="breadcrumb-big">
                            <h2>Tin tức giày</h2> 
                        </div>
                        <div className="breadcrumb-small">
                            <a href="/" title="Quay trở về trang chủ" style={{color:'white'}}>Trang chủ</a>
                            <span aria-hidden="true">/</span>
                            <span>Tin tức giày</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Danh mục bài viết</h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Giày đá bóng</li>
                                <li>Quần áo đá bóng</li>
                                <li>Quả bóng</li>
                                <li>Phụ kiện</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                        <div className='col-6 mb-3'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
  )
}

export default Blog