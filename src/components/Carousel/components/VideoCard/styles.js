import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 13px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  z-index:10;

  transition: opacity .3s;
  &:hover,
  &:focus {
    background-size: 200%;
    height:231px;
    opacity: .3;    

    z-index:999;
    width:350px
  }
  
 
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

