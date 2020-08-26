import styled from 'styled-components';

const Loading = styled.div`
    border: 6px solid #bbb;
    border-radius: 50%;
    border-top: 6px solid #E7512F;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
    position: relative;
    top: 50%;
    left: 50%;
`;

export default Loading;