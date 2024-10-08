const submissionsQueueProducer = require("../producers/submissiosQueueProducer")


class SubmissionsService {


   constructor()
   {



   }


   async addSubmission(submission)
   {
      const response =   await submissionsQueueProducer(submission)


      return response

    //   {
    //     "id": "someUniqueJobID",
    //     "name": "sendEmailJob",
    //     "data": payload
    //     "opts": {
    //       "attempts": 1,
    //       "delay": 0,
    //       "timestamp": 1600984200123,
    //       "repeat": null
    //     },
    //     "progress": 0,
    //     "timestamp": 1600984200123,
    //     "processedOn": null,
    //     "finishedOn": null,
    //     "returnvalue": null,
    //     "stacktrace": [],
    //     "failedReason": null
    //   }
      

   }


}


module.exports = SubmissionsService