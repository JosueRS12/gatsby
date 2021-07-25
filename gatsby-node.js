const fs = require("fs");
exports.onPostBuild = () => {
  fs.copyFile(`./firebase.json`, `./public/firebase.json`, (err) =>{
    if (err){
      throw err;
    }
  });
};
