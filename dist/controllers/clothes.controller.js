"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClothes = void 0;
const createClothes = (req, res) => {
    const { name, category, brand = 'q u o c', price, quantity, sold, thumbnail, slider } = req.body;
    // ✅ TODO: Validate & Save to DB (hoặc lưu tạm)
    const newItem = {
        name,
        category,
        brand,
        price,
        quantity,
        sold,
        thumbnail,
        slider
    };
    console.log('New clothes:', newItem);
    return res.status(201).json({
        message: 'Thêm quần áo thành công',
        data: newItem
    });
};
exports.createClothes = createClothes;
