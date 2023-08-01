import React from "react"
import { Link } from "react-router-dom"

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-card-img">
                <img src="images/tintuc1.webp" className="img-fluid w-100 img-thumbnail" alt="blog"/>
            </div>
            <div className="blog-card-content">
                <p className="date">1 Dec, 2023 </p>
                <h6 className="title">GIÀY MỚI LÊN KỆ: LỘ DIỆN MẪU GIÀY HOÀN TOÀN MỚI CỦA PUMA</h6>
                <p className="desc">
		            Gần đây, PUMA FOOTBALL đã rò rỉ những thông tin về 1 mẫu giày hoàn toàn mới với nhiều điều đáng mong chờ. Hẳn chúng ta đều muốn nhìn thấy nguyên bản hình dáng đôi giày mới nhất ...
		        </p>
                <Link to='/blog/:id' className="button">Xem thêm</Link>
            </div>
        </div>
            
    )
}

export default BlogCard