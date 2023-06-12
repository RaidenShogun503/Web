import Head from "next/head";
import styles from "./layout.module.css";

export const siteTitle = ":))";

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Private Server Anime Game" />
            </Head>

            {children}

            {home ? (
                <></>
            ) : (
                <>
                    <p class="text-center py-3">
                        <a href="/" class="btn btn-primary">
                            Trang chủ
                        </a>
                    </p>
                </>
            )}

            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>
                        <a class="float-left mr-2" href="" target="_blank" rel="sponsored">
                            
                        </a>

                        <img class="float-left mr-2" src="//s4is.histats.com/stats/i/4752048.gif?4752048&103"></img>

                        <a href="https://stats.uptimerobot.com/8D9GRcXVZA" target="_blank" rel="sponsored">
                            <img class="float-left" alt="Uptime Robot ratio (7 days)" src="https://img.shields.io/uptimerobot/ratio/7/m793971571-44b7fea8439df9ed1363a15d"></img>
                        </a>

                    </p>
                    <p>
                        <a href="https://raiden.cyclic.app" target="_blank" rel="sponsored">
                            Cải tiến bởi Nguyễn Hiếu <span class="heart">❤</span> ở NghệAn\ViệtNam
                        </a>
                    </p>
                    <p>
                        Web được host bởi <a href="https://cyclic.sh/" target="_blank" rel="sponsored">Cyclic</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
