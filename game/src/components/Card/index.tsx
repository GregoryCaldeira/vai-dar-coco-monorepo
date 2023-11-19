import { FC, memo } from 'react';
import {
  CardContainer,
  CardWrapper,
  CardBack,
  CardFront,
} from './styled-components';
import { CardProps } from './types';

export const Card: FC<CardProps> = memo(({ isFlipped }) => (
  <CardContainer>
    <CardWrapper>
      <CardBack
        initial={{
          rotateY: 0,
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
      />
      <CardFront
        initial={{
          rotateY: 180,
        }}
        animate={{
          rotateY: isFlipped ? 0 : 180,
        }}
      >
        Hello World!
      </CardFront>
    </CardWrapper>
  </CardContainer>
));
