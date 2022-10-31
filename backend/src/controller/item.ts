import { Application, Request, Response } from "express";
const _controllerRoute = '/api/items'



export const exposeItemEndpoints = (app: Application) => {
    return app.get(_controllerRoute, (req: Request, res: Response) => {
        const query = req.query.q;

        if (!query)
            return res.status(204);

        //get data from external resource

    }
    )
}