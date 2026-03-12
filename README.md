# Pawan Jangra — Portfolio Website

A fully featured Quarto portfolio website with:
- 🎨 **Interactive hero page** with animated blobs and skill bars
- 📊 **Interactive Plotly visualizations** (scatter, animated line, heatmap, etc.)
- 🎮 **Browser-based Shiny-style apps** (Distribution Explorer, Regression Simulator, CLT Demo)
- 📚 **4 Statistics with R chapters** (Descriptive, Distributions, Regression, Time Series)
- ✍️ **3 Blog posts** with full R code and ggplot2 charts
- 🌗 **Dark/Light theme toggle**
- 📱 **Fully responsive**

## Project Structure

```
portfolio/
├── _quarto.yml          # Site configuration
├── index.qmd            # Homepage with hero section
├── data_vizs.qmd        # 6 interactive charts
├── shiny_app.qmd        # 3 browser-based interactive apps
├── blog.qmd             # Blog listing
├── about.qmd            # About page
├── posts/
│   ├── post1.qmd        # tidyverse wrangling
│   ├── post2.qmd        # Sampling methods
│   └── post3.qmd        # ggplot2 guide
├── stats/
│   ├── chapter1.qmd     # Descriptive Statistics
│   ├── chapter2.qmd     # Probability & Distributions
│   ├── chapter3.qmd     # Regression Analysis
│   └── chapter4.qmd     # Time Series
└── assets/
    ├── styles.css        # Custom styles & animations
    ├── custom.scss       # Light theme
    └── custom-dark.scss  # Dark theme
```

## Setup & Deployment

### Prerequisites
```bash
# Install R packages
install.packages(c("tidyverse","plotly","broom","zoo","knitr"))
```

### Build locally
```bash
quarto preview   # Live preview
quarto render    # Build to docs/
```

### Deploy to GitHub Pages
```bash
# In your _quarto.yml, output-dir is set to docs/
# After rendering:
git add .
git commit -m "Update portfolio"
git push origin main

# In GitHub repo settings:
# Pages → Source → Deploy from branch → main → /docs
```

### Adding a Real Shiny App
1. Build your app in R: `shiny::runApp()`
2. Deploy to shinyapps.io
3. Add iframe to `shiny_app.qmd`:
```html
<iframe src="https://YOUR-USERNAME.shinyapps.io/YOUR-APP/" 
        width="100%" height="600px" frameborder="0"></iframe>
```

## Customization Tips

- **Add new blog posts:** Create `.qmd` files in `posts/` with YAML front matter
- **Add new chapters:** Create `.qmd` files in `stats/` and link in `_quarto.yml`
- **Update hero stats:** Edit the stats bar in `index.qmd`
- **Change colors:** Edit CSS variables in `assets/styles.css`
