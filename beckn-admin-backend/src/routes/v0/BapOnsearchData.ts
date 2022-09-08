import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { createNewBapOnsearchData, getAllBapOnsearchDatas } from "../../utils/BapOnsearchData";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        const platform = await createNewBapOnsearchData({ id: uuidv4(), ...req.body });
        res.status(201).send(platform);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/bpp", async (req: Request, res: Response) => {
    try {
        const platforms = await getAllBapOnsearchDatas();
        res.status(200).send(platforms);
    } catch (error) {
        res.send(500).send(error.message);
    }
});

module.exports = router;