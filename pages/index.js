import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div
                className="hero min-h-screen"
                style={{ backgroundImage: `url("/image/banner${Math.floor(Math.random() * 8) + 1}.png")` }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl">Chào mừng bạn đến với {siteTitle}</h1>
                        <p className="mb-5">
                         {siteTitle} là một server private mà bạn có thể làm bất cứ gì bạn thích.
                        </p>
                        <div class="flex justify-center gap-2">
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn btn-primary">
                                    Lệnh
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href="/command">V1</a>
                                    </li>
                                    <li>
                                        <a href="https://ps2.yuuki.me/command">V2</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn btn-primary">
                                    Chơi
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href="/genshin">Genshin Impact</a>
                                    </li>
                                    <li>
                                        <a href="/starrail">Star Rail</a>
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="/signup"
                                target="_blank"
                                rel="sponsored"
                                class="btn btn-primary"
                            >
                                Tạo Acc
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}