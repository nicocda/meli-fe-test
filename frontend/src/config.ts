import { appendFile } from "fs";

const backendUrl = 'http://localhost:3001';
export default {
    app: {
        BaseBackendUrl: backendUrl
    },
    axios: {
        headers: [{ key: "Access-Control-Allow-Origin", value: backendUrl }]
    }
}