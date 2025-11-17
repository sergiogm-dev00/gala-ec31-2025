# Commands to Push Changes

Run these commands in your terminal:

```bash
# Navigate to project directory
cd /Users/sergio/Projects/gala-esquizofrenia-de-cortes-25

# Check what files have changed
git status

# Add all changes
git add .

# Commit the changes
git commit -m "Update music file to john_pork_is_calling.mp3 and finalize app"

# Push to GitHub
git push origin main
```

**Note:** If you're using HTTPS and get prompted for credentials:
- Username: `sergiogm-dev00`
- Password: Use your Personal Access Token (not your GitHub password)

If you're using SSH and it's not working, switch to HTTPS:
```bash
git remote set-url origin https://github.com/sergiogm-dev00/gala-ec31-2025.git
```

