"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const axios_1 = __importDefault(require("axios"));
const config_author_1 = __importDefault(require("../config/config.author"));
const getItems = (text) => __awaiter(void 0, void 0, void 0, function* () {
    if (!text)
        throw 'Ingrese un parametro de búsqueda';
    const response = yield axios_1.default.get('search?q=' + text);
    return dataTransform(response.data);
});
exports.getItems = getItems;
const dataTransform = (data) => {
    if (!data || !data.results)
        return {
            author: config_author_1.default.author,
            categories: [], items: []
        };
    return {
        author: config_author_1.default.author,
        categories: data.results.map(r => r.category_id),
        items: data.results.map((m) => {
            var _a;
            return {
                id: m.id,
                title: m.title,
                price: priceTransform(m.prices.find(p => p.amount === m.price)),
                picture: m.thumbnail,
                condition: m.condition,
                free_shipping: (_a = m.shipping) === null || _a === void 0 ? void 0 : _a.free_shipping
            };
        })
    };
};
const priceTransform = (c) => ({
    currency: c.currency_id,
    amount: c.amount,
    decimals: 0
});
