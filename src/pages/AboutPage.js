import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about' />
        <article>
          <div className='title'>
            <h2>About us</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              dolore quisquam nisi beatae quasi temporibus quia eaque quos,
              perspiciatis odio velit cupiditate ipsum. Velit ad aspernatur
              laboriosam nihil accusamus quae, enim minima accusantium facilis
              incidunt quos saepe culpa unde, obcaecati nobis, inventore
              temporibus debitis nisi natus nemo harum consequatur. Quod nulla
              facere minus possimus quidem, ducimus ipsum dolor ab! Odit
              voluptatum velit alias nobis ullam doloribus voluptates! Soluta,
              perferendis iste.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
