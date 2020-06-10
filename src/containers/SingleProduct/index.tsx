import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import actionsCart from '../../store/actions/Cart';
import actionsToast from '../../store/actions/Toast';
import ProductImage from '../../components/ProductImage';
import Toast from '../../components/Toast';


import './styles.css'

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

const SingleProduct: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState(false);
  // const sizeError = useSelector(state => state.cartReducer.error)

  function onClickSize(event: any, sku: any) {
    event.preventDefault();
    dispatch(actionsCart.selectSize());
    setSelectedSize(sku);
  }

  function onClickAdd(product: any) {
    const item = { ...product, selectedSize: selectedSize, quantity: 1 };
    if(selectedSize === '') {
      // dispatch(actionsCart.addProductFailure());
      setError(true);
    } else {
      setError(false);
      dispatch(actionsCart.addProduct(item));
      dispatch(actionsToast.addToast('Adicionado à sacola', false));
    }
  }

  return (
    <div className='product'>
      <ProductImage url={product.image} />

      <div className='product__group'>
        <div className='product__info'>
          <h3 className='info__name'>{product.name}</h3>

          <div className='info__price'>
            {product.on_sale &&
              <label className='price-regular'>{product.regular_price}</label>
            }
            <strong className='price__actual'>{product.actual_price}</strong>
            <br/>
            <label className='price__installments'>Em até {product.installments}</label>
          </div>

          <div className='product__size'>
            {product.sizes
              .filter(item => item.available === true)
              .map(size => (
                <button
                  key={size.sku}
                  className={`size__btn ${selectedSize === size.sku ? 'size__btn--selected' : ''}`}
                  onClick={(event) => onClickSize(event, size.sku)}
                >
                  {size.size}
                </button>
              )
            )}
            {error && <p className='error'>Selecione um tamanho</p>}
          </div>
        </div>

        <button className='btn-submit btn-submit--hover' onClick={() => onClickAdd(product)}>
          Adicionar à Sacola
        </button>

        <Link to='/' className='link-back link-back--hover'>
          <BsArrowLeft size={24} />
          Voltar para a home
        </Link>
      </div>
      <Toast />
    </div>
  );
};

export default SingleProduct