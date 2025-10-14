// Image Download Script for Nova Hotel Supplies
// Run this script with: node download-images.js

const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = './src/assets/images';
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs for Nova Hotel Supplies products
const images = [
    // Hero and general images
    {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center',
        filename: 'hero-product.jpg',
        description: 'Luxury hotel bathroom with amenities'
    },
    {
        url: 'https://images.unsplash.com/photo-1581578731548-c2c0d4b2d9a8?w=800&h=600&fit=crop&crop=center',
        filename: 'about-hero.jpg',
        description: 'Hotel supplies and amenities showcase'
    },

    // Sandalwood Collection Products
    {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        filename: 'sandalwood-shampoo-1.jpg',
        description: 'Luxury shampoo bottle'
    },
    {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        filename: 'sandalwood-shampoo-2.jpg',
        description: 'Luxury shampoo bottle alternative view'
    },
    {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        filename: 'sandalwood-gel-1.jpg',
        description: 'Luxury shower gel bottle'
    },
    {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        filename: 'sandalwood-gel-2.jpg',
        description: 'Luxury shower gel bottle alternative view'
    },
    {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        filename: 'sandalwood-conditioner-1.jpg',
        description: 'Luxury conditioner bottle'
    },
    {
        url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center',
        filename: 'sandalwood-conditioner-2.jpg',
        description: 'Luxury conditioner bottle alternative view'
    },

    // Bathroom Products
    {
        url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&crop=center',
        filename: 'towel-set-1.jpg',
        description: 'Luxury bath towel set'
    },
    {
        url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&crop=center',
        filename: 'towel-set-2.jpg',
        description: 'Luxury bath towel set alternative view'
    },

    // Category Images
    {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center',
        filename: 'category-toiletries.jpg',
        description: 'Toiletries category image'
    },
    {
        url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center',
        filename: 'category-bathroom.jpg',
        description: 'Bathroom category image'
    },
    {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center',
        filename: 'category-bedroom.jpg',
        description: 'Bedroom category image'
    },
    {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
        filename: 'category-dining.jpg',
        description: 'Dining category image'
    }
];

// Function to download an image
function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(imagesDir, filename));
        
        https.get(url, (response) => {
            response.pipe(file);
            
            file.on('finish', () => {
                file.close();
                console.log(`✅ Downloaded: ${filename}`);
                resolve();
            });
            
            file.on('error', (err) => {
                fs.unlink(path.join(imagesDir, filename), () => {});
                console.error(`❌ Error downloading ${filename}:`, err.message);
                reject(err);
            });
        }).on('error', (err) => {
            console.error(`❌ Error downloading ${filename}:`, err.message);
            reject(err);
        });
    });
}

// Download all images
async function downloadAllImages() {
    console.log('🚀 Starting image downloads for Nova Hotel Supplies...\n');
    
    for (const image of images) {
        try {
            await downloadImage(image.url, image.filename);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between downloads
        } catch (error) {
            console.error(`Failed to download ${image.filename}:`, error.message);
        }
    }
    
    console.log('\n🎉 Image download process completed!');
    console.log(`📁 Images saved to: ${imagesDir}`);
}

// Run the download process
downloadAllImages().catch(console.error);
