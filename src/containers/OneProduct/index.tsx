import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import actionsCart from '../../store/actions/Cart';
import actionsToast from '../../store/actions/Toast';
import ProductImage from '../../components/ProductImage';
import Toast from '../../components/Toast';

import { Product, ProductGroup, ProductInfo, InfoPrice, ProductSize } from './styles'

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

const OneProduct: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState(false);

  function onClickSize(event: any, sku: any) {
    event.preventDefault();
    dispatch(actionsCart.selectSize());
    setSelectedSize(sku);
  }

  function onClickAdd(product: Object) {
    const item = { ...product, selectedSize: selectedSize, quantity: 1 };
    if(selectedSize === '') {
      setError(true);
    } else {
      setError(false);
      dispatch(actionsCart.addProduct(item));
      dispatch(actionsToast.addToast('Adicionado ao carrinho', false));

    }
  }

  return (
    <Product className='product'>
      <ProductImage url={product.image} />

      <ProductGroup>
        <ProductInfo>
          <h3>{product.name}</h3>

          <InfoPrice>
            {product.on_sale &&
              <label >{product.regular_price}</label>
            }
            <strong>{product.actual_price}</strong>
            <br/>
            <label>Em até {product.installments}</label>
          </InfoPrice>

          <ProductSize>
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
            {error && <p>Selecione um tamanho</p>}
          </ProductSize>
        </ProductInfo>

        <button className='btn-submit' onClick={() => onClickAdd(product)}>
          Adicionar ao carrinho
        </button>

        <Link to='/' className='back'>
          <FiArrowLeft size={24} />
          Produtos
        </Link>
      </ProductGroup>
      <Toast />
    </Product>
  );
};

export default OneProduct
