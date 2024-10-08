const submissionsQueue = require("../queues/submissionsQueue");


async function submissionsQueueProducer(payload)
{
   
    await submissionsQueue.add("submissionJob",payload)

}

module.exports = submissionsQueueProducer