import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import BreadCrumb from '../../components/Restore/BreadCrumb';
import Meta from '../../components/Restore/Meta';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    // Hàm xử lý khi người dùng nhấn nút xem mật khẩu
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Meta title={'Đăng nhập'} />
            <BreadCrumb title='Đăng nhập' />
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className='auth-card'>
                                <h3 className="text-center mb-3">Đăng nhập tài khoản</h3>
                                <form action='' className="d-flex flex-column gap-15">
                                    <div>
                                        <input type='email' required name='email' placeholder='Nhập email' className='form-control' />
                                    </div>
                                    <div className='password-input-wrapper'>
                                        <div className='d-flex align-items-center relative'>
                                            <input
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                name='password'
                                                placeholder='Nhập mật khẩu'
                                                className='form-control'
                                            />
                                            {/* Icon con mắt để chuyển đổi hiển thị/ẩn mật khẩu */}
                                            {showPassword ? (
                                                <AiOutlineEye className='absolute r-2 t-2 cursor-pointer' size={25} onClick={handleTogglePassword} />
                                            ) : (
                                                <AiOutlineEyeInvisible className='absolute r-2 t-2 cursor-pointer' onClick={handleTogglePassword} />
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Quên mật khẩu?</Link>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button className="button border-0" type="submit">
                                                Đăng nhập
                                            </button>
                                            <Link to="/register" className="button signup">
                                                Đăng ký
                                            </Link>
                                        </div>  
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;