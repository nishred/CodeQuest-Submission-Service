const SubmissionsController = require("../../../controllers/submissionController")


async function submissionRoutes(fastify,options)
{

   fastify.post("/",SubmissionsController.createSubmission)

}

module.exports = submissionRoutes