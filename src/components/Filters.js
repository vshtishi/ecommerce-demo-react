import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    filters: {
      text,
      min_price, max_price
    },
    updateFilters,
    clearFilters,
    all_products
  }
  return <Wrapper><div className="content"><form onSubmit={(e)=> e.preventDefault()}>
    <div className="form-control"><input type="text" name='text' placeholder='search' className='search-input' value={text} onChange={updateFilters} /></div>
    </form></div></Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
