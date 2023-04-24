import Link from 'next/link'

export default function FourOhFour() {
    return <>

        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Lỗi</h1>
                    <p class="py-6">Bạn đã vào đường dẫn không chính xác hoặc lỗi thời. Click vào đây để trở lại trang chính</p>
                    <Link href="/"><button class="btn btn-primary">Quay lại</button></Link>
                </div>
            </div>
        </div>

    </>
}