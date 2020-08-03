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
    border-color:#fff !important;
    height:231px;
    border-left:-0px 0 17px #0ff;
    top:-10px;
    z-index:999;
    width:350px;
    box-shadow:
    inset 0 0 5px #fff,
    inset 2px 0 8px #f0f,
    inset -2px 0 18px #0ff,
    inset 2px 0 3px #f0f,
    inset -2px 0 3px #0ff,

    -10px 0px 20px #fff,
    10px 0px 80px #f0f,
    -0px 0 112px #0ff;
        

  }
  
 
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

