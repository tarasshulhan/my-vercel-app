import React from 'react';
import styled, {keyframes} from 'styled-components';

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transform: scale(2); //-> start of animation
  opacity: 0; //-> start of animation
  animation: ${kf} 0.4s ease-in-out forwards;
`
const StyledImage = styled.img`
  width: 50%
`
const StyledParagraph = styled.p`
  margin-left: 15%;
  margin-right: 15%;
  font-size: 1.25rem;
`

const Picture = props => {
    const { picUrl, picTitle, picDesc } = props;
  
    return (
      <StyledContent>
        <h1>{picTitle}</h1>
        <StyledImage
            alt={picTitle}
            className='image'
            src={picUrl}
        />
        <StyledParagraph>{picDesc}</StyledParagraph>
      </StyledContent>
    );
  };
  
  export default Picture;
  