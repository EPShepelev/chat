const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});
