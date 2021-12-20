import React, { useState } from 'react'
import styled from 'styled-components'
import extra1 from '../assets/extra_img1.jpg'
import extra2 from '../assets/extra_img2.jpeg'
import extra3 from '../assets/extra_img3.jpg'
import extra4 from '../assets/extra_img4.jpg'

const ProductImages = ({ image }) => {
  const [images, setImages] = useState([extra1, extra2, extra3, extra4])
  return (
    <Wrapper>
      <img src={image} alt='main image' className='main' />
      <div className='gallery'>
        {images.map((x, i) => (
          <img src={x} key={i} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
