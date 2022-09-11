import express, { Request, Response } from "express";
import config from "../../config/config";
import { getAckResponse, addResultToApp,saveToDB } from "./utils";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const ack = await getAckResponse(req);
    addResultToApp(req);
    res.status(200).send(ack);
    const result=saveToDB(req,config.get('backend_uri'));
    console.log(`${config.get('bap_id')} /on_search : ${req.body.context.transaction_id}  received result from ${req.body.context.bpp_id}:${req.body.context.bpp_uri}`);
    console.log(req.body);
});

module.exports = router;