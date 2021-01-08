import styled from 'styled-components'

export const HeroSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0 auto;  
    
    p {
        font-size: 3.3rem;
        color: rgb(194, 193, 211);
        margin: 10rem 0 2.5rem 8rem;   

        span {
            font-weight: bold;
            display: inline-block;
            background-color: rgba(33, 57, 80, .8);
            border-radius: 10px;
            padding: 0 1rem;
            cursor: pointer;
            transition: all 1s ease-in-out;

            &:hover {
                filter: blur(10px);
            }
        }
    }

    img {
        position: absolute;
        height: 40px;
        width: 40px;
        top: 5rem;
        left: 31.5rem;
        transform: rotate(40deg);
    }
`

export const FormWrapper = styled.div`
    position: relative;
    background-color: rgba(219, 214, 219, 0.2);
    width: 60rem;
    margin: 0 auto;
    border-radius: 10px;
    padding: 2rem;  
    box-shadow: 5px 13px 24px 2px rgba(34, 60, 80, 0.2);
    
    form {
        display: flex;
        align-items: center;
        justify-content: space-between;   

        button {
            cursor: pointer;
            padding: 1.1rem 2.5rem;
            border-radius: 5px;
            border: none;
            outline: none;
            font-family: inherit;
            background-color: #425A72;
            color: #fff;
            transition: all .6s ease-in-out;

            &:hover {
                background-color: #67758F;   
            }

            &:disabled {
                cursor: not-allowed;
            }
        }
    }
`

export const ItinerariesWrapper = styled.div`
    width: 100%;
    margin: 3rem auto;
    height: 20rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem 2rem;
    font-family: inherit;  
    box-shadow: 1px 2px 11px -2px rgba(34, 60, 80, 0.2);

    p {
        font-size: 1.2rem;
        margin: .5rem 0 1rem;
    }
`