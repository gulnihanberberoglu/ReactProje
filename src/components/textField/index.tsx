import styled, {StyledComponentBase} from 'styled-components';
const TextField: StyledComponentBase<'input', any> = styled.input`
    font-size: 1.5em;
    color: darkcyan;
    border-radius: 15px;
    background-position: 10px center;
    background-repeat: no-repeat;
    padding: 10px 5px 10px 20px;
    text-indent: 30px;
    background-image: url(https://icons.iconarchive.com/icons/graphicloads/100-flat/32/location-icon.png);
`;

export default TextField;
