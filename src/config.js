const { MODE } = require("./blendMode.js");
const description =
  "Description";
const baseUri = "ipfs://QmSgtbYwFoiNMjaT1LipzLpvj9Q2rycEcNL8mbHUTHCNe6";

const layerConfigurations = [
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Fondo" },
      { name: "Personaje" },
      { name: "Boca" },
      { name: "Ojos" },
      { name: "Accesorios Cabeza"},
      { name: "Atuendo" },
      { name: "Vello Facial" },
      //revolucion

      // { name: "Fondo" },
      // {name:"Personaje"},
      // {name:"Boca-Revolucion"},
      // {name:"Ojos"},
      // {name:"Sombrero-Revolucion"},
      // {name:"Atuendo-Revolucion"},
      // {name:"Cuadro-Revolucion"},
    ],
  },
];

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: false,
  brightness: "80%",
};

const rarityDelimiter = "+";

const uniqueDnaTorrance = 1000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
