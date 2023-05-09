import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
export const SideBarData = [
  {
    text: "Inicio",
    to: "/",
    Icon: <DashboardOutlinedIcon />,
  },
  {
    text: "Ventas",
    to: "/ventas",
    Icon: <PointOfSaleOutlinedIcon />,
  },
  {
    text: "Clientes",
    to: "/clientes",
    Icon: <Groups2OutlinedIcon />,
  },
  {
    text: "Compras",
    to: "/compras",
    Icon: <AddShoppingCartOutlinedIcon />,
  },
  {
    text: "Productos",
    to: "/productos",
    Icon: <WarehouseOutlinedIcon />,
  },
  {
    text: "Empleados",
    to: "/empleados",
    Icon: <Person2OutlinedIcon />,
  },
  {
    text: "Configuracion",
    to: "/configuracion",
    Icon: <AddShoppingCartOutlinedIcon />,
  },
];
