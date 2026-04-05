# My Portfolio

This is my personal portfolio website, built with HTML, CSS, and JavaScript. It's designed to be hosted on GitHub Pages and **uses a config file for easy customization**.

## Quick Start - Edit Only `config.js`

All your portfolio content is managed in a single **`config.js`** file. No need to edit HTML or JavaScript!

### What to Customize in `config.js`:

1. **Personal Info**
   ```javascript
   name: "Your Name",
   profession: "Your Job Title",
   ```

2. **Add/Edit Skills** (already organized by category)
   ```javascript
   skills: [
       {
           category: "Frontend",
           items: ["HTML5", "CSS3", "JavaScript"]
       },
       // Add more categories as needed
   ]
   ```

3. **Add/Edit Projects**
   ```javascript
   projects: [
       {
           title: "My Project",
           description: "What it does...",
           technologies: ["React", "Node.js"],
           link: "https://github.com/yourproject"
       },
       // Add more projects
   ]
   ```

4. **Update Contact Info**
   ```javascript
   contact: {
       email: "your.email@example.com",
       github: "https://github.com/yourprofile",
       linkedin: "https://linkedin.com/in/yourprofile",
       twitter: "https://twitter.com/yourprofile" // Optional
   }
   ```

## Features

- ✨ Config-driven architecture (all changes in one file!)
- 📱 Fully responsive design
- ✅ Smooth scrolling navigation
- 🎨 Beautiful gradient design with hover effects
- 🚀 Scroll animations for cards
- ⚡ Auto-updating footer year

## How It Works

- `config.js` - Your data (name, skills, projects, contact)
- `script.js` - Reads config and builds the portfolio dynamically
- `style.css` - All the styling
- `index.html` - Just the structure (no content!)

## Deploying to GitHub Pages

1. Create a repository on GitHub (`yourusername.github.io` or any name)
2. Push these files:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```
3. Go to repository settings → Pages
4. Select "Deploy from a branch" and choose `main`
5. Your portfolio will be live at:
   - `https://yourusername.github.io` (if repo name is `yourusername.github.io`)
   - `https://yourusername.github.io/repo-name` (if different repo name)

## Examples

### Adding a New Skill Category
```javascript
{
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS"]
}
```

### Adding a New Project
```javascript
{
    title: "Cool Project",
    description: "Built an app that does X",
    technologies: ["Vue", "Firebase"],
    link: "https://github.com/yourname/coolproject"
}
```

### Adding More Social Links
Just add to the `contact` object:
```javascript
instagram: "https://instagram.com/yourprofile"
```

## No Developer Knowledge Needed

Just edit the values in `config.js`. Everything else updates automatically!