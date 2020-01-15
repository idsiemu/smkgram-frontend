import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    margin: 50px 0px;
`;

const List = styled.ul`
    display: felx;
`;

const ListItem = styled.li`
    &:not(:last-child){
        margin-right:16px
    }
`;

const Link = styled.a`
    color: ${props => props.theme.darkBuleColor};
`;

const Copyright = styled.span`
    color: ${props => props.theme.darkGreyColor};
`;

export default () => (
    <Footer>
        <List>
        <ListItem><Link herf="#">ABOUT US</Link></ListItem>
        <ListItem><Link herf="#">SUPPORT</Link></ListItem>
        <ListItem><Link herf="#">PRESS</Link></ListItem>
        <ListItem><Link herf="#">API</Link></ListItem>
        <ListItem><Link herf="#">JOBS</Link></ListItem>
        <ListItem><Link herf="#">PRIVACY</Link></ListItem>
        <ListItem><Link herf="#">TERMS</Link></ListItem>
        <ListItem><Link herf="#">DIRECTORY</Link></ListItem>
        <ListItem><Link herf="#">PROFILES</Link></ListItem>
        <ListItem><Link herf="#">HASHTAGS</Link></ListItem>
        <ListItem><Link herf="#">LANGUAGE</Link></ListItem>
        </List>
        <Copyright>
            Instaclone{new Date().getFullYear()} &copy;
        </Copyright>
    </Footer>
);


