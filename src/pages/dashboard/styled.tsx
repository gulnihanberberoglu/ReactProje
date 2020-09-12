import styled, {StyledComponentBase} from "styled-components";

export const GridApp: StyledComponentBase<'div', any> = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    text-align: end;
    padding: 30px;
`;
