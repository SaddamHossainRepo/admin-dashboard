import axios from 'axios';
import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { products } from 'src/_mock/products';

import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductTable from './ProductTable';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';

// ----------------------------------------------------------------------

export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const getAllProducts = async ({ page = 1, limit = 5 }) => {
    // const response = await fetch('http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0');
    // const alllProducts = await response.json();
    // console.log(alllProducts);
    // setLoading(false);
    // setData(alllProducts);
    // return alllProducts;
  };

  // useEffect(() => {
  //   // getAllProducts({});
  //   axios
  //     .get('http://localhost:9000/v1/products/?sortBy=name&limit=10&page=0')
  //     .then((res) => {setProducts(res.data.data);console.log(res.data.data)});
  // }, []);

  return (
    <ProductTable/>

    // <div>
    //   {/* <h2>{products.length}</h2>
    //   {
    //     products.map((product) => 
    //     <div>
    //       <h2>{product.name}</h2>
    //     </div> )
    //   } */}
    //   {/* <ProductTable /> */}
    //   <Container>
    //     <ProductTable />
    //     <Typography variant="h4" sx={{ mb: 5 }}>
    //       Products
    //     </Typography>
    //     getAll
    //     {
    //     products.map((product) => <div>
    //       <h1>{product.name}</h1>
    //     </div> )
    //   }
    //     <Stack
    //       direction="row"
    //       alignItems="center"
    //       flexWrap="wrap-reverse"
    //       justifyContent="flex-end"
    //       sx={{ mb: 5 }}
    //     >
    //       <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
    //         <ProductFilters
    //           openFilter={openFilter}
    //           onOpenFilter={handleOpenFilter}
    //           onCloseFilter={handleCloseFilter}
    //         />

    //         <ProductSort />
    //       </Stack>
    //     </Stack>
    //     <Grid container spacing={3}>
    //       {!loading &&
    //         products.map((product) => (
    //           <Grid key={product.id} xs={12} sm={6} md={3}>
    //             <ProductCard product={product} />
    //           </Grid>
    //         ))}
    //     </Grid>
    //     <ProductCartWidget />
    //   </Container>
    // </div>
  );
}
