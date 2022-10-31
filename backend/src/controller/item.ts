import { Application, Request, Response } from "express";
import { getItems } from "../services/meliService";
const _controllerRoute = '/api/items'



export const exposeItemEndpoints = (app: Application) => {
    console.log('Register ' + _controllerRoute)
    return app.get(_controllerRoute, (req: Request, res: Response) => {
        console.log(`request: ${req}`);
        console.log(`quest: ${req.query}`)
        const query = req.query.q;

        console.log(`text to search: ${query}`)

        if (!query)
            return res.status(204);

        //get data from external resource
        return getItems(query.toString())
    }
    )
}
