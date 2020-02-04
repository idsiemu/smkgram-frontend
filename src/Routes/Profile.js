import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const GET_USER = gql`
    query seeUser($name: String!) {
        seeUser(name:$name){
            id
            avatar
            name
            fullName
            isFollowing
            isSelf
            bio
            followingCount
            followersCount
            postsCount
            posts {
                id
                files {
                    url
                }
                likeCount
                commentCount
            }
        }
    }
`;

const Header = styled.header``;

export default withRouter(({match: {params :{name}}}) => {
    const { data, loading } = useQuery(GET_USER, { variables: {name}});
    if(loading){
        return <Loader />
    } else {
        console.log(data);
        return null;
    }
});