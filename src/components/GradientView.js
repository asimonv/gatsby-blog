import React from 'react'
import styled from 'styled-components';

const Gradient = styled.div`
  background: ${props => props.top};
  background: linear-gradient(180deg, ${props => props.top} 0%, ${props => props.bottom} 100%);
`;

const GradientView = ({top, bottom, children, style}) => {
  return (
    <Gradient style={style} top={top} bottom={bottom}>{children}</Gradient>
  )
}

export default GradientView;
