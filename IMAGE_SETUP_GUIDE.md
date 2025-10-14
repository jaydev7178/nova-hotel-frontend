# Nova Hotel Supplies - Image Setup Guide

This guide will help you download and implement all the images needed for your Nova Hotel Supplies Angular application.

## 📋 Required Images

Based on your application, you need the following images:

### 🏠 Hero & General Images
- `hero-product.jpg` - Main hero image for home page
- `about-hero.jpg` - Hero image for about page

### 🧴 Sandalwood Collection Products
- `sandalwood-shampoo-1.jpg` - Primary shampoo image
- `sandalwood-shampoo-2.jpg` - Alternative shampoo view
- `sandalwood-gel-1.jpg` - Primary shower gel image
- `sandalwood-gel-2.jpg` - Alternative shower gel view
- `sandalwood-conditioner-1.jpg` - Primary conditioner image
- `sandalwood-conditioner-2.jpg` - Alternative conditioner view

### 🛁 Bathroom Products
- `towel-set-1.jpg` - Primary towel set image
- `towel-set-2.jpg` - Alternative towel set view

### 📂 Category Images
- `category-toiletries.jpg` - Toiletries category
- `category-bathroom.jpg` - Bathroom category
- `category-bedroom.jpg` - Bedroom category
- `category-dining.jpg` - Dining category

## 🚀 Download Methods

### Method 1: Automated Script (Recommended)

#### For Windows (PowerShell):
```powershell
# Run the PowerShell script
.\download-images.ps1
```

#### For Mac/Linux (Node.js):
```bash
# Make sure you have Node.js installed
node download-images.js
```

### Method 2: Manual Download

If the automated scripts don't work, you can manually download images from these sources:

#### Free Stock Photo Sources:
1. **Unsplash** (https://unsplash.com)
   - Search: "hotel toiletries", "bathroom amenities", "luxury bathroom"
   - Search: "shampoo bottles", "shower gel", "conditioner"
   - Search: "luxury towels", "hotel bathroom"

2. **Pexels** (https://pexels.com)
   - Search: "hotel supplies", "bathroom products"
   - Search: "amenities", "toiletries"

3. **Pixabay** (https://pixabay.com)
   - Search: "hotel bathroom", "luxury amenities"

#### Specific Image Requirements:
- **Resolution**: Minimum 800x600 for hero images, 600x600 for product images
- **Format**: JPG or PNG
- **Style**: Professional, luxury, hotel-grade appearance
- **License**: Free for commercial use (Unsplash, Pexels, Pixabay)

### Method 3: Alternative Image Sources

If you prefer to use different images, here are some alternatives:

#### Professional Hotel Supply Images:
- **Shutterstock** (paid): Professional hotel amenities
- **Getty Images** (paid): High-end hotel supplies
- **Adobe Stock** (paid): Premium hospitality images

#### Free Alternatives:
- **Freepik** (free account): Hotel supplies vectors and photos
- **Canva** (free account): Hotel amenities templates
- **Gratisography**: Unique product photography

## 📁 File Organization

After downloading, your `src/assets/images/` directory should look like this:

```
src/assets/images/
├── hero-product.jpg
├── about-hero.jpg
├── sandalwood-shampoo-1.jpg
├── sandalwood-shampoo-2.jpg
├── sandalwood-gel-1.jpg
├── sandalwood-gel-2.jpg
├── sandalwood-conditioner-1.jpg
├── sandalwood-conditioner-2.jpg
├── towel-set-1.jpg
├── towel-set-2.jpg
├── category-toiletries.jpg
├── category-bathroom.jpg
├── category-bedroom.jpg
└── category-dining.jpg
```

## 🔧 Implementation Steps

1. **Download Images**: Use one of the methods above
2. **Verify Files**: Check that all images are in `src/assets/images/`
3. **Test Application**: Run `ng serve` to see images in action
4. **Optimize Images**: Consider compressing large images for better performance

## 🎨 Image Optimization Tips

### For Better Performance:
- **Compress Images**: Use tools like TinyPNG or ImageOptim
- **WebP Format**: Consider converting to WebP for better compression
- **Responsive Images**: Use different sizes for different screen sizes

### For Better UX:
- **Consistent Style**: Ensure all product images have similar lighting and background
- **High Quality**: Use high-resolution images for product details
- **Multiple Angles**: Provide different views of products when possible

## 🚨 Troubleshooting

### Common Issues:

1. **Images Not Loading**:
   - Check file paths in `product.service.ts`
   - Verify images are in `src/assets/images/`
   - Ensure file names match exactly

2. **Script Errors**:
   - Make sure you have internet connection
   - Check if Unsplash URLs are accessible
   - Try running scripts as administrator

3. **Permission Issues**:
   - Ensure write permissions to `src/assets/images/`
   - Check antivirus software blocking downloads

### Manual Fallback:
If automated downloads fail, you can:
1. Visit Unsplash/Pexels manually
2. Download images one by one
3. Save them with the exact filenames listed above
4. Place them in `src/assets/images/`

## ✅ Verification

After setup, verify everything works by:

1. Running `ng serve`
2. Navigating to the home page
3. Checking that hero image loads
4. Going to product catalog
5. Verifying product images display
6. Testing admin dashboard

## 📞 Support

If you encounter issues:
1. Check the console for errors
2. Verify image file paths
3. Ensure all files are downloaded
4. Try refreshing the browser cache

---

**Note**: All image URLs in the scripts point to Unsplash, which provides free stock photos. These images are for demonstration purposes and should be replaced with actual product photos in a production environment.
