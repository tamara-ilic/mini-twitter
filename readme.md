# Mini Twitter API Documentation


## Table of Contents

### [/users](#/users)

- [GET all users](#get-all-users)
- [GET one user by id](#get-one-user-by-id)
- [GET all messages for one user](#get-all-messages-for-one-user)

### [/messages](#/messages)

- [GET all messages](#get-all-messages)
- [GET one message by id](#get-one-message-by-id)

### [/me](#/me)

- [GET Random User](#get-random-user)

## /users

## GET all users

| URL       | METHOD |
| --------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/users | GET    |

Return all users as an array of objects

## GET one user by id

| URL       | METHOD |
| --------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/users/$[username} | GET

Returns one user 

## GET all messages for one user

| URL       | METHOD |
| --------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/users/${username}/messages | GET

Returns all messages by one specific user as an array of objects

## /messages

## GET all messages

| URL       | METHOD |
| --------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/messages | GET    |

Return all users as an array of objects

## GET one message by id

| URL       | METHOD |
| --------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/messages/${id} | GET    |

## /me

## GET random user
