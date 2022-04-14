import styled from 'styled-components';

const PageNavigationStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;


    & button {
        border: none;
        background-color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.8rem;
        width: 3.8rem;
        margin-left: 12px;
    }

    & select {
        border: none;
        background-color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.8rem;
        width: 5.5rem;
        margin-left: 12px;
    }
`
export default PageNavigationStyle