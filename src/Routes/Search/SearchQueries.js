import {gql} from "apollo-boost";

export const SEARCH_POSTS = gql`
    query search($term:String!){
        searchPost(term:$term){
            files {
                url
            }
            likeCount
        }
        searchUser(term:$term){
            avatar
            name
            isFollowing
        }
    }
`;