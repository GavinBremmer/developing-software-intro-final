import yargs = require('yargs');
import { calcHouseMaterials, getHouseMaterials } from './calculator';

yargs.command(
    "calc-house-materials",

    "Calculate the materials required to build a house",

    {
        width: {
            type: "number",
            alias: "w",
            description: "The width of the house",
        },

        length: {
            type: "number",
            alias: "l",
            description: "The length of the house",
        },

        isFeet: {
            type: "boolean",
            alias: "f",
            description: "Specifies that feet are being used as the unit of measure",
        },

        name: {
            type: "string",
            alias: "n",
            description: "Specifies the name that this house will be stored under",
        },
    },

    function( args ){
        let name = args.name
        let width = args.width
        let length = args.length
        let units = args.isFeet
        console.log(calcHouseMaterials(name,width,length,units))
    }
);

yargs.command(
    "get-house-materials",

    "Recalls the materials for a previously saved house",

    {
        name: {
            type: "string",
            alias: "n",
            description: "Specifies the name that this house will be stored under",
        },
    },

    function( args ){
        let name = args.name
        console.log(getHouseMaterials(name))
    }
);

yargs.help();

yargs.parse();