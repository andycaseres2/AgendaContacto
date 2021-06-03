const nombre = document.querySelector(".nombre");
const telefono = document.querySelector(".telefono");
const direccion = document.querySelector(".direccion");
const btnAgregarContactos = document.querySelector(".btn-agregar-contactos");

const listadoContactos = document.querySelector(".listado-contactos");

const local = window.localStorage;

btnAgregarContactos.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    telefono: telefono.value,
    direccion: direccion.value,
  };
  guardarContacto(local, contacto);
};

cargarContactos(local, listadoContactos);
