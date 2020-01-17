import React from "react";
import styled from "styled-components";
import FatText from "../FatText";
import Avatar from "../Avatar";

const Post = styled.div`
    ${props => props.theme.whiteBox};
    width:100%;
    max-width:600px;
`;

const Header = styled.header``;

const UserColumn = styled.div``;

const Location = styled.div``;

export default ({user:{name, avatar}, location}) => (
    <Post>
        <Header>
            <Avatar size="sm" url={avatar}/>
            <UserColumn>
                <FatText text={name} />
                <Location>{location}</Location>
            </UserColumn>
        </Header>
    </Post>
);