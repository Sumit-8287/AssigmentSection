require("mongodb");
const url =
  "mongodb+srv://sumitbudhwar74:AGyN6R9MlVSKt7n4@cluster0.xgc6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
const dbName = "advancedstudentdata";
async function main() {
  try {
    await client.connect();
    console.log("data base is connect sucessfully");
    const db = client.db(dbName);
    const userCollection = db.collection("users");

    // await userCollection.createIndex({ email: 1 }, { unique: true });

    //question 1  ● Atomic Insert with Condition: Ek student ka data insert karo sirf agar uska age 18+ hai,
    // nahi toh insertion ko reject karo.
    // const studentData = {
    //     _id: 57,
    //     name: 'Rahul',
    //     age: 21,
    //     course: ['full stack web developer', 'App development'],
    //     email: 'Rahul123@gmail.com',
    //     address: 'Rohtak',
    //     fees: 20000
    //   };

    //   if (studentData.age >= 18) {
    //     const SingleStudent = await StudentCollection.insertOne(studentData);
    //     console.log("single student added", SingleStudent);
    //   } else {
    //     console.log("Insertion rejected: Student age is less than 18");
    //   }

    //     Question 2 -->Bulk Insert with Random Data: 50 random students ka data ek sath insert karo jisme
    // randomly generated names, age (15-30), courses ho.

    // const courses = ["Web Development", "App Development", "Machine Learning", "Data Science", "Cyber Security"];
    //         const students = [];

    //         for (let i = 1; i <= 50; i++) {
    //             const student = {
    //                 _id:i,
    //                 name: faker.name.findName(),
    //                 age: Math.floor(Math.random() * 16) + 15,
    //                 course: courses[Math.floor(Math.random() * courses.length)],
    //                 email: faker.internet.email(),
    //                 address: faker.address.city(),
    //                 fees: Math.floor(Math.random() * 10000) + 1000
    //             };
    //             students.push(student);
    //         }

    //         const result = await StudentCollection.insertMany(students);
    //         console.log("50 Students data is successfully added with randomly generated name and age...", result);

    //     Question 3 Conditional Optional Field: Ek student ka data insert karo jisme "scholarship" field sirf un
    // students ke liye ho jinki age 22+ hai.

    // const courses = ["Web Development", "App Development", "Machine Learning", "Data Science", "Cyber Security"];

    //             const student = {
    //                 _id:51,
    //                 name: faker.name.findName(),
    //                 age: Math.floor(Math.random() * 16) + 15,
    //                 course: courses[Math.floor(Math.random() * courses.length)],
    //                 email: faker.internet.email(),
    //                 address: faker.address.city(),
    //                 fees: Math.floor(Math.random() * 10000) + 1000,
    //                 ScholarShip:'Available'
    //             };

    //             if(student.age>22){
    //                 const newStudent = await StudentCollection.insertOne(student);
    //                 console.log("Scholorship field added in one student", newStudent);
    //             }
    //             else{
    //                 console.log("age is less than 22 so you can't get scholarship");
    //             }

    //QUESTION 4 Index on Multiple Fields: Unique index banayo jo ensure kare ki name + age ka
    // combination duplicate na ho sake.

    // await userCollection.createIndex({ name: 1, age: 1 }, { unique: true });
    //     // console.log("sucessfully");

    // question   5  Insert with Timestamp: Jab bhi koi student insert ho, usme automatically ek "createdAt"
    // field add ho jo current timestamp store kare.

    // const data = {
    //   _id: 11,
    //   name: "saamu",
    //   age: 34,
    //   course: "react",
    //   email: "saamu@123",
    //   createdAt: "123456789",
    // };
    // const timestamp = await userCollection.insertOne(data);
    // console.log("data is createdAt is sucessfully", timestamp);

    // question  6  Regex Search: Aise students ka data fetch karo jinke naam me "sh" aata ho (e.g.,
    // Ashish, Rishabh).

    // const regex = await userCollection
    //   .find({ name: { $regex: "s" } })
    //   .toArray();
    // console.log("find the name with s", regex);

    //question 7  Projection with Computed Field: Sirf "name", "age", aur ek computed field "nextAge" ko
    // retrieve karo jisme "age" + 1" ho.

    // const studentsData = await userCollection
    //   .find(
    //     {},
    //     {
    //       projection: { name: 1 },
    //       age: 1,
    //       _id: 0,
    //       nextAge: { $add: ["$add", 1] },
    //     }
    //   )
    //   .toArray();
    // console.log("user nextAge is added sucessfully", studentsData);

    // question   8 Find Students with Multiple Courses: Un students ka naam aur course fetch karo jinke
    // pass 2 ya zyada courses ho

    // const multiplecourse = await userCollection
    //   .find(
    //     { $expr: { $size: ["$course", 2] } },
    //     { projection: { name: 1, course: 1, _id: 0 } }
    //   )
    //   .toArray();
    // console.log("jiske pass 2 course hai", multiplecourse);

    // question  9  Find with Aggregation: Har course me kitne students hain, uska count nikalo

    // const aggregation = await userCollection
    //   .aggregate([
    //     { $unwind: "$course" },
    //     { $group: { _id: "$course", count: { $sum: 1 } } },
    //   ])
    //   .toArray();
    // console.log("aggregation", aggregation);

    //question 10 Find Top 5 Oldest Students: 5 sabse bade (zyada age wale) students ka data fetch karo.

    // const olderData = await userCollection
    //   .find()
    //   .sort({ age: -1 })
    //   .limit(5)
    //   .toArray();
    // console.log("older 5 data", olderData);

    //question  11 Multi-field Update: Jis student ka name "Priya" hai, uska age +2 karo aur course "Data
    // Science" me change karo.

    // const multipleData = await userCollection.updateOne(
    //   { name: "amit" },
    //   {
    //     $inc: { age: 2 },
    //     $set: { course: "Data Science" },
    //   }
    // );
    // console.log("multiple data is update", multipleData);

    //     Question  12 Array Update: Jis student ka course "MERN Stack" hai, uske course list me "DevOps"
    // add karo bina purana data hataye.

    // const arrayStudent = await StudentCollection.updateMany(
    //   {course:"Data Science"},
    //   {
    //     $set:{course:['Data Science', 'DevOps']}
    //   }
    // )
    // console.log("array updated", arrayStudent);

    //     Question 13 Batch Update with Conditions: Jis student ka age 18-20 ke beech hai, uska fees 5%
    // badhao, aur jiski age 21+ hai, uska fees 8% badhao.

    //   const feeStudent = await StudentCollection.updateMany(
    //   {
    //     $or: [
    //       { age: { $gte: 18, $lte: 20 } },
    //       { age: { $gte: 21 } }
    //     ]
    //   },
    //   [
    //     {
    //       $set: {
    //         fees: {
    //           $cond: {
    //             if: { $and: [{ $gte: ["$age", 18] }, { $lte: ["$age", 20] }] },
    //             then: { $multiply: ["$fees", 1.5] },
    //             else: { $multiply: ["$fees", 1.8] }
    //           }
    //         }
    //       }
    //     }
    //   ]
    // );

    //   console.log("fees updated Successfully",feeStudent);

    //     Question 14 Timestamp on Update: Jab bhi kisi student ka data update ho, usme "updatedAt" field
    // automatically update ho jaye.

    // const timestampstudent = await StudentCollection.updateOne({name:'sourav jha'},{$set:{
    //   name:'sourav',
    //   updatedAt:new Date()}
    // },{upsert:true})

    // console.log("updatedAt done",timestampstudent);

    //     Question  15 Find and Modify: Kisi ek student ka data retrieve karo aur uska course "AI/ML" me
    // change karo ek hi query me.

    // const modiyStudent = await StudentCollection.updateOne({name:'sourav'},
    //   {$set:{course:'AI/ML'}}
    // )

    // console.log("in one querry",modiyStudent);

    //     Question 16 Conditional Delete: Un students ko delete karo jinme email field missing hai aur age 25+
    // hai.

    // const deletStudent = await StudentCollection.deleteMany({
    //   $and: [
    //     { email: { $exists: false } },
    //     { age: { $gt: 25 } }
    //   ]
    // });

    // console.log("students with 25+ age is now deleted...", deletStudent);

    //     Question 17 Bulk Delete with Condition: Jitne bhi students ki fees 50000 se kam hai unko delete
    // karo.

    // const bulkDelet = await StudentCollection.deleteMany(
    //   {fees:{$lt:50000}}
    // )

    // console.log("lower than 50000 fees students are now deleted...", bulkDelet);

    //     Question 18 Old Data Cleanup: Jis student ka data 1 saal se purana hai, unko delete karo (createdAt
    // timestamp ke basis pe).
    // const timestamps = new Date();
    // timestamps.setFullYear(timestamps.getFullYear()-1);

    // const oldStudent = await StudentCollection.deleteMany(
    //   {createdAt:{$lt:timestamps}}
    // )

    // console.log("old student deleted",oldStudent);

    // Question 19 Delete with Return: Jis student ka name "Suresh" hai, usko delete karo aur uska data
    // return bhi karo.
    // const findOneAndDelete = await StudentCollection.findOneAndDelete(
    //   {name:'Michael Weissnat'}
    // )

    // console.log("data delete and also returned",findOneAndDelete);

    //     Question 20 Drop with Condition: Sirf un students ko delete karo jinme koi bhi course nahi hai, bina
    // puri collection drop kiye

    // const drops = await StudentCollection.deleteMany(
    //   {course:{$exists:false}}
    // )
    // console.log("drops success",drops);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
