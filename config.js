const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../.env") });


const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(8080),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

// console.log(envVars.MONGODB_URL, '=-=-=-=-=-=-=-=-=-=-=- ')
module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  server_home: {
    user: envVars.USER_HOME,
  }
}

