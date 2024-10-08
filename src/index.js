const app = require("./app")
const { PORT } = require("./config/serverConfig")

const fastify = require("fastify")({logger : true})


fastify.register(app)

fastify.listen({port : PORT},(err) => {

    if(err)
      console.log(err)
    else
    console.log("The server has started listening on port 3000");

})





