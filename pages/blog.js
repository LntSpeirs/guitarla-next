import Layout from '../components/layout.js';
import Post from '../components/post.js';
import styles from '../styles/grid.module.css';

const Blog = ({ posts }) => {
  return (
    <Layout title={'Blog'} description={'Blog de música, venta de guitarras, consejos'}>
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map(post => {
            return <Post key={post.id} post={post.attributes} />;
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;

//Esta informacion se quedara fija en el build, no se regenera con cada visita del usuario
export async function getStaticProps() {
  //Esto se ejecuta en el lado del servidor
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();
  return {
    props: {
      posts,
    },
  };
}
