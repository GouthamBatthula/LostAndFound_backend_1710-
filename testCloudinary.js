import { v2 as cloudinary } from "cloudinary";

// Replace these with your Cloudinary account values
cloudinary.config({
  cloud_name: "dnsiactnb",
  api_key: "684149369177759",
  api_secret: "L3tYjMJ0GhyFNMcjMvYJ9gmYbZk",
});

// Upload a local image (make sure the file exists in the same folder or give full path)
cloudinary.uploader.upload("image.jpg")
  .then(result => console.log("Image URL:", result.url))
  .catch(err => console.error(err));
