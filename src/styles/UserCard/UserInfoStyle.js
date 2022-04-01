import styled from "styled-components";

const UserInfoStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.8rem;
    flex-direction: column;

    & h4{
        margin-top: 0.4rem;
        font-size: 1rem;
    }

    & p{
        margin-top: 0.4rem;
        opacity: 0.5;
    }

    & button{
        color: white;
        background-color: #ffa319;
        border: none;
        width: 10rem;
        height: 2rem;
        font-size: 14px;
        font-weight: 500;
        border-radius: 5px;
        margin-top: 0.5rem;
    }

`
export default UserInfoStyle