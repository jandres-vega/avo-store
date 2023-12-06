import {NextApiRequest, NextApiResponse} from "next";
import Db from "../../../../database/db";

const getAvoId = async(req:NextApiRequest, res:NextApiResponse) => {
    const db = new Db();

    const id = req.query.id

    const entry = await db.getById(id as string);

    res.status(200).json(entry)
}

export default getAvoId
