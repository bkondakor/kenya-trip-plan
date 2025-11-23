# Kenya Trip Plan

A beautiful, interactive web application for planning and exploring a Kenya trip with information about destinations, places to visit, travel tips, and an interactive map.

## Features

- **Interactive Map**: Explore Kenya's regions and attractions with an interactive map
- **Places Database**: Comprehensive information about popular destinations
- **Travel Tips**: Pro tips for traveling in Kenya
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Live Demo

The webapp is automatically deployed to GitHub Pages on every push to the `main` or development branches.

**Access the deployed site**: Visit the GitHub Pages URL for this repository
- After the first deployment, the site will be available at: `https://<your-github-username>.github.io/kenya-trip-plan/`
- Check the repository "Settings" → "Pages" section to confirm the deployment status
- The GitHub Actions workflow will automatically build and deploy on each commit

## Automatic Deployment

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **Triggers on**:
   - Push to the `main` branch
   - Push to the development branch (`claude/kenya-trip-webapp-01K9hBpEwGP6CN9K9Z2q4v7f`)
   - Manual trigger via GitHub Actions UI (`workflow_dispatch`)

2. **Deployment Process**:
   - Checks out the repository
   - Configures GitHub Pages
   - Uploads all static files (HTML, CSS, JavaScript)
   - Deploys to GitHub Pages

3. **Monitoring**:
   - View deployment status in the "Actions" tab of your GitHub repository
   - Check the "Deployments" tab for deployment history and status

## Pages Included

- **index.html** - Main landing page with trip overview
- **map.html** - Interactive map of Kenya
- **places.html** - Directory of recommended places to visit
- **pro-tips.html** - Travel tips and advice for Kenya

## Local Development

To run locally, simply open `index.html` in your web browser or use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Leaflet.js (for interactive maps)

## Permissions & Configuration

The GitHub Actions workflow has been configured with the following permissions:
- `contents: read` - To access repository files
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For OIDC token generation (security)

## Troubleshooting

If the deployment doesn't work:

1. **Check GitHub Settings**:
   - Go to Repository Settings → Pages
   - Ensure "Source" is set to "GitHub Actions"

2. **Review Workflow Logs**:
   - Go to Actions tab → "Deploy to GitHub Pages" workflow
   - Check the latest run logs for any errors

3. **Verify Repository Visibility**:
   - GitHub Pages requires the repository to be public (or private if using GitHub Pro)

## Support

For issues or questions about the deployment, check the GitHub Actions logs or review the `.github/workflows/deploy.yml` file for the deployment configuration.