import { readFile } from "fs";

readFile("./notes.txt", "utf8", (err, data) => {
   if (err) throw err;
   let count = 0;
   //split text in array
   let text = data.split(" ");
   //goes over each line of document
   text.forEach((line) => {
      //if each element contains the word "files"
      if (line.includes("files"))
         //increment count variable by one
         count++;
   });

   console.log(count);
});
