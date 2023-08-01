import React, { useState } from 'react';
import BreadCrumb from '../components/Restore/BreadCrumb';
import Meta from '../components/Restore/Meta';
import Color from "../components/Restore/Color";

const CompareProduct = () => {
  return (
    <>
        <Meta title={'So sánh sản phẩm'} />
        <BreadCrumb title='Compare Product' />
        <div className="compare-product-wrapper py-5 home-wrapper-2">
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className="compare-product-card position-relative">
                            <img src='images/cross.svg' alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image py-4">
                                <img src="images/giaymizuno.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">MORELIA SALA ELITE TF</h5>
                                <h6 className="price mb-3 mt-3">3.590.000 VNĐ</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Thương hiệu:</h5>
                                        <p>Mizuno</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Loại:</h5>
                                        <p>Giày đá bóng cỏ nhân tạo</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tình trạng:</h5>
                                        <p>Còn hàng</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                39
                                            </span>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>                       
                    </div>
                    <div className='col-3'>
                        <div className="compare-product-card position-relative">
                            <img src='images/cross.svg' alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image py-4">
                                <img src="images/giaymizuno4.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">MORELIA SALA ELITE TF</h5>
                                <h6 className="price mb-3 mt-3">3.590.000 VNĐ</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Thương hiệu:</h5>
                                        <p>Mizuno</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Loại:</h5>
                                        <p>Giày đá bóng cỏ nhân tạo</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tình trạng:</h5>
                                        <p>Còn hàng</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">
                                                39
                                            </span>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CompareProduct