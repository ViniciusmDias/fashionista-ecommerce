import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import actionsProducts from '../store/actions/Products';

import Navigation from '../components/Navigation';
import OneProduct from '../containers/OneProduct';


interface RootState {
  productsReducer: {
    data: any
  }
}
type TParams = { id: string };

const Product: React.FC<RouteComponentProps<TParams>> = ({ match })  => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productsReducer.data);
  const id = parseInt(match.params.id);

  useEffect(() => {
    dispatch(actionsProducts.getProducts());

  }, [dispatch]);

  return (
    <>
      <Navigation />
      {products.map((product: any) => product.id === id &&
        <OneProduct key={product.id} product={product} />
      )}
    </>
  );
};

export default Product
