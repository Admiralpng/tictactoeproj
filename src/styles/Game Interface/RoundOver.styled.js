import styled from "styled-components"

export const RoundOver = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    ${(props) => props.theme.media.mobile}{
        .title{
            font-size: 14px;
        };
    }
,
    .title{
        font-size: 26px;
        -webkit-text-fill-color: rgb(246, 248, 109);
        -webkit-text-stroke: 1px #202124; 
        margin: 0;
    }
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify content: space-between;
    text-align: center; 
    color: #202124;
    font-size: 1.2rem;
    padding: 10px;
    margin: 0;
    ${(props) => props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        justify content: center;
        row-gap: 8px;
        margin: 14px 0px;
        ,
        .scoreboard{
            font-size: 0.8rem
            margin: 0;
        }
        ,
        .victor{
            font-size: 1.2rem;
        }
    }
    ,
    .scoreboard{
        font-size: 1.1rem;
        color: #202124; 
    }
    ,
    .victor{
        font-size: 2rem;
        -webkit-text-fill-color: rgb(246, 248, 109);
        -webkit-text-stroke: 2px #202124;
        margin: 10px 0px 18px 
    }
`

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    row-gap: 20px;
    flex-wrap: wrap;
`