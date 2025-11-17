# Vercel Deployment Instructions

## Method 1: Deploy via Git (Recommended)

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd /Users/sergio/Projects/gala-esquizofrenia-de-cortes-25

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Gala app ready for deployment"
```

### Step 2: Push to GitHub/GitLab/Bitbucket

**Option A: GitHub**

1. Create a new repository on GitHub (https://github.com/new)
   - Name it: `gala-esquizofrenia-de-cortes-25` (or any name you prefer)
   - Make it **Private** or **Public** (your choice)
   - **DO NOT** initialize with README, .gitignore, or license

2. Push your code:
```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/gala-esquizofrenia-de-cortes-25.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: GitLab or Bitbucket**
- Follow similar steps but use GitLab/Bitbucket repository URLs

### Step 3: Deploy on Vercel

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign up with your GitHub/GitLab/Bitbucket account (recommended) or email

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your Git repository (`gala-esquizofrenia-de-cortes-25`)
   - Vercel will automatically detect it's a Next.js project

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - If you have any `.env` variables, add them here
   - For this project, you likely don't need any

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-3 minutes)
   - Your app will be live at: `https://gala-esquizofrenia-de-cortes-25.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# Navigate to your project directory
cd /Users/sergio/Projects/gala-esquizofrenia-de-cortes-25

# Deploy to production
vercel

# Or deploy to preview
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No** (for first deployment)
- Project name? `gala-esquizofrenia-de-cortes-25` (or press Enter for default)
- Directory? `./` (press Enter)
- Override settings? **No** (press Enter)

---

## Important Notes

### Before Deploying:

1. **Test Build Locally**
   ```bash
   npm run build
   npm start
   ```
   Make sure the build succeeds and the app runs correctly.

2. **Check Required Files**
   - ✅ `package.json` - exists
   - ✅ `next.config.ts` - exists
   - ✅ `src/app/` - your app files
   - ✅ `public/` - static assets (logo, music file if you added one)

3. **Music File**
   - If you added a music file, make sure it's in the `public/` folder
   - Large audio files may slow down deployment
   - Consider compressing the audio file

4. **Environment Variables**
   - If you need any environment variables, add them in Vercel dashboard:
     - Project → Settings → Environment Variables

### After Deployment:

1. **Custom Domain** (Optional)
   - Go to Project → Settings → Domains
   - Add your custom domain

2. **Automatic Deployments**
   - Every push to `main` branch will trigger a new deployment
   - Preview deployments are created for pull requests

3. **View Logs**
   - Go to Project → Deployments → Click on a deployment → View Function Logs

---

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Test build locally: `npm run build`
3. Common issues:
   - Missing dependencies in `package.json`
   - TypeScript errors
   - Missing files in `public/` folder

### Music Not Playing

- Browser autoplay restrictions may prevent music from playing
- Users need to interact with the page first (click password input)
- This is a browser security feature, not a deployment issue

### Images Not Loading

- Make sure all images are in the `public/` folder
- Use paths starting with `/` (e.g., `/logo-philip-morris.jpg`)

---

## Quick Deploy Checklist

- [ ] Code is committed to Git
- [ ] Repository is pushed to GitHub/GitLab/Bitbucket
- [ ] `npm run build` succeeds locally
- [ ] All assets (images, music) are in `public/` folder
- [ ] Vercel account is created
- [ ] Project is imported and deployed
- [ ] App is accessible at Vercel URL

---

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support

