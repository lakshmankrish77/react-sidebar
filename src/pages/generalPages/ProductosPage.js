import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Productos from '../../assets/Productos.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const ProductosPage = (props) => {
  const [productos, setProductos] = React.useState([
    {
      codigo: 1,
      name: 'Arroz',
      precio: 1200,
      cantidad: 5,
    },
    {
      codigo: 2,
      name: 'frijoles',
      precio: 980,
      cantidad: 3,
    },
    {
      codigo: 3,
      name: 'Leche',
      precio: 630,
      cantidad: 2,
    },
  ]);

  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredProducts = productos;
  if (search !== '') {
    filteredProducts = productos.filter(
      (product) =>
        product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  return (
    <Box component="main" active={props.toggle} sx={{ flexGrow: 1, p: 3 }}>
    {/* <MainContainer active={props.toggle}> */}
      <div>
        <LogoSeccion src={Productos} alt="" className=" text-center" />
        <h1 className="text-center">Productos</h1>
        <div className="text-center"></div>
        <Button variant="contained">Hello World</Button>
      </div>
      <div style={{ paddingTop: '50px' }}>
        <input
          onChange={(e) => handleChange(e)}
          className="form-control"
          id="myInput"
          type="text"
          placeholder="Search.."
        />
        <table>
          <thead>
            <tr>
              <th>Nombre Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Opciones</th>
            </tr>
          </thead>

          {filteredProducts.map((product) => (
            <tbody>
              <tr className="table-active">
                <td key={product.name}>{product.name}</td>
                <td key={product.precio}>{product.precio}</td>
                <td key={product.cantidad}>{product.cantidad}</td>
                <td className="text-center" style={{ width: '10%' }}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                  <button className="btn btn-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      </Box>
    // </MainContainer>
  );
};
