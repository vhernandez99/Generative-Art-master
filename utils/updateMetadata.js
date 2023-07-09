"use strict";

const fs = require("fs");
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const { baseUri } = require("../src/config.js");

// read json data
let rawdata = fs.readdirSync(`${basePath}/main-metadata/json`);
//let data = JSON.parse(rawdata);

rawdata.forEach((item) => {
    const fileData = fs.readFileSync(path.join(`${basePath}/main-metadata/json`, item))
    const json = JSON.parse(fileData.toString());
    delete json.compiler;
    delete json.date
    json.name = `Los Pepes ${json.edition}`;
    json.image = `${baseUri}/${json.edition}.png`;
    json.description = `Los Pepes es una colección de activos digitales creada por Pepe's Lab. Los titulares disfrutarán de increíbles utilidades como obsequios, descuentos en mercadería y eventos de música en vivo, lugar automático en la lista exclusiva para futuros lanzamientos de NFTs y más.
    Los Pepes is a digital assets collection created by Pepe's Lab. Holders will enjoy awesome utilities such as, giveaways, discounts on merchandise and live music events, automatic whitelist spot to future NFT drops and more.`;
    fs.writeFileSync(
        `${basePath}/main-metadata/json/${json.edition}.json`,
        JSON.stringify(json, null, 2)
    );
});

// fs.writeFileSync(
//   `${basePath}/build/json/_metadata.json`,
//   JSON.stringify(data, null, 2)
// );

console.log(`Updated baseUri for images to ===> ${baseUri}`);
