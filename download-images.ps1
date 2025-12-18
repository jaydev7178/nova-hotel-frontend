# PowerShell Script to Download Images for Nova Hotel Supplies
# Run this script with: .\download-images.ps1

# Create images directory if it doesn't exist
$imagesDir = ".\src\assets\images"
if (!(Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

# Image URLs for Nova Hotel Supplies products
$images = @(
    @{
        url = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center"
        filename = "hero-product.jpg"
        description = "Luxury hotel bathroom with amenities"
    },
    @{
        url = "https://images.unsplash.com/photo-1581578731548-c2c0d4b2d9a8?w=800&h=600&fit=crop&crop=center"
        filename = "about-hero.jpg"
        description = "Hotel supplies and amenities showcase"
    },
    @{
        url = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center"
        filename = "sandalwood-shampoo-1.jpg"
        description = "Luxury shampoo bottle"
    },
    @{
        url = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center"
        filename = "sandalwood-shampoo-2.jpg"
        description = "Luxury shampoo bottle alternative view"
    },
    @{
        url = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center"
        filename = "sandalwood-gel-1.jpg"
        description = "Luxury shower gel bottle"
    },
    @{
        url = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center"
        filename = "sandalwood-gel-2.jpg"
        description = "Luxury shower gel bottle alternative view"
    },
    @{
        url = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center"
        filename = "sandalwood-conditioner-1.jpg"
        description = "Luxury conditioner bottle"
    },
    @{
        url = "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&crop=center"
        filename = "sandalwood-conditioner-2.jpg"
        description = "Luxury conditioner bottle alternative view"
    },
    @{
        url = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&crop=center"
        filename = "towel-set-1.jpg"
        description = "Luxury bath towel set"
    },
    @{
        url = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop&crop=center"
        filename = "towel-set-2.jpg"
        description = "Luxury bath towel set alternative view"
    },
    @{
        url = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center"
        filename = "category-toiletries.jpg"
        description = "Toiletries category image"
    },
    @{
        url = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center"
        filename = "category-bathroom.jpg"
        description = "Bathroom category image"
    },
    @{
        url = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center"
        filename = "category-bedroom.jpg"
        description = "Bedroom category image"
    },
    @{
        url = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center"
        filename = "category-dining.jpg"
        description = "Dining category image"
    }
)

Write-Host "🚀 Starting image downloads for Nova Hotel Supplies..." -ForegroundColor Green
Write-Host ""

foreach ($image in $images) {
    try {
        $outputPath = Join-Path $imagesDir $image.filename
        Write-Host "📥 Downloading: $($image.filename)" -ForegroundColor Yellow
        
        # Download the image
        Invoke-WebRequest -Uri $image.url -OutFile $outputPath -UseBasicParsing
        
        Write-Host "✅ Downloaded: $($image.filename)" -ForegroundColor Green
        
        # Wait 1 second between downloads to be respectful to the server
        Start-Sleep -Seconds 1
    }
    catch {
        Write-Host "❌ Error downloading $($image.filename): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🎉 Image download process completed!" -ForegroundColor Green
Write-Host "📁 Images saved to: $imagesDir" -ForegroundColor Cyan
