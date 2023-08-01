import React from 'react'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import Marquee from 'react-fast-marquee'
const RefundPolicy = () => {
  return (
    <>
        <section id="breadcrumb-wrapper5" class="breadcrumb-w-img">
            <div className="breadcrumb-overlay"></div>
            <div className="breadcrumb-content">
                <div className="wrapper">
                    <div className="inner text-center">
                        <div className="breadcrumb-big">
                            <h2>Cách chọn size giày</h2> 
                        </div>
                        <div className="breadcrumb-small">
                            <a href="/" title="Quay trở về trang chủ" style={{color:'white'}}>Trang chủ</a>
                            <span aria-hidden="true">/</span>
                            <span>Chính sách đổi trả</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='policy-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <h3 className='wrapper_h3'>
                                CHÍNH SÁCH ĐỔI TRẢ
                            </h3>
                            <div>
                                <p className='mt-3'>&nbsp;</p>
                                <h5 className='section-title text-center'>
                                    <em>QUY TRÌNH ĐỔI SIZE ĐỔI MẪU</em>
                                </h5>
                                <p>
                                    <strong>1.Cửa hàng NVD Sport hỗ trợ đổi size đổi mẫu cho khách hàng đặt hàng trong vòng 7 ngày, trong các trường hợp sau đây:</strong>
                                </p>
                                <ul>
                                    <li>Sản phẩm không vừa size.</li>
                                    <li>Sản phẩm không đúng như đã đặt hàng.</li>
                                    <li>Sản phẩm có lỗi do nhà sản xuất.</li>
                                    <li>Bạn muốn đổi sang mẫu khác.</li>
                                </ul>
                                <p>
                                    <em>
                                        <span>
                                            <u>Lưu ý:</u>
                                        </span>
                                    </em>
                                </p>
                                <ul>
                                    <li>Cửa hàng chỉ đổi với những sản phẩm chưa dùng để chơi bóng, chỉ được xỏ giày, đi lại trong nhà tại những nơi sạch sẽ.</li>
                                    <li>
                                        Khi bạn đổi qua mẫu giày có giá tiền thấp hơn, số tiền chênh lệch sẽ được trừ trực tiếp vào hóa đơn mua hàng lần tới của bạn.
                                         Cửa hàng không áp dụng trả lại tiền chênh lệch bằng bất kỳ hình thức nào
                                    </li>
                                    <li>Cửa hàng không hỗ trợ khách trả hàng, trả cọc nếu khách không ưng ý sản phẩm.</li>
                                </ul>
                                
                                <strong>2.Bạn gửi hàng đỗi địa chỉ sau đây:</strong>
                                <ul>
                                    <li>Địa chỉ: Số 14 đường 25A, phường Tân Quy, Quận 7, Tp Hồ Chí Minh</li>
                                    <li>Số điện thoại: 033608xxxx</li>
                                    <li>Người nhận: NVD Sport.</li>
                                    <ul>
                                        <span>
                                            Khách hàng chịu trách nhiệm về sự nguyên vẹn của sản phẩm khi gửi lại cho cửa hàng 
                                            (chúng tôi khuyến khích bạn giữ lại hộp trong hộp ngoài của giày), 
                                            cửa hàng sẽ đưa ra quyết định cuối cùng về việc đôi giày còn nguyên vẹn hay không.<br/>
                                        </span>
                                        <span>
                                            Để thêm phần chắc chắn, hãy quay video khi bạn mở hộp, đóng hộp trước khi gửi lại.
                                        </span>
                                    </ul>
                                </ul>
                                <strong>3.Chi phí đổi hàng:</strong>
                                <ul>
                                    <li>Miễn phí đổi cho khách nếu là lỗi từ phía cửa hàng, lỗi do nhà sản xuất</li>
                                    <li>Đổi size do rộng, chật, khách muốn đổi mẫu khác, màu khác vì lí do chủ quan 
                                        (không thích mẫu, không thích màu,…), khách hàng vui lòng thanh toán phí vận chuyển 2 chiều.
                                    </li>
                                </ul>
                            </div>
					
                        </div>
                    </div>
                </div>
            </div>
        <section className='marque-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <div className='marquee-inner-wrapper card-wrapper'>
                    <Marquee className='d-flex'>
                    <div className='mx-5 w-30 custom-image-col'>
                        <img src="images/brand_img1.webp" alt="brand"  />
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

export default RefundPolicy