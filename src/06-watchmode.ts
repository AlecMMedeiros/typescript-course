//watch mode : tsc app.ts -w or tsc app.ts --watch (specific file)

// adding  all project to watch mode
//tsc --init -> Will set all project as a typescript project and will create a tsconfig.json
// tsc -w -> Will start watch mode to all typescript files inside the project folders.
//At json you should add the following line:
//"noEmitOnError": true, Will not compile to js file if it found an error at typescript file   
//   "exclude": [
//     "node_modules"
//   ],
// }

let nickname = "Dhevos";

nickname = "Arch";

console.log(nickname);
