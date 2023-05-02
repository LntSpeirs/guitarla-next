import Image from 'next/image';
import styles from '../../styles/guitarras.module.css';
import Layout from '../../components/layout';

//import { useRouter } from 'next/router';
function Producto({ guitarra }) {
  //const router = useRouter();
  //console.log(router);

  //console.log( guitarra.data[0].attributes );
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{precio}€</p>
        </div>
      </div>
    </Layout>
  );
}

export default Producto;

//Esta funcion es necesaria para getStaticProps ya que se esta usando routing dinamico
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  //const respuesta = await fetch('http://127.0.0.1:1337/api/guitarras');
  const { data } = await respuesta.json();
  //console.log(data);
  //Los paths sirven para identificar cuantas paginas vamos a generar y de donde vienen esas paginas
  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  //console.log(paths);
  return {
    paths,
    fallback: false, //genera un error 404 en automatico
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  //const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
  const guitarra = await respuesta.json();
  //console.log(data);
  return {
    props: { guitarra },
  };
}

//export async function getServerSideProps(datos) {
/* export async function getServerSideProps({query: {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const { data:guitarra } = await respuesta.json();
  //console.log(data);
  return {
    props: {guitarra},
  };
} */
