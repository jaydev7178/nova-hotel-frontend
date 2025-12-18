import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-viewer" *ngIf="imageUrl">
      <div class="image-container">
        <img [src]="imageUrl" 
             [alt]="altText || 'Image'" 
             class="img-fluid"
             (error)="onImageError($event)"
             (load)="onImageLoad()">
      </div>
      <div class="image-info" *ngIf="showInfo">
        <small class="text-muted">{{ altText || 'No description' }}</small>
      </div>
    </div>
    <div class="image-placeholder" *ngIf="!imageUrl || imageError">
      <i class="fas fa-image fa-3x text-muted"></i>
      <p class="text-muted mt-2">Image not available</p>
    </div>
  `,
  styles: [`
    .image-viewer {
      position: relative;
    }
    
    .image-container {
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .image-container img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }
    
    .image-container:hover img {
      transform: scale(1.05);
    }
    
    .image-info {
      margin-top: 8px;
      text-align: center;
    }
    
    .image-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      border: 2px dashed #dee2e6;
      border-radius: 8px;
      background-color: #f8f9fa;
    }
  `]
})
export class ImageViewerComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
  @Input() showInfo: boolean = false;
  
  imageError = false;
  
  onImageError(event: any): void {
    this.imageError = true;
    console.warn('Image failed to load:', this.imageUrl);
  }
  
  onImageLoad(): void {
    this.imageError = false;
  }
}
