"use strict";

const fs = require("fs");
const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const { baseUri } = require("../src/config.js");

// read json data
const arrayOfNftsToBeReplaced = [1, 2, 3, 602, 133, 253, 648, 101, 712, 555, 751, 630, 690, 705, 200, 150, 250, 400, 12, 1511, 1482, 1248, 1997, 1628, 1038, 1906, 1012, 1781, 1994, 1995, 3019, 3570, 3268, 3100, 3500, 3969, 3759, 3758, 3478, 3839, 3838, 4011, 4440, 4981, 4281, 4043, 4123, 4008, 4346, 4800, 4377, 5000, 5073, 5041, 5339, 5751, 5907, 5698, 5955, 5495, 5483, 6004, 6296, 6538, 6717, 6221, 6361, 6226, 6993, 6498, 6165, 7652, 7403, 7902, 7198, 7039, 7379, 7169, 7251, 7545, 7756, 8384, 8105, 8634, 8615, 8820, 8851, 8060, 8234, 8938, 9057, 9763, 9635, 9935, 9239, 9467, 9523, 8291, 9200, 9135];

console.log(arrayOfNftsToBeReplaced.length)




// let mainNfts = fs.readFileSync(`${basePath}/metadata/build-main/json/_metadata.json`);
// let data = JSON.parse(mainNfts);
let revolutionNfts = fs.readFileSync(`${basePath}/main-metadata/json/_metadata.json`);
let data = JSON.parse(revolutionNfts);
//iterate through revolutionNFTS and change the name to the new number and then copy/paste into the main metadata folder
data.forEach((item, index) => {

    
    // fs.rename(`${basePath}/metadata/build-revolution/json/${index + 1}.json`, `${basePath}/metadata/build-revolution/json/${arrayOfNftsToBeReplaced[index]}.json`, (error) => {
    //     console.log(error)
    // });
    fs.rename(`${basePath}/metadata/build-revolution/images/${index + 1}.png`, `${basePath}/metadata/build-revolution/images/${arrayOfNftsToBeReplaced[index]}.png`, (error => {
        console.log(error)
    }));
    // item.name = `Los Pepes #${arrayOfNftsToBeReplaced[index]}`;
    // item.image = `${baseUri}/${arrayOfNftsToBeReplaced[index]}.png`;
    // item.edition = arrayOfNftsToBeReplaced[index]
    // item.description = `Los Pepes es una colección de activos digitales creada por Pepe's Lab. Los titulares disfrutarán de increíbles utilidades como obsequios, descuentos en mercadería y eventos de música en vivo, lugar automático en la lista exclusiva para futuros lanzamientos de NFTs y más.
    // Los Pepes is a digital assets collection created by Pepe's Lab. Holders will enjoy awesome utilities such as, giveaways, discounts on merchandise and live music events, automatic whitelist spot to future NFT drops and more.`;
    // fs.writeFileSync(
    //     `${basePath}/metadata/build-revolution/json/${arrayOfNftsToBeReplaced[index]}.json`,
    //     JSON.stringify(item, null, 2)
    // );
});

