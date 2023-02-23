export const savelocal = (state) => {
  localStorage.setItem("navegacion", state);
  const estado = localStorage.getItem("navegacion");
  return estado;
};
