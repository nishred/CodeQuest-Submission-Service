const testing = require("./test")

const fastifyPlugin = require("fastify-plugin")


async function v1Router(fastify,options)
{

   fastify.register(testing,{prefix : "/test"})   

}
module.exports = v1Router