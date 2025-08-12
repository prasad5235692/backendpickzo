import cloudinary from '../utils/cloudinary.js';

export const uploadImage = async (req, res) => {
  try {
    const file = req.body.image; // base64 or URL
    const result = await cloudinary.uploader.upload(file, {
      folder: 'ecommerce-products',
    });

    res.json({ url: result.secure_url });
  } catch (err) {
    console.error('Cloudinary upload error:', err);
    res.status(500).json({ message: 'Image upload failed' });
  }
};
