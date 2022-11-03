import { Router } from "express";
import { getItems, getOneItem } from "../services/meliService";

const CONTROLLER_ROUTE_NAME = '/api/items';
const _controllerRoute = Router();
console.log('Using Item Controller')

// Endpoint to search items by query
_controllerRoute.get(CONTROLLER_ROUTE_NAME, async (req, res) => {
    const search = req.query.search;
    console.log('Getting All User by query \r\n query:' + search)

    //Valido Request
    if (!search)
        return res.status(400).send({ message: "Ingrese un parametro de búsqueda (?search=:searchText)" })

    await getItems(search.toString()).then((data) => {
        console.log('Everything is OK')
        res.status(data && data.items.length > 0 ? 200 : 204).json(data)
    }).catch((error) => {
        console.log("an Error was catched when it try to get data from external server" + error)
        res.status(error.status | 500).send({ message: JSON.stringify(error) });
    });

});

// Endpoint to finde one item
_controllerRoute.get(CONTROLLER_ROUTE_NAME + '/:id', async (req, res) => {
    const id = req.params.id;

    //Valido Request nulo
    if (!id)
        return res.status(400).send({ message: "Ingrese un id" })

    await getOneItem(id).then((data) => {
        res.status(data && data.item ? 200 : 204).json(data)
    }).catch((error) => {
        res.status(error.response.status || 500).send({ message: error.response.statusText });
    });

});

export default _controllerRoute;