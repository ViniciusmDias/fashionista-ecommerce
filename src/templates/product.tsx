import React, { useEffect } from 'react';
import { RouteProps,RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import actionsProducts from '../store/actions/Products';

import Navigation from '../components/Navigation';
import SingleProduct from '../containers/SingleProduct';


interface RootState {
  productsReducer: {
    data: any
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
type TParams = { id: string };

const Product: React.FC<RouteComponentProps<TParams>> = ({ match })  => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productsReducer.data);
  const id = parseInt(match.params.id);

  useEffect(() => {
    dispatch(actionsProducts.getProducts());
    console.log(id)

  }, [dispatch]);

  return (
    <>
      <Navigation />
      {products.map((product: any) => product.id === id &&
        <SingleProduct key={product.id} product={product} />
      )}
    </>
  );
};

export default Product
