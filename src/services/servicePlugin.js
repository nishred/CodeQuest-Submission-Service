const fp = require("fastify-plugin")
const SubmissionsService = require("./SubmissionsService")

async function servicePlugin(fastify,options)
{
    fastify.decorate("submissionsService",new SubmissionsService())

}

module.exports = fp(servicePlugin)