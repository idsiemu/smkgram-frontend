import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HeartFull, Comment } from "./Icons";

const Container = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;
`;

const Overlay = styled.div``;

const Number = styled.div``;

const NumberText = styled.div``;

console.log(123123);
const SquarePost = ({likeCount, commentCount, file}) => (
    <Container bg={file}>
        <Overlay>
            <Number>
                <HeartFull />
                <NumberText>{likeCount}</NumberText>
            </Number>
            <Number>
                <Comment />
                <NumberText>{commentCount}</NumberText>
            </Number>
        </Overlay>
    </Container>
);
console.log(23123);
SquarePost.propTypes = {
    likeCount: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    file: PropTypes.string.isRequired
}

export default SquarePost;