const cloudinary = require("cloudinary");
const multer = require('multer-storage-cloudinary';)

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});
