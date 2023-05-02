import Layout from '../components/layout.js';
import Guitarra from '../components/guitarra.js';
import styles from '../styles/grid.module.css';

const Tienda = ({ guitarras }) => {
  //console.log(guitarras);
  return (
    <Layout title={'Tienda virtual'} description={'Tienda de guitarras.'}>
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => {
            return <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />;
          })}
        </div>
      </main>
    </Layout>
  );
};
export default Tienda;

//Esta informacion se quedara fija en el build, no se regenera con cada visita del usuario
/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  //const resultado = await respuesta.json();
  //Esto se ejecuta en el lado del servidor
  const { data: guitarras } = await respuesta.json();
  console.log(guitarras);
  return {
    props: {
      guitarras,
    },
  };
}
 */

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await respuesta.json();
  //console.log(guitarras);
  return {
    props: {
      guitarras,
    },
  };
}
