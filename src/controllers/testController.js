

async function test(req,res)
{
    
 
     res.send({msg : await this.testService.dummy()})

}

module.exports = {test}



//every controller function has access to a fastify object  console.log(this)



