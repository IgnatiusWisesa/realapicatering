const userRouter = require('./userRouter')
const merchantsRouter = require('./merchantsRouter')
const playlistsRouter = require('./playlistsRouter')
const menusRouter = require('./menusRouter')
const custmenusRouter = require('./custmenusRouter')
const chatRouter = require('./chatRouter')
const commentsRouter = require('./commentsRouter')
const ordersRouter = require('./ordersRouter')
const transRouter = require('./transRouter')
const ratingRouter = require('./ratingRouter')

module.exports = { 
    userRouter,
    merchantsRouter,
    playlistsRouter,
    menusRouter,
    custmenusRouter,
    chatRouter,
    commentsRouter,
    ordersRouter,
    transRouter,
    ratingRouter
}