import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/footer.module.css';

const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
						Inicio
          </Link>
          <Link href="/nosotros" className={router.pathname === '/nosotros' ? styles.active : ''}>
						Nosotros
          </Link>
          <Link href="/tienda" className={router.pathname === '/tienda' ? styles.active : ''}>
						Tienda
          </Link>
          <Link href="/blog" className={router.pathname === '/blog' ? styles.active : ''}>
						Blog
          </Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()} ©</p>
      </div>
    </footer>
  );
};

export default Footer;
