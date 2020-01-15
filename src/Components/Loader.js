import React from "react";
import styled,{keyframes} from "styled-components";
import { Logo } from "./Icons";

//인스타그램 로고 깜빡이게 하는 부분
const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
    animation: ${Animation} 1s linear infinite;
`;

export default () => (
    <Loader>
        <Logo size={36}/>
    </Loader>
);