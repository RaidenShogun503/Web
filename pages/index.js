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
                        <h1 className="mb-5 text-5xl">Chào mừng bạn đến với Trang Web Của Tui</h1>
                        <p className="mb-5">
                         Tui cũng chả biết nói j trong này cả :)).Info và link ở repo để ở dưới nha
                        </p>
                        <div class="flex justify-center gap-2">
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn btn-primary">
                                    Repo Jailbreak
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href="sileo://source/https://raiden.cyclic.app/repo/">Sileo</a>
                                    </li>
                                    <li>
                                        <a href="zbra://sources/add/https://raiden.cyclic.app/repo">Zebra</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn btn-primary">
                                    MXH
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100086286302686">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://tiktok.com/@raidenshogun577">Tiktok</a>
                                    </li>
                                </ul>
                            </div>

                            <a
                                href="https://github.com/RaidenShogun508"
                                target="_blank"
                                rel="sponsored"
                                class="btn btn-primary"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
