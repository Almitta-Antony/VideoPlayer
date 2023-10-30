//import json server
const jsonserver=require('json-server')

//create json server
const server=jsonserver.create()

//import cors
const cors=require('cors')

//json type data need to be converted to js type data before resolving the server request
//Only Middleware can control the server request.

//if we apply middleware in server, the middleware will work before the request

const middleware=jsonserver.defaults()

//create a router
const router=jsonserver.router('db.json')

//applying middleware in server
server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000
server.listen(PORT,()=>{
    console.log(`___Json Server started at Port : ${PORT}____ `);
})