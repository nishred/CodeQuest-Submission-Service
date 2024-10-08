
async function testing(fastify,options)
{

    fastify.get("/",(req,res) => {
       res.send({
        msg : "Outreachy"
       })
    })


}

module.exports = testing

