import {gql} from 'apollo-boost';

const getUsersQuery = gql`
    {
        users {
            userName
            email
            password
            dateRegistered
            firstName
            lastName
            gender
            dateOfBirth
            occupation
            about
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

const addUserMutation = gql`
    mutation($userName: String!, $email: String!, $password: String!, $dateRegistered: String!, $firstName: String!, $lastName: String!, $gender: String!, $dateOfBirth: String!, $occupation: String!, $about: String!) {
        addUser(userName: $userName, email: $email, password: $password, dateRegistered: $dateRegistered, firstName: $firstName, lastName: $lastName, gender: $gender, dateOfBirth: $dateOfBirth, occupation: $occupation, about: $about){
            userName
            email
            password
            dateRegistered
            firstName
            lastName
            gender
            dateOfBirth
            occupation
            about
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

const getPostQuery = gql`
    query($id: ID){
        user(id: $id){
            userName
            email
            password
            dateRegistered
            firstName
            lastName
            gender
            dateOfBirth
            occupation
            about
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
                }
                poststat {
                    id
                    postID
                    likeCount
                }
            }
        }
    }
`

export { getUsersQuery, 
         getPostsQuery, 
         addUserMutation, 
         addPostMutation, 
         addPostCommentMutation, 
         addPostStatMutation, 
         getPostQuery };