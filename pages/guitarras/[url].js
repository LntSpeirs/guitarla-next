//import { useRouter } from 'next/router';
function Producto({guitarra}) {
  //const router = useRouter();
  //console.log(router);
  console.log(guitarra);
  return <div>Producto [url]</div>;
}

export default Producto;


//export async function getServerSideProps(datos) {
export async function getServerSideProps({query: {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const { data:guitarra } = await respuesta.json();
  //console.log(data);
  return {
    props: {guitarra},
  };
}
