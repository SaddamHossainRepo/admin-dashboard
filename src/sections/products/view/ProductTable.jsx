import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import ButtonGroup from '@mui/material/ButtonGroup'
import TableContainer from '@mui/material/TableContainer';

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // getAllProducts({});
    axios.get('http://localhost:9000/v1/products/').then((res) => {
      setProducts(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <h1>Product table</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>price</TableCell>
              <TableCell sx={{ textAlign: 'justify' }}>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled button group"
                  >
                    <Button sx={{color: '', bgcolor: '#191919' }}>update</Button>
                    <Button sx={{color: '', bgcolor: '#1F1717'}}>delete</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
