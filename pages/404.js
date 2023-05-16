import Link from 'next/link';
import Layout from '../components/layout';

//Se llama automaticamente sin tener que indicarlo, cuando no encuentra una pagina
const Pagina404 = () => {
  return (
    <Layout title="Pagina no encontrada">
      <p className="error">Pagina no encontrada</p>
      <Link href="/" className="error-enlace">
				Ir a Inicio
      </Link>
    </Layout>
  );
};

export default Pagina404;
