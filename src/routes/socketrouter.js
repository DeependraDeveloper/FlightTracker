const express=require('express');
const axios=require('axios')


function sockerRouter(io){
    const router=express.Router()

    router.get("/flight",async(req,res)=>{
        try {   
            let options = {
                method: 'get', 
               // url: `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`
                url: `https://api.aviationstack.com/v1/flights?access_key=498e29ff8a7dbe067131f3897cd65b77`
            }
            let result = await axios(options);
            let data = result.data
            return res.status(200).send({ msg:data, status: true })
        } catch (err) {
            return res.status(500).send({ msg: err.message })
        }
    })

    router.get("/airports",async(req,res)=>{
        try {   
            let options = {
                method: 'get', 
                url: `https://api.aviationstack.com/v1/airports?access_key=498e29ff8a7dbe067131f3897cd65b77`
            }
            let result = await axios(options);
            let data = result.data
            return res.status(200).send({ msg:"airpots due to the open source is not providing the api for dfree anymore", status: true })
        } catch (err) {
            return res.status(500).send({ msg: err.message })
        }
    })


    return router
}

module.exports = sockerRouter;