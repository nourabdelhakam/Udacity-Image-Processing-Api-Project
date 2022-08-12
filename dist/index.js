"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeimg_1 = __importDefault(require("./routes/API/resizeimg"));
const app = (0, express_1.default)();
const port = 3030;
app.use('/api', [resizeimg_1.default]);
// app.use('/static', express.static('assets/imgs'))
// app.get('/try', (req, res) => {
//   res.sendFile(path.resolve('./') + `/assets/thumbnails/space_1_300-300.png`)
// })
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map