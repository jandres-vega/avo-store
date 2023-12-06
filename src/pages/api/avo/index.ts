import {IncomingMessage, ServerResponse} from 'http'
import Db from "../../../../database/db";
const allAvo = async(req:IncomingMessage, res:ServerResponse) => {
    const db = new Db();
    const allEntries = await db.getAll();
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({
        length: allEntries.length,
        data: allEntries
    }))
}

export default allAvo
