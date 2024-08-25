"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    fs_1.default.readFile(path_1.default.join(__dirname, '../courses.json'), 'utf8', (err, data) => {
        if (err)
            return res.status(500);
        return res.status(200).json(JSON.parse(data));
    });
});
app.listen(3001);
