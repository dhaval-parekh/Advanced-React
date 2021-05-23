import Products from '../components/Products';
import gql from 'graphql-tag/lib/graphql-tag.umd';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import Product from '../components/Product';

// Graph QL
const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY {
  allProducts {
    id
    name
    description
    price
    photo {
      id
      image {
        publicUrl
        publicUrlTransformed
      }
    }
  }
}
`;
const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function ProductsPage() {

	const { data, error, loading } = useQuery( ALL_PRODUCTS_QUERY );

	if ( loading ) {
		return <p>Loading</p>;
	}

	if ( error ) {
		return <p>Error: { error.message }</p>;
	}

	return (
		<div>
			<ProductsListStyles>
				{
					data.allProducts.map( ( product ) => {
						return (
							<Product key={ product.id } product={ product }></Product>
						)
					} )
				}
			</ProductsListStyles>
		</div>
	)
}
