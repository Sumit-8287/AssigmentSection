// require("mongodb");
const url =
  "mongodb+srv://sumitbudhwar74:AGyN6R9MlVSKt7n4@cluster0.xgc6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
const dbName = "studentUser";

async function main() {
  try {
    await client.connect();
    console.log("database is connected sucessfully");
    const db = client.db(dbName);
    const userCollection = db.collection("users");

    // await userCollection.createIndex({ email: 1 }, { unique: true });
    // console.log("unique email created");

    //  Question   1 Ek students collection banao jisme name, age, aur course fields ho. Fir ek student ka data insert karo.
    // const singleUser = await userCollection.insertOne({
    //   _id: 1,
    //   name: "sumit",
    //   age: 25,
    //   course: "html",
    // });
    // console.log("one data  is inserted sucessfully", singleUser);

    //  Qustion  2. Multiple students ka data ek sath insert karo.

    // const multipleUser = await userCollection.insertMany([
    //   { _id: 2, name: "amit", age: 23, course: "javascript" },
    //   { _id: 3, name: "ankit", age: 22, course: "c++" },
    //   { _id: 4, name: "arun", age: 22, course: "javascript" },
    //   { _id: 5, name: "manjeet", age: 22, course: "javascript" },
    //   { _id: 6, name: "monu", age: 22, course: "javascript" },
    //   { _id: 7, name: "ankur", age: 22, course: "javascript" },
    // ]);
    // console.log("all userv isinserted sucesfully", multipleUser);

    // Question  3  Ek aise student ka data insert karo jisme optional field (e.g., address) ho, lekin kuch students ke pass yeh field na ho.

    // const multipleUser = await userCollection.insertMany([
    //   { _id: 8, name: "sonu", course: "backend", address: "hisar" },
    //   { _id: 9, name: "kalu", course: "frontend", address: "rohtak" },
    // ]);
    // console.log("unique data is entered sucessfully", multipleUser);

    // Question   4 Ek unique index create karo jo ensure kare ki email duplicate na ho sake insert ke time.

    // const uniqueUser = await userCollection.insertOne({
    //   id: 10,
    //   name: "mohit",
    //   age: 45,
    //   email: "mohit@123",
    // });
    // console.log("uniqueemail is inserted sucessfully", uniqueUser);

    // Question  5  Agar koi student pehle se exist karta ho, to uska data update karo nahi to naya document insert karo (upsert use karke).

    // const filter = { email: "mohit@123" };
    // const update = {
    //   $set: { age: 21 },
    // };
    // const options = { upsert: true };
    // const result = await userCollection.updateOne(filter, update, options);
    // console.log("upsert operation sucessfully", result);

    //question 6  Sirf name aur age retrieve karo students collection se.

    // const userData = await userCollection
    //   .find({}, { projection: { name: 0, _id: 0 } })
    //   .toArray();
    // console.log("students name and age is here", userData);

    //question 7 Aise students ka data fetch karo jinki age 18 se zyada ho

    // const userData=await userCollection.find({age:{$gt:20}}).toArray();
    // console.log("all above the 18 age ",userData);

    // question 8   Sirf un students ka naam aur course fetch karo jinke paas "MERN Stack" course hai.

    // const userData=await userCollection.find({course:"html"}).toArray();
    // console.log("data is find",userData);

    // Question 9 Un students ka data fetch karo jinme "name" field missing hai.

    // const userData=await userCollection.find({name:{$exists:false}}).toArray();
    // console.log("user without name",userData);

    //  Qestion  10 Data ko descending order me sort karo based on age.

    // const userData=await userCollection.find().sort({age:-1}).toArray();
    // console.log("sort data according to  age",userData);

    // Question  11 Kisi particular student ki age update karo jiska name "Rahul" hai.

    // const updateUser=await userCollection.updateOne({name:"ankit"},{$set:{age:21}});
    // console.log("user age is updated is successfully"updateUser);

    // Question  12 Jitne bhi students ka course "Web Development" hai un sabka course "Full Stack Development" me update karo.

    // const updateUser=await userCollection.updateMany({course:"html"},{$set:{course:"fullstack"}});
    // console.log("user courze isupdated",updateUser);

    // Question  13  Kisi particular student ke document me ek naya field "grade" add karo bina purana data hataye.

    // const updateUser=await userCollection.updateMany({name:"ankit"},{$set:{grade:"a"}});
    // console.log("grade is added",updateUser);

    // Question  14 Jis student ki age 20 se kam hai, uski fees 10% increase karo.

    // const updateUser=await userCollection.updateMany({age:{$lt:20}},{$mul:{fees:1.10}})
    // console.log("fees updated",updateUser);

    // Question 15 Un students ke email field ko lowercase me update karo jinme email available hai.

    // const updateEmail = await userCollection.updateMany(
    //   { email: { $exists: true } },
    //   [{ $set: { email: { $toLower: "$email" } } }]
    // );
    // console.log("email also updated", updateEmail);

    // Question  16  Jis student ka name "Arun" hai, uska data delete karo.

    // const deleteStudent = await userCollection.deleteOne({ _id: 4 });
    // console.log("arun  data is deleted sucessfully", deleteStudent);

    // Question  17 Jitne bhi students ki age 15 se kam hai unko delete karo.

    // const deleteStudent = await userCollection.deleteMany({ age: { $lt: 15 } });
    // console.log(
    //   "lessthan  15 age student data is deleted sucessfully",
    //   deleteStudent
    // );

    // Question 18  Jis student me course ka field missing hai, unko delete karo.

    // const deleteStudent = await userCollection.deleteMany({
    //   course: { $exists: false },
    // });
    // console.log("jiska course field  nhi h  usko delete kro", deleteStudent);

    //  Question 19. Saare students ko delete karo jo 5 saal pehle insert kiye gaye the.

    // const fiveYearsAgo = new Date()
    // fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear()-5)

    // const deleteStudent = await StudentCollection.deleteMany({insertedAt:{$lt: fiveYearsAgo }});

    // console.log("5 year old data of student is now deleted",deleteStudent)

    // Question 20 Puri students collection drop karo bina database delete kiye.

    const dropStudent = await userCollection.drop();
    console.log("drop data is sucessfully", dropStudent);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
