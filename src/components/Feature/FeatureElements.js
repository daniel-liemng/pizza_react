import styled from "styled-components";

import FeatureImg from "../../images/featured3.jpg";

export const FeatureContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeatureImg});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  background: #ffc500;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background: #e31837;
    color: #fff;
  }
`;
