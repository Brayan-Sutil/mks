import styled from "styled-components";

export const Whapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    max-height: 470px; 
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
`;
