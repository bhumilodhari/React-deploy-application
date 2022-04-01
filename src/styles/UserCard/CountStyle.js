import Styled from 'styled-components';

const CountStyle = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.2rem;

    & .click{
        font-size: 1.2rem;
        font-weight: 800;
    }
    & .clicktext{
        font-size: 0.9rem;
        opacity: 0.5;
    }
    & .verticalLine{
        border: 0.2px solid rgba(0, 0, 0, 0.2);
        margin: 0px 12px;
    }
`
export default CountStyle