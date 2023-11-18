import { FC } from 'react';
import { StyledMainContainer } from './styled-components';
import { MainContainerProps } from './types';

export const MainContainer: FC<MainContainerProps> = ({ children }) => (
  <StyledMainContainer>{children}</StyledMainContainer>
);
