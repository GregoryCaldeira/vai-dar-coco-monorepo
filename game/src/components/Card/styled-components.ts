import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled.div`
  height: 400px;
  perspective: 1000px;
  width: 300px;
`;

export const CardWrapper = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  width: 100%;
`;

const cardStyles = css`
  backface-visibility: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const CardFront = styled(motion.div)`
  background-color: red;
  ${cardStyles}
`;

export const CardBack = styled(motion.div)`
  background-color: blue;
  ${cardStyles}
`;
