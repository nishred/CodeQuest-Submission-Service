const app = require("./app")

const fastify = require("fastify")({logger : true})

const port = 3001

fastify.register(app)

fastify.listen({port : port},(err) => {

    if(err)
      console.log(err)
    else
    console.log("The server has started listening on port 3000");

})



