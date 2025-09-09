import { readFile, writeFile } from "node:fs/promises";

import path from "node:path";

export async function readMyFile() {
  try {
    const data = await readFile(path.join(process.cwd(), "./DB/posts.json"),
      "utf8"
    );
    return data
  } catch (error) {
    console.error("Error reading file:", error);
  }
}
export async function writeToFile(post) {
  try {
    const data = await readFile(path.join(process.cwd(),"./DB/posts.json"),"utf-8")
       console.log("type of  data write",typeof data);
    
    const jsondata = JSON.parse(data)
    console.log("type of jsdata write",typeof jsondata);
    
    jsondata.push(post)
   console.log(jsondata);
   
    const res= await writeFile(path.join(process.cwd(),"./DB/posts.json"),JSON.stringify(jsondata, null, 2),"utf8")

    return post
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}




