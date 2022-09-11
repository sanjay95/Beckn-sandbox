import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { createNewBapOnsearchData, getBapOnsearchData} from "../../utils/BapOnsearchData";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const platform = await createNewBapOnsearchData({ id: uuidv4(), ...req.body });
        res.status(201).send(platform);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const tId=req.query.transaction_id;
        console.log('requested transaction id is : ' +tId);
        const platforms = await getBapOnsearchData(req);
        res.status(200).send(platforms);
    } catch (error) {
        res.send(500).send(error);
    }
});

module.exports = router;