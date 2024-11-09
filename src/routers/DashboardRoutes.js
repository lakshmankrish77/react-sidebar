import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header/Header';
// import Sidebar from '../components/Sidebar/Sidebar';
import MiniDrawer from '../components/Sidebar/SidebarMUI';
import MainContainer from '../components/Contents/Contents';

//General Pages
import { ClientesPage } from '../pages/generalPages/ClientesPage';
import { ProductosPage } from '../pages/generalPages/ProductosPage';
import { AgentesPage } from '../pages/generalPages/AgentesPage';
import { FacturaPage } from '../pages/generalPages/FacturaPage';
import { TodoPage } from '../pages/generalPages/TodoPage';
import { TodoAccordionPage } from '../pages/generalPages/TodoAccordionPage';

//Admin Pages
import { VentasPage } from '../pages/adminPages/VentasPage';
import { InventarioPage } from '../pages/adminPages/InventarioPage';
import { UsuariosPage } from '../pages/adminPages/UsuariosPage';
import { RolesPage } from '../pages/adminPages/RolesPage';
import { text_properties } from '../properties/text_config';


export const DashboardRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeClick, setActiveClick] = useState(false);

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      {/* <Sidebar toggle={sidebarToggle} setToggle={setSidebarToggle} active={setActiveClick} /> */}
      <MiniDrawer toggle={sidebarToggle} setToggle={setSidebarToggle} active={setActiveClick}  text_properties={text_properties}></MiniDrawer>

      <Routes>
        {/* GeneralPages(Limited) */}
        <Route
          exact
          path="/"
          element={<ProductosPage toggle={sidebarToggle} text_properties={text_properties} />}
        />
        <Route
          exact
          path="Productos"
          element={<ProductosPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Clientes"
          element={<ClientesPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Agentes"
          element={<AgentesPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Factura"
          element={<FacturaPage toggle={sidebarToggle} text_properties={text_properties} />}
        />
        {/* AdminPages(Unlimited) */}
        <Route
          exact
          path="Roles"
          element={<RolesPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Ventas"
          element={<VentasPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Inventario"
          element={<InventarioPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Usuarios"
          element={<UsuariosPage toggle={sidebarToggle} text_properties={text_properties}/>}
        />
        <Route
          exact
          path="Todo/*"
          element={<TodoAccordionPage toggle={sidebarToggle} text_properties={text_properties} />}
        />
      </Routes>
    </div>
  );
};
