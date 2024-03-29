import Layout from '../components/layout.js';
import Guitarra from '../components/guitarra.js';
import Post from '../components/post.js';
import Curso from '../components/curso.js';
import styles from '../styles/grid.module.css';

export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout title={'Inicio'} description={'Blog de música, venta de guitarras y más.'}>
        <main className="contenedor">
          <h1 className="heading">Nuestra colección</h1>
          <div className={styles.grid}>
            {guitarras?.map(guitarra => {
              return <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />;
            })}
          </div>
        </main>
        <Curso curso={curso.attributes} />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts?.map(post => {
              return <Post key={post.id} post={post.attributes} />;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([fetch(urlGuitarras), fetch(urlPosts), fetch(urlCurso)]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json(),
  ]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
