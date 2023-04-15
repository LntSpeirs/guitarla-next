/*Componente que se encarga de hacer todo tipo de optimizaciones a la imagen (lazy loading y demas) */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Header = () => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            {/* El classname contenedor centra el contenido */}
            <div className={`contentedor ${styles.barra}`}>
                <Link
                    href="/"
                >
                    <Image
                        src="/img/logo.svg"
                        width={300}
                        height={40}
                        alt={"logotipo"}
                    />
                </Link>
                <nav className={styles.navegacion}>
                    <Link
                        href="/"
                        className={router.pathname === "/" ? styles.active : ""}
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/nosotros"
                        className={
                            router.pathname === "/nosotros" ? styles.active : ""
                        }
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/blog"
                        className={
                            router.pathname === "/blog" ? styles.active : ""
                        }
                    >
                        Blog
                    </Link>
                    <Link
                        href="/tienda"
                        className={
                            router.pathname === "/tienda" ? styles.active : ""
                        }
                    >
                        Tienda
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;