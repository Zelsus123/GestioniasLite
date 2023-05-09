export const HeaderList = [
  {
    field: "Marca",
    headerName: "Marca",
    width: 100,
    editable: false,
  },
  {
    field: "Producto",
    headerName: "Producto",
    width: 150,
    editable: false,
  },
  {
    field: "Descripcion",
    headerName: "Descripcion",
    type: "number",
    width: 200,
    editable: false,
  },
  {
    field: "Precio",
    headerName: "Precio Venta",
    description: "Precio de venta",
    sortable: true,
    width: 100,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
