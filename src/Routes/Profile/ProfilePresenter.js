import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import {Helmet} from "react-helmet";
import Avatar from "../../Components/Avatar";
import { withRouter } from "react-router-dom";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
    min-height:100vh;
`;

const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:80%;
    margin:0 auto;
    margin-bottom:40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
    display: flex;
    align-itmes:  center;
`;

const Username = styled.span`
    font-size: 26px;
    display:block;
`;

const Counts = styled.ul`
    display: flex;
    margin: 15px 0px;
`;

const Count = styled.li`
    font-size:16px;
    $:not{:last-child} {
        margin-right: 10px;
    }
`;

const FullName = styled(FatText)`
    font-size:14px;
`;

const Bio = styled.p`
    margin: 10px 0px;
`;

const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 200px;
    grid-auto-rows: 200px;
`;

export default withRouter(({loading, data}) => {
    if(loading === true){
        return (
            <Wrapper>
                <Loader />
            </Wrapper>
        );
    } else if(!loading && data && data.seeUser){
        const {
            seeUser : {
                id,
                avatar,
                name,
                fullName,
                isFollowing,
                isSelf,
                bio,
                followingCount,
                followersCount,
                postsCount,
                posts
            }
        } = data;
        return (
            <Wrapper>
                <Helmet>
                    <title>{name} | Smkgram</title>
                </Helmet>
                <Header>
                    <HeaderColumn>
                        <Avatar size="lg" url={avatar}/>
                    </HeaderColumn>
                    <HeaderColumn>
                        <UsernameRow>
                        <Username>{name}</Username>{!isSelf && <FollowButton id={id} isFollowing={isFollowing} />}
                        </UsernameRow>
                        <Counts>
                            <Count>
                                <FatText text={postsCount} /> posts
                            </Count>
                            <Count>
                                <FatText text={followersCount} /> followers
                            </Count>
                            <Count>
                                <FatText text={followingCount} /> following
                            </Count>
                        </Counts>
                        <FullName text={fullName} />
                        <Bio>{bio}</Bio>
                    </HeaderColumn>
                </Header>
                <Posts>
                        {Posts &&
                            posts.map(post =>(
                                <SquarePost
                                    key={post.id}
                                    likeCount={post.likeCount}
                                    commentCount={post.commentCount}
                                    file={post.files[0]}
                                />
                            ))
                        }
                </Posts>
            </Wrapper>
        );
    }
    return null;
});