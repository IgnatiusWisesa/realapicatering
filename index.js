var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

const http=require('http')
var socketIO=require('socket.io')

const PORT = 4000

app.use(bodyParser())
app.use(cors())
app.use(bodyParser.urlencoded({ urlencoded: false }))
app.use(bodyParser.json())

app.get('/',((req,res)=>{
    return res.status(200).send(`<h1>Ini Home Page</h1>`)
}))

const { userRouter, merchantsRouter, playlistsRouter,menusRouter, custmenusRouter, chatRouter, commentsRouter, ordersRouter, transRouter, ratingRouter } = require('./router')

// router users
app.use('/users', userRouter)

// routers merchant
app.use('/merchants', merchantsRouter)

// router playlist
app.use('/playlists', playlistsRouter)

// router menus
app.use('/menus', menusRouter)

// router custom menus
app.use('/custmenus', custmenusRouter)

// router chat
// app.use('/chat', chatRouter)

// router comments
app.use('/comments', commentsRouter)

//router orders
app.use('/orders', ordersRouter)

//router transaksi
app.use('/trans', transRouter)

//router rating
app.use('/rating', ratingRouter)

app.listen(PORT, ()=>console.log(`Listening on Port - ` + PORT))

app.use(express.static('public'))
var io = socketIO(app.listen(4001, ()=>console.log(`Socket listening on Port - ` + 4001)))

var userCount=0
app.io = io

io.on('connection', function (socketIO) {
    console.log('made chat connection ',socketIO.id)
    socketIO.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })
})

io.on('connection', function (socketIO) {
    console.log('made userCount connection ',socketIO.id)
    console.log(userCount)
    userCount++
    io.sockets.emit('user connected', userCount)

    io.on('disconnect', ()=>{
        console.log('user disconnected')
        userCount--
        io.sockets.emit('user connected', userCount)
    })
})