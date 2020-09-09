import styled from 'styled-components';
let FormButton = styled.div`
    display: inline-block;
    border-radius: 4px;
    background-color: #d47e5e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    padding: 5px;
    width: 80px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    position: relative;
    :after {
        content: url('https://icons.iconarchive.com/icons/iconsmind/outline/16/Next-2-icon.png');
        position: relative;
        opacity: 0;
        top: 0;
        float: right;
        right: -20px;
        transition: 0.5s;
      }
      :hover {
        padding-right: 10px;
      }
      :hover:after {
        opacity: 1;
        right: 0;
      }
`;

export default FormButton;