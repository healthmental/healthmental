const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'dquxsige6',
    api_key: '223928489647315',
    api_secret: 'cPb1Aj19IetH9NwGQ1a7C5q3_hM'
});

exports.uploads = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id })
        }, { resource_type: "auto" })
    })
}