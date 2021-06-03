const guardarContacto = (local, contacto) => {
  local.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/";
};

const cargarContactos = (local, parentNode) => {
  let claves = Object.keys(local);
  for (clave of claves) {
    let contacto = JSON.parse(local.getItem(clave));
    crearContacto(parentNode, contacto, local);
  }
};

const crearContacto = (parentNode, contacto, local) => {
  let divContacto = document.createElement("div");
  let nombreContacto = document.createElement("h3");
  let telefonoContacto = document.createElement("p");
  let direccionContacto = document.createElement("p");
  let iconBorrar = document.createElement("span");

  nombreContacto.innerHTML = contacto.nombre;
  telefonoContacto.innerHTML = contacto.telefono;
  direccionContacto.innerHTML = contacto.direccion;
  iconBorrar.innerHTML = "delete_forever";

  divContacto.classList.add(".contactos");
  iconBorrar.classList.add("material-icons", "icono");

  iconBorrar.onclick = () => {
    local.removeItem(contacto.id);
    window.location.href = "/";
  };

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(telefonoContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(iconBorrar);

  parentNode.appendChild(divContacto);
};
