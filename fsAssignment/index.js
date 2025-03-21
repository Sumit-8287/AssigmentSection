const fs = require("fs");

//Asynchronous File Read
// fs.readFile("sumit.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//synchronous File Read

// const sahil = fs.readFileSync("sumit.txt", "utf8");
// console.log(sahil);

//Sunchronour File Write--->

// fs.writeFileSync(
//   "Name.txt",
//   "This is our first file created using synchronous code"
// );
// console.log("File is created successfully");

//Asynchrnour File Write --->

// fs.writeFile(
//   "example.txt",
//   "hello this is our second file created using asynchronour code"
// ),
//   (err) => {
//     if (err) throw err;
//     console.log("file is created successfully");
//   };

//Question --1  Write a Node.js script to read a file named "input.txt" asynchronously and print its
// contents to the console.

// fs.readFile("input.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Question 2---->Modify the script to handle errors gracefully when reading the file "input.txt"
// asynchronously.

// fs.appendFile("input.txt","in this file the data is updated successfully",(err)=>{
//   if(err)throw err;
//   console.log("data updated is successfully");
// });

// Question 3--->Create a Node.js script to write "Hello, World!" to a new file named "output.txt" using
// synchronous methods.

// fs.appendFileSync("output.txt","hello world!");
// console.log("file created successfuly");

// Question  4--->How would you update "output.txt" to append "Goodbye, World!" at the end of the file
// using asynchronous methods.

// fs.appendFile("output.txt","Good bye, World!",(err)=>{
//   if(err)throw err;
//   console.log("data changed is successfully");
// });

// Question  5--->Write a function in Node.js to delete a file named "delete-me.txt" asynchronously and log
// a success message.

// fs.unlink("delete-me.txt",(err)=>{
//   if(err)throw err;
//   console.log("data is deleted successfully")
// });

// Question  6--->Develop a script that creates a directory called "test-dir" synchronously, and logs a
// confirmation message.

// fs.mkdirSync("test-dir");
// console.log("folder is created");

// Question  7-->Write a script to read and print all file names inside a directory named "test-dir" using
// asynchronous methods.

// fs.readdir("test-dir", (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });

// Question 8-->How would you modify a script to handle errors when reading a directory that does not
// exist?

// fs.readdir("newfolder", (err, data) => {
//   if (err) console.log("error");

//   // throw err;
//   console.log(data);
// });

// Question  9-->Create a script to rename a file from "oldname.txt" to "newname.txt" asynchronously and
// handle potential errors.

// fs.rename("oldname.txt","newname.txt",(err)=>{
//   if(err)throw err;
//   console.log("new file is uploaded");
// })

// Question  10--->Write a script to get and print the file statistics for "example.txt" using asynchronous
// methods.

// fs.stat("sumit.txt", (err, stats) => {
//   if (err) throw err;
//   console.log(stats);
// });

// Question  11-->Develop a script that checks if a file named "config.txt" exists using fs.existsSync
// and logs the result.

// const s = fs.existsSync("config.txt");
// console.log(s);

// Question 12--->Write a Node.js function that reads a JSON file named "data.json" asynchronously and
// parses the JSON object.

// fs.readFile("data.json", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Question 13--->Create a script to write an array of objects to a file named "data.json" in a pretty JSON
// format using synchronous methods.

// const data = [{ name: "sumit" }, { age: 18 }];

// const jsonData = JSON.stringify(data, null, 2);

// fs.writeFileSync("data.json", jsonData);
// console.log("data json file is created ");

// Question 14-->How would you append multiple lines of text to a file "log.txt" asynchronously without
// overwriting the existing content?

// fs.appendFile(
//   "log.txt",
//   "\nthis is a first line. \nthis is a second line. \nthis is a third line.",
//   (err) => {
//     if (err) throw err;
//     console.log("many line is printed");
//   }
// );

// Question  15-->Write a script to delete a directory named "old-dir" asynchronously, ensuring that the
// directory is empty.

// fs.readdir("old-dir", (err, data) => {
//   if (err) throw err;
//   for (let i = 0; i < data.length; i++) {
//     fs.unlink(`old-dir/${data[i]}`, (err) => {
//       if (err) throw err;
//     });
//   }
//   fs.rmdir("old-dir", (err) => {
//     if (err) throw err;
//     console.log(" directory is deleted");
//   });
// });

// Question 16-->Develop a script that lists all files in a directory and their file sizes using asynchronous
// methods.
// fs.readdir("test-dir", (err, data) => {
//   if (err) throw err;
//   //   console.log(data);
//   for (let i = 0; i < data.length; i++) {
//     fs.stat(`test-dir/${data[i]}`, (err, stat) => {
//       if (err) throw err;
//       console.log(data[i], stat.size);
//     });
//   }
// });

// Question  17-->Write a Node.js script to copy the contents of "source.txt" to "destination.txt" using the fs
// module.
// fs.readFile("source.txt", (err, data) => {
//   if (err) throw err;
//   //   console.log(data);
//   fs.writeFile("destination.txt", data, (err) => {
//     if (err) throw err;
//     console.log("data is copy");
//   });
// });

// Question 18-->Create a script to monitor changes to a file "config.txt" and log the change time to the
// console using fs.watch.

// fs.watch("config.txt", (time) => {
//   if (time == "change")
//     console.log("time :", new Date().toLocaleString());
// });
// fs.appendFileSync("config.txt", "\nabc");

// Question 19-->Develop a script that recursively deletes all files in a directory using asynchronous fs
// methods.

// fs.readdir("test-dir", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   for (let i = 0; i < data.length; i++) {
//     fs.unlink(`test-dir/${data[i]}`, (err) => {
//       if (err) throw err;
//     });
//   }
//   console.log("all files deleted");
// });

// Question 20 ->Write a script to create a backup of a directory by copying all its files and subdirectories
// to a new location.

// fs.readdir("test-dir", (err, data) => {
//   if (err) throw err;
//   //   console.log(data);

//   for (let i = 0; i < data.length; i++) {
//     fs.stat(`test-dir/${data[i]}`, (err, stat) => {
//       if (err) throw err;
//       //   console.log(stat);
//       if (stat.isDirectory()) {
//         if (!fs.existsSync("abc")) {
//           fs.mkdir("abc", { recursive: true });
//         }
//       } else {
//         if (!fs.existsSync("abc")) {
//           fs.mkdirSync("abc");
//         }
//         fs.copyFileSync(`test-dir/${data[i]}`, `abc/${data[i]}`);
//       }
//     });
//   }
//   console.log("new directory is created");
// });



