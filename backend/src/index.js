"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const config_axios_1 = __importDefault(require("./config/config.axios"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Well done!');
});
axios_1.default.defaults.baseURL = config_axios_1.default.axios.baseURL;
axios_1.default.defaults.timeout = config_axios_1.default.axios.timeout;
axios_1.default.defaults.headers.post['Content-Type'] = config_axios_1.default.axios.contentType;
//exposeItemEndpoints(app);
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
