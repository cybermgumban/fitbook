import {gql} from 'apollo-boost';

const getUsersQuery = gql`
    {
        users {
            id
            email
            password
        }
    }
`

const getPostsQuery = gql`
    {
        posts {
            id
            userID
            datePublished
            content
            user{
                id
                firstName
                lastName
            }
            postcomments{
                id
                comment
                user{
                    id
                    firstName
                    lastName
                }
            }
        }
    }
`

const addAuthUserMutation = gql`
    mutation($userID: ID!, $token: String!, $tokenExpiration: Int!) {
        addUser(userID: $userID, token: $token, tokenExpiration: $tokenExpiration){
            userID
            token
            tokenExpiration
        }
    }
`

const addUserMutation = gql`
    mutation($email: String!, $password: String!, $dateRegistered: String!, $firstName: String!, $lastName: String!) {
        addUser(email: $email, password: $password, dateRegistered: $dateRegistered, firstName: $firstName, lastName: $lastName){
            email
            password
            dateRegistered
            firstName
            lastName
        }
    }
`

const addPostMutation = gql`
    mutation($userID: ID!, $datePublished: String!, $content: String!) {
        addPost(userID: $userID, datePublished: $datePublished, content: $content){
            userID
            datePublished
            content
        }
    }
`

const addPostCommentMutation = gql`
    mutation($postID: ID!, $userID: ID!, $comment: String!, $dateComment: String!) {
        addPostComment(postID: $postID, userID: $userID, comment: $comment, dateComment: $dateComment){
            postID
            userID
            comment
            dateComment
        }
    }
`

const addPostStatMutation = gql`
    mutation($postID: String!, $likeCount: Number!) {
        addPostStat(postID: $postID, likeCount: $likeCount){
            postID
            likeCount
        }
    }
`

const addFriendMutation = gql`
    mutation($userID: String!, $friendList: Array!) {
        addFriendList(userID: $userID, friendList: $friendList){
            userID
            friendList
        }
    }
`

const getPostQuery = gql`
    query($id: ID){
        user(id: $id){
            posts {
                id
                userID
                datePublished
                content
                postcomments {
                    id
                    postID
                    userID
                    comment
                    dateComment
                    user {
                        firstName
                        lastName
                    }
                }
                poststat {
                    id
                    postID
                    likeCount
                }
                user {
                    firstName
                    lastName
                    dateRegistered
                }
            }
        }
    }
`

export { getUsersQuery, 
         getPostsQuery, 
         addAuthUserMutation,
         addUserMutation, 
         addPostMutation, 
         addPostCommentMutation, 
         addPostStatMutation,
         addFriendMutation, 
         getPostQuery };