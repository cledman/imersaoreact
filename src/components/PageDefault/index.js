import React from 'react'
import styled, {css} from 'styled-components'
import Menu from '../Menu'
import Footer from '../Footer'

const Main = styled.main`
    background-color: var(--black);
    background-image: var(--mainBackground);    
    color: var(--white);
    flex:1;
    padding-left:5%;
    padding-right:5%;
    padding-top:50px;
    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `}
`

const PageDefault = ({children, paddingAll}) =>{
    return(
        <>
            <Menu />
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
            <Footer />        
        </>
    )
}

export default PageDefault