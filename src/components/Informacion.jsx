const Informacion = (props) => {
  return (
    <section>
      <h2> primer proyecto con react </h2>
      <p>
        React es una biblioteca de JavaScript desarollada por facebook para
        construir interfaces de usuario. <br /> Se destaca por su enfoque en la
        creacion de aplicaciones web de una sola pagina SPA y su capacidad
        para manejar la interfaz de menara eficiente mediante el uso de un <b> DOM
        virtual</b>
      </p>
      <p>
        React permite a los desarrolladores construir interfaces dinamicas y
        reactivas de forma modular, lo que facilita el desarrollo y el
        mantenimiento de aplicaciones a gran escala.
      </p>
      <article className=" bg-primary-subtle p-3 rounded-3">
        <p> Practica de contador de la <strong>comision {props.comisionProps} </strong> </p>
      </article>
    </section>
  );
};

export default Informacion;
