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

const server = http.createServer(app)
const io=socketIO(server)

// socket.io components
// var arrMsg=[]
var userCount=0

app.io = io
// app.arrMsg = arrMsg
//====================

app.get('/',((req,res)=>{
    return res.status(200).send(`<h1>Ini Home Page</h1>`)
}))

const { userRouter, merchantsRouter, playlistsRouter,menusRouter, custmenusRouter, chatRouter } = require('./router')

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
app.use('/chat', chatRouter)

io.on('connection', socket =>{
    console.log('user connected')
    userCount+=1
    io.emit('user connected', userCount)

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
        userCount--
        io.emit('user connected', userCount)
    })
})

app.listen(PORT, ()=>console.log(`Listening on Port - ` + PORT))