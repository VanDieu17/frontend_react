import React from 'react'
import { Link } from "react-router-dom";  
import BreadCrumb from "../components/Restore/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../components/Restore/Meta";

const SingleBlog = () =>{
  return (
    <>
        <Meta title={'Tên Blog'} />
        <BreadCrumb title='Blog Name' />
        <section id="breadcrumb-wrapper4" class="breadcrumb-w-img">
            <div className="breadcrumb-overlay"></div>
            <div className="breadcrumb-content">
                <div className="wrapper">
                    <div className="inner text-center" style={{color:'white'}}>
                        <div className="breadcrumb-big">
                            <h2>GIÀY MỚI LÊN KỆ: LỘ DIỆN MẪU GIÀY HOÀN TOÀN MỚI CỦA PUMA </h2> 
                        </div>
                        <div class="breadcrumb-small" >
                            <a href="/" title="Quay trở về trang chủ"style={{color:'white'}}>Trang chủ</a>
                            <span aria-hidden="true">/</span>
                            <a href="/blog" title=""style={{color:'white'}}>Tin tức Giày</a>
                            <span aria-hidden="true">/</span>
                            <span>GIÀY MỚI LÊN KỆ: LỘ DIỆN MẪU GIÀY HOÀN TOÀN MỚI CỦA PUMA</span>
				        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
            <div className="row">
                <div className='col-9'>
                     <div class="article-content">
						<div class="article-head">
							<h2>GIÀY MỚI LÊN KỆ: LỘ DIỆN MẪU GIÀY HOÀN TOÀN MỚI CỦA PUMA</h2>							
						</div>
						
						<div >
							<p>
                                Gần đây, PUMA FOOTBALL đã rò rỉ những thông tin về 1 mẫu giày hoàn toàn mới với nhiều điều đáng mong chờ. 
                                 Hẳn chúng ta đều muốn nhìn thấy nguyên bản hình dáng đôi giày mới nhất của hãng giày Đức rồi đúng không nào?
                            </p>
                            <p>
                                PUMA đang tăng tốc cho dự án ra mắt sắp tới của họ bằng cách tiết lộ hình ảnh của mẫu giày thế hệ mới. Cùng Hungsport 
                                khám phá đôi mẫu giày Puma Ultra 'Speed Prototype' ngay sau đây nhé!
                            </p>
                            <p className='text-center'>
                                <img  src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__4__5762ed768c704b909c6d345ed49129f4.jpg" alt="Lộ Diện Mẫu Giày Hoàn Toàn Mới Của PUMA - Puma Ultra 1.1" className="custom-img"/>
                            </p>
                            <p className='text-center'>
                                <em>Lộ Diện Mẫu Giày Hoàn Toàn Mới Của PUMA - Puma Ultra 1.1 ''Prototype'</em>
                            </p>
                            <h2>Giới thiệu giày đá banh Puma Ultra 1.1 ''Prototype'</h2>
                            <p>
                                Đây là dòng giày chuyên dụng dành cho Phong cách chơi "tốc độ" với tinh thần “Speed is Back”. 
                                Đây là lần đầu câu slogan này chính thức được xuất hiện trở lại sau lần PUMA giới thiệu dòng 
                                evoSPEED ONE vào năm 2017. Đôi giày được dự kiến sẽ ra mắt vào ngày 12 tháng 8 tới đây.
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="giày đá banh Puma " 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__3__6cbfe4fb9b704336964c23439a843517.jpg"/>
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="giày đá banh Puma " 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__8__f1fd176f602c4f2e9470f298b5b30305.jpg"/>
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="giày đá banh Puma" 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__9__852fa9ba0abc401bb2a58a04eb73ac90.jpg"/>
                            </p>
                            <p className='text-center'>
                                <em>Hình ảnh giày đá banh Puma 'Speed Prototype' Ultra 1.1</em>
                            </p>
                            <h2>Giày đá banh Puma Ultra 1.1 ''Prototype'</h2>
                            <p>
                                Silo Puma Ultra 1.1 ''Prototype'' tự hào với diện mạo khác biệt đi kèm với nhiều chữ và nhãn hiệu khác 
                                nhau ở phía trên bao gồm&nbsp; Speed Prototype, Faster và ca̶t̶c̶h̶a̶b̶l̶e̶. Logo Ultra của Puma được in màu cam / trắng ở ngoài. 
                                Đế ngoài của giày có màu cam nổi bật. Phối màu tương phản đen cam nổi bật và vô cùng đẹp mắt, gây ấn tượng mạnh ngay từ 
                                cái nhìn đầu tiên.
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="Đế ngoài của giày đá banh Puma Ultra 1.1 "
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__10__20e33878c9254ca1b48df6010eec2b83.jpg"/>
                            </p>
                            <p className='text-center'>
                                <em>Đế ngoài của giày đá banh Puma Ultra 1.1 ''Prototype' có màu cam nổi bật</em>
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="Điểm nổi bật nằm ở trọng lượng giày siêu nhẹ so với PUMA Future và PUMA ONE" 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__7__f22c5a2c352142ef90dfbf7badd4a505.jpg"/>
                            </p>
                            <p className='text-center'>
                                <em>Điểm nổi bật nằm ở trọng lượng giày siêu nhẹ so với 
                                    <a href="https://www.neymarsport.com/collections/puma-future">PUMA Future</a> và PUMA ONE
                                </em>
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="Puma Ultra siêu nhẹ, chỉ nặng 175g" 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__11__feaea4138ae84565862f83c6e0129fab.jpg"/>
                            </p>
                            <p className='text-center'>
                                <em>Puma Ultra siêu nhẹ, chỉ nặng 175g</em>
                            </p>
                            <p>
                                Điểm nổi bật nằm ở trọng lượng giày siêu nhẹ so với PUMA Future và PUMA ONE. Puma Ultra 1.1 ''Prototype' 
                                là một trong những ứng viên nặng ký trong cuộc đua của những đôi giày có trọng lượng nhẹ nhất từ trước 
                                đến nay. Trong khi silo Future nặng 250g , PUMA ONE nặng 220g, thì Puma Ultra chỉ nặng 175g.
                            </p>
                            <p className='text-center'>
                                <img className="custom-img"alt="Ai sẽ là người mang Puma Ultra 1.1 " 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__2__593d553853624abdb15e02f204d297f9.jpg"/>
                            </p>
                            <p className='text-center'>
                                <em>Ai sẽ là người mang Puma Ultra 1.1 ''Prototype'?</em>
                            </p>
                            <p>Ai sẽ là người mang Puma Ultra 1.1 ''Prototype'? Luis Suarez, Antoine Griezmann, Marco Reus là những gương
                                 mặt đại diện. Cùng theo dõi để đón chào Puma Ultra trên sân cỏ nhé!
                            </p>
                            <p>
                                <strong>Lời kết:</strong> 
                                Kiểu dáng đẹp mắt, trọng lượng siêu nhẹ, PUMA đang dần trở lại trên đường đua tốc độ, như một lời 
                                tuyên chiến sẽ không nhượng bộ trước những thương hiệu đầy cạnh tranh khác trên thị trường là Nike,
                                 Adidas và Mizuno. Một thương hiệu sản xuất giày dành cho người đàn ông nhanh nhất thế giới, tốc độ 
                                 luôn nằm trong DNA của "Báo sư tử" PUMA.
                            </p>
                            <p className='text-center'>
                                <img className="custom-img" alt="Puma Ultra 1.1 " 
                                src="https://file.hstatic.net/1000061481/file/giay_da_banh_puma__4__5762ed768c704b909c6d345ed49129f4.jpg"/>
                            </p>
                            <p className='text-center'>
                                <em>Puma Ultra 1.1 ''Prototype' Tốc độ - Linh hoạt – Tinh thần của PUMA</em>
                            </p>
                            <p>
                                Chúng ta cùng mong chờ ngày Puma Ultra 1.1 ''Prototype' chiễm chệ trên kệ các cửa hàng của 
                                HUNGSPORT để rinh ngay về nhé!
                            </p>
						</div>
						
					</div>
                </div>
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
                    <div className='filter-card mb-3 mt-4'>
                        <img src='https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fneymarsport.com%2Fblogs%2Fnews%2Fhuong-dan-bao-quan-va-ve-sinh-giay-bong-da-chinh-hang&psig=AOvVaw32bcA-FzcimNp_YnMT57vh&ust=1690517792950000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC_sNeDroADFQAAAAAdAAAAABAE'/>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleBlog