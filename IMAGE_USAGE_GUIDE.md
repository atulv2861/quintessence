# 📸 Image Usage Guide for Quintessence Website

## 🗂️ **Public Folder Structure**

```
public/
├── images/
│   ├── hero/
│   │   ├── hero1.webp
│   │   ├── hero2.jpg
│   │   ├── hero3.webp
│   │   ├── hero4.jpg
│   │   └── nitin-garg.png
│   ├── services/
│   ├── projects/
│   ├── clients/
│   └── team/
```

## ✅ **Correct Ways to Use Images**

### 1. **In JSX Components (Recommended)**

```tsx
// ✅ Correct - Direct path from public folder
<img src="/images/hero/hero1.webp" alt="Hero Image 1" />

// ✅ Correct - With CSS classes
<img 
  src="/images/hero/nitin-garg.png" 
  alt="Dr. Nitin Garg" 
  className="w-24 h-24 rounded-full" 
/>

// ✅ Correct - In background styles
<div 
  style={{
    backgroundImage: `url(/images/hero/hero1.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### 2. **In CSS Files**

```css
/* ✅ Correct - In your CSS files */
.hero-background {
  background-image: url('/images/hero/hero1.webp');
  background-size: cover;
  background-position: center;
}
```

### 3. **Dynamic Images with Variables**

```tsx
// ✅ Correct - Using variables
const imagePath = "/images/hero/hero1.webp";
<img src={imagePath} alt="Dynamic Image" />

// ✅ Correct - In arrays/objects
const slides = [
  {
    title: "Slide 1",
    image: "/images/hero/hero1.webp"
  },
  {
    title: "Slide 2", 
    image: "/images/hero/hero2.jpg"
  }
];

// Usage
<img src={slides[0].image} alt={slides[0].title} />
```

## ❌ **Incorrect Ways (Don't Use These)**

```tsx
// ❌ Wrong - Relative paths don't work for public folder
<img src="./images/hero/hero1.webp" alt="Hero Image" />
<img src="../images/hero/hero1.webp" alt="Hero Image" />

// ❌ Wrong - process.env.PUBLIC_URL is for Create React App, not Vite
<img src={process.env.PUBLIC_URL + "/images/hero/hero1.webp"} alt="Hero Image" />

// ❌ Wrong - Don't use require() for public folder images
<img src={require("/images/hero/hero1.webp")} alt="Hero Image" />
```

## 🎯 **Best Practices**

### 1. **Image Optimization**

```tsx
// ✅ Use appropriate image formats
// WebP for modern browsers (smaller file size)
<img src="/images/hero/hero1.webp" alt="Hero Image" />

// JPG for photos
<img src="/images/hero/hero2.jpg" alt="Hero Image" />

// PNG for images with transparency
<img src="/images/hero/nitin-garg.png" alt="Dr. Nitin Garg" />
```

### 2. **Responsive Images**

```tsx
// ✅ Use Tailwind classes for responsive images
<img 
  src="/images/hero/hero1.webp" 
  alt="Hero Image"
  className="w-full h-auto md:w-1/2 lg:w-1/3"
/>
```

### 3. **Lazy Loading**

```tsx
// ✅ Add loading="lazy" for better performance
<img 
  src="/images/hero/hero1.webp" 
  alt="Hero Image"
  loading="lazy"
  className="w-full h-auto"
/>
```

### 4. **Error Handling**

```tsx
// ✅ Add error handling for missing images
const [imageError, setImageError] = useState(false);

<img 
  src={imageError ? "/images/placeholder.jpg" : "/images/hero/hero1.webp"}
  alt="Hero Image"
  onError={() => setImageError(true)}
  className="w-full h-auto"
/>
```

## 🚀 **Examples in Your Project**

### Hero Section with Background Image

```tsx
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${currentSlideData.image})`,
    backgroundBlendMode: 'overlay'
  }}
>
```

### Profile Image

```tsx
<img 
  src="/images/hero/nitin-garg.png" 
  alt="Dr. Nitin Garg" 
  className="w-24 h-24 rounded-full" 
/>
```

### Service Icons

```tsx
<img 
  src="/images/services/equipment-planning.jpg" 
  alt="Equipment Planning" 
  className="w-full h-48 object-cover rounded-lg"
/>
```

## 📁 **Adding New Images**

1. **Place images in the appropriate folder:**
   ```
   public/images/services/new-service.jpg
   public/images/projects/project-1.jpg
   public/images/team/member-1.png
   ```

2. **Reference them in your components:**
   ```tsx
   <img src="/images/services/new-service.jpg" alt="New Service" />
   ```

3. **Use consistent naming conventions:**
   - Use lowercase with hyphens: `equipment-planning.jpg`
   - Be descriptive: `hospital-bed-planning.jpg`
   - Use appropriate extensions: `.jpg`, `.png`, `.webp`

## 🔧 **Troubleshooting**

### Image Not Loading?

1. **Check the path** - Make sure it starts with `/`
2. **Check the file exists** - Verify the file is in the public folder
3. **Check the extension** - Make sure the file extension matches
4. **Check the case** - File names are case-sensitive

### Performance Issues?

1. **Optimize images** - Use WebP format when possible
2. **Add lazy loading** - Use `loading="lazy"` attribute
3. **Use appropriate sizes** - Don't load huge images for small displays
4. **Consider image compression** - Use tools like TinyPNG

## 📝 **Quick Reference**

| Use Case | Correct Syntax | Example |
|----------|---------------|---------|
| Static image | `src="/images/folder/file.jpg"` | `<img src="/images/hero/hero1.webp" />` |
| Dynamic image | `src={imagePath}` | `<img src={slide.image} />` |
| Background image | `backgroundImage: url('/images/...')` | `style={{backgroundImage: 'url(/images/hero/hero1.webp)'}}` |
| CSS background | `url('/images/...')` | `background-image: url('/images/hero/hero1.webp');` |

Remember: **Always start with `/` when referencing public folder images!**
