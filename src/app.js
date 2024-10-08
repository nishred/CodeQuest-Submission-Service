const fastifyPlugin = require("fastify-plugin")
const testController = require("./controllers/testController")
const servicePlugin = require("./services/servicePlugin")
const apiRouter = require("./routes")




async function app(fastify,options)
{
    fastify.register(require("@fastify/cors"))

    
    fastify.register(apiRouter,{prefix : "/api"})


    fastify.register(servicePlugin)


}


module.exports = fastifyPlugin(app)
