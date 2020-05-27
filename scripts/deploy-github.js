const ghpages = require("gh-pages");

ghpages.publish(
	"public",
	{
		branch: "master",
		repo: "git@github.com:jeremie-gauthier/jeremie-gauthier.github.io.git",
	},
	() => {
		console.log("Deploy Complete!");
	}
);
