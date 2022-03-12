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
| .../users | GET    |

Return all users as an array of objects

## GET one user by id

| URL       | METHOD |
| --------- | ------ |
| .../users/$[username} | GET

Returns one user 

## GET all messages for one user

| URL       | METHOD |
| --------- | ------ |
| .../users/${username}/messages | GET

Return ...

## /messages

## GET all messages

| URL       | METHOD |
| --------- | ------ |
| .../messages | GET    |

Return all users as an array of objects

## GET one message by id

| URL       | METHOD |
| --------- | ------ |
| .../messages/${id} | GET    |

## /me

## GET random user
