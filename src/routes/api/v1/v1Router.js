const submissionRoutes = require("./submissionRoutes")



async function v1Router(fastify,options)
{

   fastify.register(submissionRoutes,{prefix : "/submissions"})


}

module.exports = v1Router