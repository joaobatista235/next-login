import { styled } from "styled-components";
import { motion } from "framer-motion";
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 80px;
`

export const Logo = styled.div`

`

export const Menu = styled.div`

    &> .desktop{
        display: flex;
    }
    & > .mobile{
        display: none;
    }
    @media screen and (max-width: 900px) {
        &> .desktop{
            display: none;
        }
        & > .mobile{

            display: flex;
       
            & > .popup{
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 1rem;
                background-color: white;
                box-shadow: 0 0 10px rgba(0,0,0,0.10);
                top: 0;
                right: 0;
                width: 100%;
                height: 100vh;
                border-radius: 10px;

                & > img{
                    position: absolute;
                    display: flex;
                    justify-content: flex-end;
                    top: 10px;
                    right: 10px;
                }
            }
        }
      
    }
`

export const Item = styled(motion.li)`
    margin-left: 20px;
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 900px) {
      margin: 0;
    }
`
