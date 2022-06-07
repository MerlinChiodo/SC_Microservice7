const Ajv = require("ajv")
const addFormats = require("ajv-formats")

const scheme_deleteAnimalScheme = require("./dependencies/deleteAnimalScheme.json")
const scheme_newAnimalScheme = require("./dependencies/newAnimalScheme.json")

const ajv = exports.ajv = new Ajv()
addFormats(ajv)

ajv.addSchema(scheme_deleteAnimalScheme, "deleteAnimal")
ajv.addSchema(scheme_newAnimalScheme, "newAnimal")