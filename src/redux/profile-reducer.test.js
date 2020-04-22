import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
//import React from "react";

let state = {
    posts: [
        { id: 1, message: 'Hi, how arre yoy?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 13 },
        { id: 3, message: 'Azaza', likesCount: 8 },
        { id: 4, message: 'lol kek lul', likesCount: 12 },
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-kam.com");
    
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kam.com");

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kam.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length should't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1001);

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});