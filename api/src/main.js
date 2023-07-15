"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var route = (0, express_1.Router)();
app.use(route);
route.get("/api", function (_req, res) {
    return res.json({ message: "Hello world" });
});
exports.default = app;
