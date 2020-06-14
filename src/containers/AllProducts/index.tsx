import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../store/actions/Products';
import Loading from '../../components/Loading';
import Product from '../../components/Product';
import { List } from './styles'

interface RootState {
  productsReducer: {
    data: any
    loading: any
  }
}
interface ProductProps {
  product: {
    id: string,
    name: string,
		style: string,
		code_color: string,
		color_slug: string,
		color: string,
		on_sale: boolean,
		regular_price: number,
		actual_price: number,
		discount_percentage: number,
    installments: number,
    image: string,
    selectedSize: string,
    quantity: string,
		sizes: [
			{
				available: boolean,
				size: string,
				sku: string
			}
		]
  }
}

const AllProducts: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productsReducer.data);
  const loading = useSelector((state: RootState) => state.productsReducer.loading);

  useEffect(() => {
    dispatch(actions.getProducts());
  }, [dispatch]);

  return (
    <List>
      <div>
        <h2>Itens Disponíveis</h2>
        <label>({products.length} items)</label>
      </div>

      {loading
        ? <Loading />
        : (

          <ul>
            {products.map((product: ProductProps['product']) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Product product={product} />
              </Link>
            ))}
          </ul>
        )
      }
    </List>
  );
};
export default AllProducts
