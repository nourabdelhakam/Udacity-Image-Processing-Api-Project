"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3003;
app.use('/api', index_1.default);
app.get('/', (_, res) => {
    res.status(200).send('Server working!');
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map