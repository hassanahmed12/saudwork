require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dwf9983ds',
    api_key: '445365199852516',
    api_secret: '6d0tihps8B7K3EjvRpVenQZnU9w',
});

module.exports = { cloudinary };
