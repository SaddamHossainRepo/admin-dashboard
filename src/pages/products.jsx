import { Helmet } from 'react-helmet-async';

// import { ProductsView } from 'src/sections/products/view';
// eslint-disable-next-line import/named
import { ProductsView } from 'src/sections/newProducts/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Products | Minimal UI </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
