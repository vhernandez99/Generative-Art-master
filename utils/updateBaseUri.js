"use strict";

const fs = require("fs");
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const { baseUri } = require("../src/config.js");

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

data.forEach((item) => {
  item.name = `DC #${item.edition}`;
  item.image = `${baseUri}/${item.edition}.png`;
  item.description = `The Degentlemen's Club is a collection of 6,000 Saber-toothed Degens roaming in the Ethereum jungle. Each NFT is unique and grants each holder access to the VIP section with holders-only benefits. Every single member in the VIP section will have a say in the steps we take for the future of this project.`;
  fs.writeFileSync(
    `${basePath}/build/json/${item.edition}.json`,
    JSON.stringify(item, null, 2)
  );
});

fs.writeFileSync(
  `${basePath}/build/json/_metadata.json`,
  JSON.stringify(data, null, 2)
);

console.log(`Updated baseUri for images to ===> ${baseUri}`);
