"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clothes_controller_1 = require("../controllers/clothes.controller");
const router = express_1.default.Router();
router.post('/', clothes_controller_1.createClothes);
exports.default = router;
