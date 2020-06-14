import React from 'react';

import { Item, Image, Description } from './styles';

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

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Item key={product.id} className='item'>
      <Image>
        {product.image
          ? <img src={product.image} alt={product.name} />
          : <img src='https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível' alt={product.name} />
        }
        {product.on_sale
          && <div >{product.discount_percentage} off</div>
        }
        <button >Ver produto</button>
      </Image>

      <Description >
        <h3 >{product.name}</h3>
        {product.on_sale && <label >{product.regular_price}</label>}
        <strong >{product.actual_price}</strong>
      </Description>
    </Item>
  );
};

export default Product
