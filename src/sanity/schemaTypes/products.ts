

// export const womanshoes = {
//     name: 'womanshoes',
//     type: 'document',
//     title: 'Women Shoes Collection',
//     fields: [
//         {
//           name: 'name',
//           type: 'string',
//           title: 'Women name',
//         },
//         {
//             name: 'description',
//             type: 'string',
//             title: 'Women description',
//         },
//         {
//             name: 'price',
//             type: 'number',
//             title: 'price',
//         },
//         {
//             name: 'image',
//             type: 'image',
//             title: 'image',
//             options: {
//                 accept: 'image/jpeg'
//               }
//         },
//     ]
// }

// export const productSchema = {
//     name: 'women', //Schema name
//     type: 'document',
//     title: 'Women Category', //Studio label Name
//     fields: [
//         {
//             name: 'id',
//             type: 'number',
//             title: 'Product id',
//         },
        
//         {
//             name: 'name',
//             type: 'string',
//             title: 'Product Name',
//         },
//         {
//             name: 'description',
//             type: 'string',
//             title: 'Description'
//         },
//         {
//             name: 'price',
//             type: 'number',
//             title: 'Product Price',
//         },
//         {
//             name: 'tag',
//             type: 'string',
//             title: 'Product tag',
//         },
//         // {
//         //     name: 'discountPercentage',
//         //     type: 'number',
//         //     title: 'Discount Percentage',
//         // },
//         // {
//         //     name: 'priceWithoutDiscount',
//         //     type: 'number',
//         //     title: 'Price Without Discount',
//         //     description: 'Original price before discount'
//         // },
//         // {
//         //     name: 'rating',
//         //     type: 'number',
//         //     title: 'Rating',
//         //     description: 'Rating of the product'
//         // },
//         // {
//         //     name: 'ratingCount',
//         //     type: 'number',
//         //     title: 'Rating Count',
//         //     description: 'Number of ratings'
//         // },
//         {
//             name: 'color',
//             title: 'Color',
//             type: 'array',
//             of: [{ type: 'string' }],
//           },
//         {
//             name: 'tags',
//             type: 'array',
//             title: 'Tags',
//             of: [{ type: 'string' }],
//             options: {
//                 layout: 'tags'
//             },
//             description: 'Add tags like "new arrival", "bestseller", etc.'
//         },
//         {
//             title: 'Detail',
//             name: 'detail',
//             type: 'array',
//             of: [{type: 'string'}]
//           },
//         // {
//         //     name: 'sizes',
//         //     type: 'array',
//         //     title: 'Sizes',
//         //     of: [{ type: 'string' }],
//         //     options: {
//         //         layout: 'tags'
//         //     },
//         //     description: 'Add sizes like S , M , L , XL , XXL'
//         // },
//         {
//             name: 'image',
//             type: 'image',
//             title: 'Product Image',
//             options: {
//                 hotspot: true // Enables cropping and focal point selection
//             }
//         }
//     ]
// };

export const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'productName',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'inventory',
        title: 'Inventory',
        type: 'number',
      },
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Using Sanity's image type for image field
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  }