"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exposeItemEndpoints = void 0;
const meliService_1 = require("../services/meliService");
const _controllerRoute = '/api/items';
const exposeItemEndpoints = (app) => {
    console.log('Register ' + _controllerRoute);
    return app.get(_controllerRoute, (req, res) => {
        console.log(`request: ${req}`);
        console.log(`quest: ${req.query}`);
        const query = req.query.q;
        console.log(`text to search: ${query}`);
        if (!query)
            return res.status(204);
        //get data from external resource
        return (0, meliService_1.getItems)(query.toString());
    });
};
exports.exposeItemEndpoints = exposeItemEndpoints;
