import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

export default function Login() {
    return <>
        <Layout login>

            <Head>
                <title>Login - {siteTitle}</title>
            </Head>

            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">{siteTitle}</h1>
                        <p class="py-6">Để bắt đầu chơi.Vui lòng tạo account để vào server.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Tên Tài khoản</span>
                                </label>
                                <input type="text" placeholder="username" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Mật khẩu</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover"></a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    </>
}