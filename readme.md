# Mini Twitter API Documentation

## Table of Contents

### [/users](#/users)

- [x] [GET all users](#get-all-users)
- [x] [GET one user by username](#get-one-user-by-username)
- [x] [GET all messages for one user](#get-all-messages-for-one-user)

### [/messages](#/messages)

- [x] [GET all messages](#get-all-messages)
- [x] [GET one message by id](#get-one-message-by-id)

### [/me](#/me)

- [ ] [GET Random User](#get-random-user)

## /users

## GET all users

| URL                                                | METHOD |
| -------------------------------------------------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/users | GET    |

Return all users as an array of objects

## GET one user by username

| URL                                                      | METHOD |
| -------------------------------------------------------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/users/$[id} | GET    |

Returns one user

## GET all messages for one user

| URL                                                                    | METHOD |
| ---------------------------------------------------------------------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/users/${user_id}/messages | GET    |

Returns all messages by one specific user as an array of objects

## /messages

## GET all messages

| URL                                                   | METHOD |
| ----------------------------------------------------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/messages | GET    |

Return all users as an array of objects

## GET one message by id

| URL                                                         | METHOD |
| ----------------------------------------------------------- | ------ |
| https://mini-twitter-crossover.herokuapp.com/messages/${id} | GET    |

## /me

## GET random user
