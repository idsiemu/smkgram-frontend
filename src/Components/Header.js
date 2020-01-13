import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { HeartEmpty, Compass, User, Logo } from "./Icons";

const Header = styled.header`
    width:100%;
    border: 0;
    background-color: white;
    border-bottom: ${props => props.theme.boxBorder};
    border-radius: 0px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
`;

const HeaderWrapper = styled.div`
    width:100%;
    max-width:${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
`;

const HeaderColumn = styled.div`
    width: 33%;
    text-align: center;
    &:first-child{
        margin-right: auto;
        text-align: left;
    }
    &:last-child{
        margin-left: auto;
        text-align: right;
    }
`;

const SearchInput = styled(Input)`
    background-color:${props => props.theme.bgColor};
    padding:5px;
    font-size:14px;
    height: auto;
    border-radius: 3px;
    text-align:center;
    width : 100%;
    &::placeholder {
        opacity: 0.8;
        font-weight: 200;
    }
`;

const HeaderLink = styled(Link)`
    &:not(:last-child){
        margin-right:30px;
    }
`;

export default () => {
    const search = useInput("");
    const onSearchSubmit = e => {
        e.preventDefault();
    }
    return (
        <Header>
        <HeaderWrapper>
            <HeaderColumn>
                <Link to="/">
                    <Logo/>
                </Link>
            </HeaderColumn>
            <HeaderColumn>
                <from onSubmit={onSearchSubmit}>
                    <SearchInput {...search} placeholder="search"/>
                </from>
            </HeaderColumn>
            <HeaderColumn>
                <HeaderLink to="/explore">
                    <Compass />
                </HeaderLink>
                <HeaderLink to="/notifications">
                    <HeartEmpty/>
                </HeaderLink>
                <HeaderLink to="/username">
                    <User/>
                </HeaderLink>
            </HeaderColumn>
        </HeaderWrapper>
    </Header>
    );
};