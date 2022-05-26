const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product Title name is required"],
            min: [3, "Product Title must be at least 3 characters long."],
            unique: true
        },
        type: {
            type: String,
            required: [true, "Product must have a type to be listed."],
            enum: [
                'Chocolate',
                'Nut-Butter',
                'Honey',
                'Mixed',
                'Custom',
                'Other'
            ],
        },
        brand: {
            type: String,
            required: [true, "Products must have a brand."],
        },
        details: {
            type: String,
            required: [true, "Product must have details to be listed."],
            min: [10, "Product details must be at least 10 characters long."],
        },
        contains: {
            type: [String],
        },
        flavors: {
            type: String,
        },
        price: {
            type: Number,
            required: [true, "Product must have a price."],
            min: [0, "Product price must contain a positive value."]
        },
        photos: {
            type: [String],
            default: "",
        },

        reviews: {
            type: [String],
        },
    },
    {
        timestamps: true,
    },
);

//validate product not already in db
ProductSchema.path('title').validate(async (title) => {
    const productCount = await mongoose.models.Product.countDocuments({title})
    return !productCount
}, 'Product already in Database. Did you want to add a new flavor?')


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;