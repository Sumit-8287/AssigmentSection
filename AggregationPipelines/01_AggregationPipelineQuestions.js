require("mongodb");
const url =
  "mongodb+srv://sumitbudhwar74:AGyN6R9MlVSKt7n4@cluster0.xgc6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
const dbName = "AggregationData";

async function main() {
  try {
    await client.connect();
    console.log("data base is connected sucessfully");
    const db = client.db(dbName);

    const userCollection = db.collection("users");
    const reviewCollection = db.collection("reviews");
    const paymentCollection = db.collection("payments");
    const orderCollection = db.collection("orders");
    const productCollection = db.collection("products");

    // await userCollection.insertMany([
    //   {
    //     _id: 1,
    //     name: "Amit",
    //     age: 25,
    //     city: "Delhi",
    //     email: "amit@gmail.com",
    //     created_at: "2024-01-10T10:00:00Z",
    //   },
    //   {
    //     _id: 2,
    //     name: "Suman",
    //     age: 30,
    //     city: "Mumbai",
    //     email: "suman@yahoo.com",
    //     created_at: "2023-12-15T12:30:00Z",
    //   },
    //   {
    //     _id: 3,
    //     name: "Ravi",
    //     age: 22,
    //     city: "Bangalore",
    //     email: "ravi@gmail.com",
    //     created_at: "2024-02-20T08:45:00Z",
    //   },
    //   {
    //     _id: 4,
    //     name: "Priya",
    //     age: 27,
    //     city: "Kolkata",
    //     email: "priya@hotmail.com",
    //     created_at: "2024-03-01T15:20:00Z",
    //   },
    //   {
    //     _id: 5,
    //     name: "Vikram",
    //     age: 35,
    //     city: "Pune",
    //     email: "vikram@gmail.com",
    //     created_at: "2023-11-05T18:10:00Z",
    //   },
    //   {
    //     _id: 6,
    //     name: "Neha",
    //     age: 29,
    //     city: "Chennai",
    //     email: "neha@gmail.com",
    //     created_at: "2024-02-28T09:15:00Z",
    //   },
    //   {
    //     _id: 7,
    //     name: "Rahul",
    //     age: 32,
    //     city: "Hyderabad",
    //     email: "rahul@gmail.com",
    //     created_at: "2024-01-25T14:05:00Z",
    //   },
    // ]);

    // await reviewCollection.insertMany([
    //   {
    //     _id: 401,
    //     user_id: 1,
    //     product_id: 101,
    //     rating: 5,
    //     comment: "Excellent laptop!",
    //   },
    //   {
    //     _id: 402,
    //     user_id: 2,
    //     product_id: 102,
    //     rating: 4,
    //     comment: "Good phone, butbattery could be better.",
    //   },
    //   {
    //     _id: 403,
    //     user_id: 3,
    //     product_id: 103,
    //     rating: 3,
    //     comment: "Average qualityshoes.",
    //   },
    //   {
    //     _id: 404,
    //     user_id: 4,
    //     product_id: 104,
    //     rating: 4,
    //     comment: "Nice watch, lookspremium.",
    //   },
    //   {
    //     _id: 405,
    //     user_id: 5,
    //     product_id: 105,
    //     rating: 5,
    //     comment: "Amazing TV, greatdisplay!",
    //   },
    // ]);

    // await paymentCollection.insertMany([
    //   {
    //     _id: 301,
    //     order_id: 201,
    //     amount: 50000,
    //     payment_method: "Credit Card",
    //     payment_date: "2024-03-02T12:30:00Z",
    //     status: "Success",
    //   },
    //   {
    //     _id: 302,
    //     order_id: 202,
    //     amount: 40000,
    //     payment_method: "UPI",
    //     payment_date: "2024-03-05T16:00:00Z",
    //     status: "Pending",
    //   },
    //   {
    //     _id: 303,
    //     order_id: 203,
    //     amount: 9000,
    //     payment_method: "Debit Card",
    //     payment_date: "2024-03-10T09:45:00Z",
    //     status: "Failed",
    //   },
    // ]);

    // await orderCollection.insertMany([
    //   {
    //     _id: 201,
    //     user_id: 1,
    //     product_id: 101,
    //     quantity: 1,
    //     order_date: "2024-03-02T12:00:00Z",
    //     status: "Delivered",
    //   },
    //   {
    //     _id: 202,
    //     user_id: 2,
    //     product_id: 102,
    //     quantity: 2,
    //     order_date: "2024-03-05T15:45:00Z",
    //     status: "Shipped",
    //   },
    //   {
    //     _id: 203,
    //     user_id: 3,
    //     product_id: 103,
    //     quantity: 3,
    //     order_date: "2024-03-10T09:30:00Z",
    //     status: "Pending",
    //   },
    //   {
    //     _id: 204,
    //     user_id: 4,
    //     product_id: 104,
    //     quantity: 1,
    //     order_date: "2024-03-12T11:15:00Z",
    //     status: "Delivered",
    //   },
    //   {
    //     _id: 205,
    //     user_id: 5,
    //     product_id: 105,
    //     quantity: 1,
    //     order_date: "2024-03-14T08:50:00Z",
    //     status: "Cancelled",
    //   },
    // ]);

    // await productCollection.insertMany([
    //   {
    //     _id: 101,
    //     name: "Laptop",
    //     category: "Electronics",
    //     price: 50000,
    //     stock: 10,
    //     rating: 4.5,
    //   },
    //   {
    //     _id: 102,
    //     name: "Mobile",
    //     category: "Electronics",
    //     price: 20000,
    //     stock: 15,
    //     rating: 4.2,
    //   },
    //   {
    //     _id: 103,
    //     name: "Shoes",
    //     category: "Fashion",
    //     price: 3000,
    //     stock: 50,
    //     rating: 4.0,
    //   },
    //   {
    //     _id: 104,
    //     name: "Watch",
    //     category: "Fashion",
    //     price: 7000,
    //     stock: 30,
    //     rating: 4.3,
    //   },
    //   {
    //     _id: 105,
    //     name: "TV",
    //     category: "Electronics",
    //     price: 40000,
    //     stock: 5,
    //     rating: 4.6,
    //   },
    //   {
    //     _id: 106,
    //     name: "Headphones",
    //     category: "Electronics",
    //     price: 2500,
    //     stock: 25,
    //     rating: 4.1,
    //   },
    //   {
    //     _id: 107,
    //     name: "Jeans",
    //     category: "Fashion",
    //     price: 1500,
    //     stock: 60,
    //     rating: 4.0,
    //   },
    //   {
    //     _id: 108,
    //     name: "T-Shirt",
    //     category: "Fashion",
    //     price: 1200,
    //     stock: 70,
    //     rating: 3.9,
    //   },
    //   {
    //     _id: 109,
    //     name: "Refrigerator",
    //     category: "Appliances",
    //     price: 30000,
    //     stock: 8,
    //     rating: 4.7,
    //   },
    //   {
    //     _id: 110,
    //     name: "Microwave",
    //     category: "Appliances",
    //     price: 10000,
    //     stock: 12,
    //     rating: 4.4,
    //   },
    // ]);
    // console.log("sucessfully");

    console.log();
    //question --->> Basic aggregation

    // Question 1--->Find all users who are older than 30.

    // const userData = await userCollection
    //   .aggregate([{ $match: { age: { $gt: 30 } } }])
    //   .toArray();
    // console.log("data matched", userData);

    //Question  2--->Find products that cost more than ₹10,000.

    // const productData = await productCollection
    //   .aggregate([{ $match: { price: { $gt: 10000 } } }])
    //   .toArray();
    // console.log("cost  find sucessfully", productData);

    //Question   3--->Count total products in the database.

    // const productCount = (await productCollection.aggregate([]).toArray())
    //   .length;
    // console.log("total products", productCount);

    //Question  4--->Find users who registered after January 2024.

    // const timeStamps = "2024-01-25T14:05:00Z";
    // const userRegestered = await userCollection
    //   .aggregate([{ $match: { created_at: { $gt: timeStamps } } }])
    //   .toArray();
    // console.log("timeStamps", userRegestered);

    //Question 5---> Get total stock of all fashion products.

    // const productFashion = (
    //   await productCollection
    //     .aggregate([{ $match: { category: { $eq: "Fashion" } } }])
    //     .toArray()
    // ).length;
    // console.log("total fashion products find  sucessfully", productFashion);

    //Question  6-->Find all users who live in Mumbai or Delhi.

    // const userLocation = await userCollection
    //   .aggregate([
    //     {
    //       $match: {
    //         $or: [{ city: { $eq: "Mumbai" } }, { city: { $eq: "Delhi" } }],
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log("find  city", userLocation);

    //Question  7--->Find products with a rating higher than 4.5.

    // const productRating = await productCollection
    //   .aggregate([{ $match: { rating: { $gt: 4.5 } } }])
    //   .toArray();
    // console.log("greater rating 4.5 ", productRating);

    //Question  8-->Sort products by price in descending order.

    // const productPrice = await productCollection
    //   .aggregate([{ $sort: { price: -1 } }])
    //   .toArray();
    // console.log("product price in decending order", productPrice);

    //Question  9--->Display only product names and prices.

    // const productName = await productCollection
    //   .aggregate([{ $project: { name: 1, price: 1, _id: 0 } }])
    //   .toArray();
    // console.log("display only name or price", productName);

    //Question  10---> Get the average price of all products.

    // const productPrice = await productCollection
    //   .aggregate([{ $group: { _id: null, averagePrice: { $avg: "$price" } } }])
    //   .toArray();
    // console.log("average price", productPrice);

    // Questions---->>Intermediate Aggregations

    //Question 11--->Find the most expensive product in each category.

    // const productCategory = await productCollection
    //   .aggregate([
    //     { $group: { _id: "$category", expensiveProduct: { $max: "$price" } } },
    //   ])
    //   .toArray();
    // console.log("exensive products in each category",productCategory);

    //question 12--> Count how many users have placed an order.

    // const orderPlaced = (
    //   await orderCollection
    //     .aggregate([
    //       {
    //         $match: {
    //           $or: [
    //             { status: { $eq: "Delivered" } },
    //             { status: { $eq: "shipped" } },
    //           ],
    //         },
    //       },
    //     ])
    //     .toArray()
    // ).length;
    // console.log("order that are placed", orderPlaced);

    //Question  13--->Get total sales amount for all orders

    // const totalSales = await paymentCollection
    //   .aggregate([
    //     {
    //       $group: {
    //         _id: null,
    //         totalrevenve: { $sum: "$amount" },
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log(totalSales);

    //Question 14--->Find orders that are still pending.

    // const allOrder = await orderCollection
    //   .aggregate([{ $match: { status: "Pending" } }])
    //   .toArray();
    // console.log("pending array", allOrder);

    //Question  15--> Find total earnings from delivered orders.

    // const totalEarning = await orderCollection
    //   .aggregate([
    //     { $match: { status: { $eq: "Delivered" } } },
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     {
    //       $group: {
    //         _id: null,
    //         totalearning: {
    //           $sum: { $multiply: ["$quantity", "$productDetails.price"] },
    //         },
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log("total earning", totalEarning);

    //Question 16--->Find top 3 most expensive products.

    // const expensiveProduct = await productCollection
    //   .aggregate([{ $sort: { price: -1 } }, { $limit: 3 }])
    //   .toArray();
    // console.log("top 3 expensive product", expensiveProduct);

    //Question  17  -->Find users who haven't placed an order.

    // const order = await userCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "orders",
    //         localField: "_id",
    //         foreignField: "user_id",
    //         as: "orderDetails",
    //       },
    //     },
    //     { $match: { orderDetails: { $eq: [] } } },
    //   ])
    //   .toArray();
    // console.log("havenot placed an order", order);

    //Question -->18  Count how many orders were paid using UPI.

    // const orderPaid = (
    //   await paymentCollection
    //     .aggregate([{ $match: { payment_method: { $eq: "UPI" } } }])
    //     .toArray()
    // ).length;
    // console.log("payment with upi", orderPaid);

    //Question -->19  Find total revenue per category.

    // const revenve = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     {
    //       $group: {
    //         _id: "$productDetails.category",
    //         totalrevenve: {
    //           $sum: { $multiply: ["$quantity", "$productDetails.price"] },
    //         },
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log("products details", revenve);

    //Question 20-->Get all payments with a successful status

    // const payment = await paymentCollection
    //   .aggregate([{ $match: { status: "Success" } }])
    //   .toArray();
    // console.log("payment sucessfully", payment);

    //Question 21--->Join users with their orders.

    // const join = await userCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "orders",
    //         localField: "_id",
    //         foreignField: "user_id",
    //         as: "joinOrder",
    //       },
    //     },

    //     { $unwind: "$joinOrder" },
    //   ])
    //   .toArray();
    // console.log("join user with order", join);

    //Question  22--->Show all orders with user details.

    // const showOrder = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "users",
    //         localField: "user_id",
    //         foreignField: "_id",
    //         as: "showOrder",
    //       },
    //     },
    //     { $unwind: "$showOrder" },
    //   ])
    //   .toArray();
    // console.log("show all orders with users details", showOrder);

    //Question  23--->Show products with their reviews.

    // const showProducts = await productCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "reviews",
    //         localField: "_id",
    //         foreignField: "product_id",
    //         as: "showProducts",
    //       },
    //     },
    //     { $unwind: "$showProducts" },
    //     {
    //       $project: {
    //         _id: 0,
    //         name: 1,
    //         review: "$showProducts.comment",
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log("show reviews with product", showProducts);

    //Question 24  --> Find the highest-rated product.

    // const highestRating = await reviewCollection
    //   .aggregate([
    //     { $sort: { rating: -1 } },
    //     { $limit: 1 },

    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "highRating",
    //       },
    //     },
    //     { $unwind: "$highRating" },
    //     { $project: { _id: 0, rating: 1, name: "$highRating.name" } },
    //   ])
    //   .toArray();
    // console.log("highest rating ", highestRating);

    //Question  25--->Find the most frequently ordered product.

    // const orderedProduct = await orderCollection
    //   .aggregate([
    //     {
    //       $group: { _id: "$product_id", orderCount: { $sum: 1 } },
    //     },
    //     { $sort: { orderCount: -1 } },
    //     { $limit: 1 },

    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "_id",
    //         foreignField: "_id",
    //         as: "frequentlyOrdered",
    //       },
    //     },
    //     { $unwind: "$frequentlyOrdered" },
    //     {
    //       $project: {
    //         _id: 0,
    //         product_id: "$_id",
    //         name: "$frequentlyOrdered.name",
    //         orderCount: 1,
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log("frequently ordered", orderedProduct);

    //Question  26-->Get total payment amount per user.

    // const totalPayment = await userCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "orders",
    //         localField: "_id",
    //         foreignField: "user_id",
    //         as: "orderDetails",
    //       },
    //     },
    //     { $unwind: "$orderDetails" },

    //     {
    //       $lookup: {
    //         from: "payments",
    //         localField: "orderDetails._id",
    //         foreignField: "order_id",
    //         as: "totalPayment",
    //       },
    //     },
    //     { $unwind: "$totalPayment" },
    //     {
    //       $group: {
    //         _id: "$_id",
    //         name: { $first: "$name" },
    //         totalPayment: { $sum: "$totalPayment.amount" },
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log("total payment amount per user", totalPayment);

    //Question 27--->Find users who paid via credit card.

    // const paymentWithCreditCard = await paymentCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "orders",
    //         localField: "order_id",
    //         foreignField: "_id",
    //         as: "orderDetails",
    //       },
    //     },
    //     { $unwind: "$orderDetails" },
    //     { $match: { payment_method: "Credit Card" } },
    //   ])
    //   .toArray();
    // console.log("paid bt credit card", paymentWithCreditCard);

    //Question 28--->Find users who gave a review rating less than 3.

    // const result = await reviewCollection
    //   .aggregate([{ $match: { rating: { $lt: 4 } } }])
    //   .toArray();
    // console.log(result);

    //Question 29--->Get the most ordered product category.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     { $group: { _id: "$productDetails.category", count: { $sum: 1 } } },
    //     { $sort: { count: -1 } },
    //     { $limit: 1 },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question  30-->Find the number of products each user bought.

    // const result = await orderCollection
    //   .aggregate([
    //     { $group: { _id: "$user_id" }, totalProducts: { $sum: "$quantity" } },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question  31-->Find the total number of products sold in each category.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     {
    //       $group: {
    //         _id: "$productDetails.category",
    //         count: { $sum: "$quantity" },
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question  32--->Find the average rating of all products.
    // const result = await productCollection
    //   .aggregate([
    //     {
    //       $group: {
    //         _id: null,
    //         averageRating: { $avg: "$rating" },
    //       },
    //     },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question 33-->Get the list of all users along with their total order amount.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     { $group: { _id: "$user._id", totalsum: { $sum:{$multiply:["$quantity","$productDetails.price"] } } },

    //   ])
    //   .toArray();
    // console.log(result);

    //Question34--->Show products with their corresponding buyer details.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "users",
    //         localField: "user_id",
    //         foreignField: "_id",
    //         as: "orderDetails",
    //       },
    //     },
    //     { $unwind: "$orderDetails" },
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question  35--->Find users who have spent more than ₹50,000.
    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     {
    //       $group: {
    //         _id: "$user_id",
    //         spendData: {
    //           $sum: { $multiply: ["$quantity", "$productDetails.price"] },
    //         },
    //       },
    //     },
    //     { $match: { spendData: { $gte: 50000 } } },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question 36--> Get the most popular product based on the number of orders.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $group: {
    //         _id: "$_id",
    //         count: { $sum: 1 },
    //       },
    //     },
    //     { $sort: { count: -1 } },
    //     { $limit: 1 },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question  37--->Find all users who placed an order in the last 30 days.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $match: {
    //         $and: [
    //           { status: { $eq: "Delivered" } },
    //           { order_date: { $gt: "2024-03-02T12:00:00Z" } },
    //         ],
    //       },
    //     },
    //     {
    //       $lookup: {
    //         from: "users",
    //         localField: "user_id",
    //         foreignField: "_id",
    //         as: "ordered",
    //       },
    //     },
    //     { $unwind: "$ordered" },
    //   ])
    //   .toArray();
    // console.log(result);

    //OR

    // const result=await orderCollection.aggregate([
    //   {$match:{order_date:{$te:new Date}}}
    // ])

    //Question  38---> Find the highest-grossing product.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "orderDetails",
    //       },
    //     },
    //     { $unwind: "$orderDetails" },
    //     {
    //       $group: {
    //         _id: "$product_id",
    //         totalrevenve: {
    //           $sum: { $multiply: ["$quantity", "$orderDetails.price"] },
    //         },
    //       },
    //     },
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "_id",
    //         foreignField: "_id",
    //         as: "orderDetails",
    //       },
    //     },
    //     { $unwind: "$orderDetails" },
    //     { $sort: { totalrevenve: -1 } },
    //     { $limit: 1 },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question  39--->Count how many orders were cancelled.

    // const result = (
    //   await orderCollection
    //     .aggregate([{ $match: { status: "Cancelled" } }])
    //     .toArray()
    // ).length;
    // console.log(result);

    //OR

    // const result = await orderCollection
    //   .aggregate([
    //     { $match: { status: "Cancelled" } },
    //     { $group: { _id: null, count: { $sum: 1 } } },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question 40--->Find the top 3 highest-paying customers.

    // const result = await orderCollection
    //   .aggregate([
    //     {
    //       $lookup: {
    //         from: "products",
    //         localField: "product_id",
    //         foreignField: "_id",
    //         as: "productDetails",
    //       },
    //     },
    //     { $unwind: "$productDetails" },
    //     {
    //       $group: {
    //         _id: "$user_id",
    //         totalPayment: {
    //           $sum: { $multiply: ["$quantity", "$productDetails.price"] },
    //         },
    //       },
    //     },
    //     { $sort: { totalPayment: -1 } },
    //     { $limit: 3 },
    //     {
    //       $lookup: {
    //         from: "users",
    //         localField: "_id",
    //         foreignField: "_id",
    //         as: "userDetails",
    //       },
    //     },
    //     { $unwind: "$userDetails" },
    //   ])
    //   .toArray();
    // console.log(result);

    //Question 41--->Find all orders placed in March 2024.

    // const time = new Date();
    // time.setFullYear(time.getFullYear()-1);
    // time.setDate(time.getDate()-6);

    // const orderPlaced = await orderCollection.aggregate([
    //   {$match:{order_date:{$gt:'2024-03-02T12:00:00Z'}}}
    // ]).toArray();

    // console.log("order placed in march 2024",orderPlaced);

    //Question 42--->Get the count of products added in the last 6 months.

    // const recentProductsCount = await productCollection
    //   .aggregate([
    //     { $match: { created_at: { $gte: sixMonthsAgo } } },
    //     { $count: "productsAdded" }
    //   ])
    //   .toArray();

    // console.log("Count of products added in the last 6 months:", recentProductsCount);

    //Question 43-->Find the users who registered in the last year.
    // const lastYear = new Date();
    // lastYear.setFullYear(lastYear.getFullYear()-1);
    // lastYear.setMonth(lastYear.getMonth()-2);
    // lastYear.setDate(lastYear.getDate()-6)

    // const lastYearusers = await userCollection.aggregate([
    //   {$match:{created_at : {$gte:"2024-01-10T10:00:00Z"}}}
    // ]).toArray();

    // console.log(lastYearusers);

    //Question  44--->Count how many payments were made in January 2024.

    // const janf = new Date();
    // janf.setFullYear(janf.getFullYear()-1);
    // janf.setMonth(janf.getMonth()-2);
    // janf.setDate(janf.getDate()-6)

    // const janl = new Date();
    // janl.setFullYear(janl.getFullYear()-1);
    // janl.setMonth(janl.getMonth()-1);
    // janl.setDate(janl.getDate()-6)

    // const janPayments = (await userCollection.aggregate([
    //   {$match:{$and:[{payment_date:{$gte:'2024-01-10T10:00:00Z'}},{payment_date:{$lte:'2024-02-10T10:00:00Z'}}]}},
    //   // {$group:{
    //   //   _id:null,
    //   //   count:{$sum:1}
    //   // }}
    // ]).toArray()).length;

    // console.log('Payments that are held in january',janPayments,"payments");

    //Question 45--> Get the total revenue generated in the last quarter.

    // const oct = new Date();
    // oct.setMonth(oct.getMonth()-5);
    // oct.setDate(oct.getDate()-6)

    // const dec = new Date();
    // dec.setMonth(dec.getMonth()-2);
    // dec.setDate(dec.getDate()-7)

    // const revenue = await orderCollection.aggregate([
    //   {$match:{
    //     $and:[{order_date:{$gte:'2024-010-01T12:00:00Z'}},{order_date:{$lte:'2024-12-31T12:00:00Z'}}]
    //   }},
    //   {$lookup:{
    //     from:'products',
    //     localField:'product_id',
    //     foreignField:'_id',
    //     as:'productDetails'
    //   }},
    //   {$unwind:'$productDetails'},
    //   {$group:{
    //     _id:null,
    //     totalRevenu:{$sum:{$multiply:['$quantity','$productDetails.price']}}
    //   }}
    // ]).toArray();

    // console.log("total revenue in last quarter",revenue);

    //Question 46--->. Find all orders where the product price was above ₹25,000.

    // const productPrice = await orderCollection.aggregate([
    //   {$lookup:{
    //     from:'products',
    //     localField:'product_id',
    //     foreignField:'_id',
    //     as:'productDetails'
    //   }},
    //   {$unwind:'$productDetails'},
    //   {$group:{
    //     _id:'$_id',
    //     product_price:{$first:'$productDetails.price'}
    //   }},
    //   {$match:{product_price:{$gt:25000}}}
    // ]).toArray();

    // console.log("orders that are above ₹ 25000",productPrice);

    //Question  47-->Show users who haven’t reviewed any product.
    // const review = await userCollection.aggregate([
    //   {$lookup:{
    //     from:"reviews",
    //     localField:'_id',
    //     foreignField:'user_id',
    //     as:"reviewDetails"
    //   }},
    //   {$match:{reviewDetails:{$eq:[]}}}
    // ]).toArray();

    // console.log("users who haven't reviewed any products", review);

    //Question  48---> Find the number of products ordered per month in 2024.

    // const productmonth = await orderCollection.aggregate([
    //   {$group:{
    //     _id:'$order_date',
    //     monthproduct:{$first:'$quantity'}
    //   }}
    // ]).toArray();

    // console.log("number of product in every month", productmonth);

    //Question 49-->Find the user who has placed the highest number of orders.

    // const higherorder = await orderCollection.aggregate([
    //   {$group:{
    //     _id:'$order_date',
    //     monthproduct:{$first:'$quantity'},
    //     user_id:{$first:'$user_id'}
    //   }},
    //   {$sort:{monthproduct:-1}},
    //   {$limit:1},
    //   {$lookup:{
    //     from:'users',
    //     localField:'user_id',
    //     foreignField:'_id',
    //     as:'userDetails'
    //   }},
    //   {$unwind:'$userDetails'}
    // ]).toArray();

    // console.log("users who has placed the highest number of orders", higherorder);

    //Question 50-->Get the product with the highest review count.

    // const highestReview = await reviewCollecion.aggregate([
    //   {$group:{
    //     _id:'$product_id',
    //     reviewCount:{$sum:1}
    //   }},
    //   {$sort:{reviewCount:-1}},
    //   {$limit:1},
    //   {$lookup:{
    //     from:'products',
    //     localField:'_id',
    //     foreignField:'_id',
    //     as:'productDetails'
    //   }},
    //   {$unwind:'$productDetails'}
    // ]).toArray();

    // console.log("product with the highest review count",highestReview);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
