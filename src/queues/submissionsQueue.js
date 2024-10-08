const {Queue} = require("bullmq");
const redisConnection = require("../config/redisConfig");


const submissionsQueue = new Queue("submissionsQueue",{connection : redisConnection});

module.exports = submissionsQueue
