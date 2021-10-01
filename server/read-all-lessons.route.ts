
import { db } from "./database";


export function readAllLessons(req: any, res: any) {

  res.status(200).json({ lessons: db.readAllLessons() });

}