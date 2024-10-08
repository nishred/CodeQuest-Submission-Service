const testController = require("../controllers/testController")

async function apiRouter(fastify,options)
{

    fastify.get("/ping",testController.test)


}

module.exports = apiRouter


//By default if you have a routing function which takes the fastify object and just registers the routes, you don't need to wrap it in a fastifyPlugin

