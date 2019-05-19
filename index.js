var Jimp = require('jimp');
var glob = require("glob");

const imgFiles = "./img/**/*.{png,jpeg,jpg}";
const outputDirectory = "./dist/";
const extraExtension = "-600x600.jpg";

// options is optional
glob(imgFiles, {}, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    files.forEach(file => {
        console.log(file);
        const fileParts = file.split("/");
        console.log(fileParts);
        fileParts.shift(); // Remove .
        fileParts.shift(); // Remove img folder
        fileNameParts = fileParts[fileParts.length - 1].split(".");
        console.log(fileNameParts);
        fileParts[fileParts.length - 1] = fileNameParts[0];
        let outputFile = fileParts;
        if (fileParts.length) {
            outputFile = fileParts.join("/");
        }
        console.log(outputFile);

        new Jimp(file, function () {
            this.rgba(false)
                .background(0xFFFFFFFF)
                .contain(600, 600) // resize
                .write(outputDirectory + outputFile + extraExtension); // save
        });
    })

})