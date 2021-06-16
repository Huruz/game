const execa = require("execa");
  const fs = require("fs");
  const fs2 = require('fs').promises;
  const msgCmt = process.argv[2];

  (async () => {
    try {
      await execa("git", ["checkout", "--orphan", "gh-pages"]);
      console.log("Building...");
      await execa("npm", ["run", "build"]);
      // Understand if it's dist or build folder
      const folderName = fs.existsSync("dist") ? "dist" : "build";
      await execa("git", ["--work-tree", folderName, "add", "--all"]);
      await execa("git", ["--work-tree", folderName, "commit", "-m", msgCmt]);
      console.log("Pushing to gh-pages...");
      await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
      await execa("git", ["checkout", "-f", "master"]);
      await execa("git", ["branch", "-D", "gh-pages"]);
      console.log("Successfully deployed");

        fs2.rmdir('./dist', { recursive: true })
        .then(() => {
        console.log('"dist" folder removed')
        })
        .catch(err => {
        console.error('Something wrong happened removing "dist" folder', err)
        })
    } catch (e) {
      console.log(e.message);
      process.exit(1);
    }
  })();