"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    const url = req.url;
    console.log(`${url} has been visited`);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map