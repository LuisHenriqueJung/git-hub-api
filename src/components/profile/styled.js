import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;
export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center;
    }
    
`;
export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    h3{
        margin-right: 4px;
    }
`;
export const WrapperUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    justify-content: space-between;
    height: 200px;
    h1{
        font-size: 32px;
        font-weight: bold;
    }
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;
export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 150px;
    margin: 8px;
`;