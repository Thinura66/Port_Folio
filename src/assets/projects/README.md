# Project Images Guide

## 📁 How to Add Your Project Images

### Step 1: Add Your Images
Place your project images in this folder (`src/assets/projects/`) with these recommended names:
- `ecommerce.jpg` or `ecommerce.png`
- `taskapp.jpg` or `taskapp.png`
- `weather.jpg` or `weather.png`

### Step 2: Update Projects.jsx
Replace the placeholder URLs in `Projects.jsx` with your image imports:

```jsx
// At the top of Projects.jsx, add:
import ecommerceImg from '../assets/projects/ecommerce.jpg';
import taskappImg from '../assets/projects/taskapp.jpg';
import weatherImg from '../assets/projects/weather.jpg';

// Then replace the backgroundImage URLs with:
backgroundImage: `url(${ecommerceImg})`,
backgroundImage: `url(${taskappImg})`,
backgroundImage: `url(${weatherImg})`,
```

### 📏 Recommended Image Specifications
- **Dimensions**: 400x200 pixels (2:1 aspect ratio)
- **Format**: JPG or PNG
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution for crisp display

### 🎨 Image Tips
- Use screenshots of your actual projects
- Ensure good contrast for text overlay
- Consider the blue overlay when choosing images
- Make sure images represent your project well

### 🔄 Current Status
Currently using placeholder images from via.placeholder.com
Replace with your actual project screenshots when ready!
