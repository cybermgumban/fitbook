const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull, 
} = graphql;

const Post = require('../Models/Post');
const PostComment = require('../Models/PostComment');
const PostStat = require('../Models/PostStat');
const User = require('../Models/User');

const PostCommentType = new GraphQLObjectType ({
    name: 'PostComment',
    fields: () => ({
        id: {type: GraphQLID},
        postID: {type: GraphQLID},
        userID: {type: GraphQLID},
        comment: {type: GraphQLString},
        dateComment: {type:GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
            return User.findById(parent.userID);
            }
        }
    })
});

const PostStatType = new GraphQLObjectType ({
    name: 'PostStat',
    fields: () => ({
        id: {type: GraphQLID},
        postID: {type: GraphQLID},
        likeCount: {type: GraphQLInt},
    })
});

const PostType = new GraphQLObjectType ({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLID},
        userID: {type: GraphQLID},
        datePublished: {type: GraphQLString},
        content: {type:GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
            return User.findById(parent.userID);
            }
        },
        postcomments: {
            type: new GraphQLList(PostCommentType),
            resolve(parent, args) {
            return PostComment.find({postID: parent.id});
            }
        },
        poststat: {
            type: PostStatType,
            resolve(parent, args) {
            return PostStat.findById(parent.postID);
            }
        },
    })
});

const UserType = new GraphQLObjectType ({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLID},
        userName: {type: GraphQLID},
        email: {type: GraphQLString},
        password: {type:GraphQLString},
        dateRegistered: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type:GraphQLString},
        gender: {type:GraphQLString},
        dateOfBirth: {type:GraphQLString},
        occupation: {type:GraphQLString},
        about: {type:GraphQLString},
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
            return Post.find({userID: parent.id});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
            return User.find();
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
            return User.findById(args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
            return Post.find();
            }
        },
        postcomments: {
            type: new GraphQLList(PostCommentType),
            resolve(parent, args) {
            return PostComment.find();
            }
        },
        poststat: {
            type: PostStatType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
            return PostStat.findById(args.id);
            }
        },
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                userName: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
                dateRegistered: {type: new GraphQLNonNull(GraphQLString)},
                firstName: {type: new GraphQLNonNull(GraphQLString)},
                lastName: {type: new GraphQLNonNull(GraphQLString)},
                gender: {type: new GraphQLNonNull(GraphQLString)},
                dateOfBirth: {type: new GraphQLNonNull(GraphQLString)},
                occupation: {type: new GraphQLNonNull(GraphQLString)},
                about: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                let user = new User({
                    userName: args.userName,
                    email: args.email,
                    password: args.password,
                    dateRegistered: args.dateRegistered,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    gender: args.gender,
                    dateOfBirth: args.dateOfBirth,
                    occupation: args.occupation,
                    about: args.about,
                });
                return user.save();
            }
        },
        addPost: {
            type: PostType,
            args: {
                userID: {type: new GraphQLNonNull(GraphQLID)},
                datePublished: {type: new GraphQLNonNull(GraphQLString)},
                content: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                let post = new Post({
                    userID: args.userID,
                    datePublished: args.datePublished,
                    content: args.content,
                });
                return post.save();
            }
        },
        addPostComment: {
            type: PostCommentType,
            args: {
                postID: {type: new GraphQLNonNull(GraphQLID)},
                userID: {type: new GraphQLNonNull(GraphQLID)},
                dateComment: {type: new GraphQLNonNull(GraphQLString)},
                comment: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                let postcomment = new PostComment({
                    postID: args.postID,
                    userID: args.userID,
                    dateComment: args.dateComment,
                    comment: args.comment,
                });
                return postcomment.save();
            }
        },
        addPostStat: {
            type: PostStatType,
            args: {
                postID: {type: new GraphQLNonNull(GraphQLID)},
                likeCount: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parent, args) {
                let poststat = new PostStat({
                    postID: args.postID,
                    likeCount: args.likeCount,
                });
                return poststat.save();
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})