import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/carrito.module.css';

const Carrito = ({ carrito, actualizarCantidad }) => {
  return (
    <Layout title="carrito de compras">
      <main className="contenedor">
        <h1 className="heading"></h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Articulos</h2>
            {carrito.lenth === 0
              ? 'Carrito vacio'
              : carrito.map(producto => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image width={250} height={480} src={producto.imagen} alt={producto.nombre} />
                  </div>
                  <div>
                    <p className={styles.nombre}>Nombre: {producto.nombre}</p>
                    <p className={styles.precio}>
                      <span>Precio: {producto.precio}€</span>
                    </p>
                    <div className={styles.cantidad}>
                      <p>Cantidad:</p>
                      <select
                        className={styles.select}
                        value={producto.cantidad}
                        onChange={e => actualizarCantidad({ id: producto.id, cantidad: e.target.value })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <p className={styles.subtotal}>
                      <span>Subtotal: {producto.precio * producto.cantidad}€</span>
                    </p>
                  </div>
                </div>
							  ))}
          </div>
          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar:</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Carrito;
