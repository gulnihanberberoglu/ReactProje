import styled, {StyledComponentBase} from "styled-components";

export const Container: StyledComponentBase<any, any> = styled.fieldset`
    border-radius: 3px;
    height: 340px;
    overflow-y: scroll;
`;

export const ContainerTitle: StyledComponentBase<any, any> = styled.legend`
    color: darkcyan;
    font-weight: bold;
`;
