const v1Router = require("./api/v1/v1Router")
const fastifyPlugin = require("fastify-plugin")


async function apiRouter(fastify,options)
{

    fastify.register(v1Router,{prefix: "/v1"})

}

module.exports = apiRouter