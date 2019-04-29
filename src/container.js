const { createContainer, asClass, asFunction, asValue } = require('awilix')
const { scopePerRequet } = require('awilix-koa')

const config = require('../config') // TODO : database.js
const Application = require('./app/Application')
const {
  CreateUser,
  DeleteUser, 
  GetAllUsers,
  GetUser,
  UpdateUser
} = require('./app/user') // TODO

const UserSerializer = require('./interfaces/http/user/UserSerializer')

const Server = require('./interfaces/http/Server')











/**
 * https://www.npmjs.com/package/awilix
 * https://www.npmjs.com/package/awilix-koa
 */