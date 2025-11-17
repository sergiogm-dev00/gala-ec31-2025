# GitHub Authentication Fix

## Problem
GitHub no longer supports password authentication for Git operations. You need to use a Personal Access Token (PAT) or SSH.

## Solution: Use Personal Access Token (Easiest)

### Step 1: Create a Personal Access Token on GitHub

1. Go to GitHub: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Vercel Deployment` (or any name you like)
4. Select expiration: Choose how long you want it to last (90 days, 1 year, or no expiration)
5. **Select scopes** (permissions):
   - ✅ `repo` (Full control of private repositories)
     - This includes: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`
6. Click **"Generate token"**
7. **IMPORTANT**: Copy the token immediately! It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - You won't be able to see it again!

### Step 2: Use the Token Instead of Password

When you push to GitHub, use the token as your password:

```bash
# When Git asks for password, paste your Personal Access Token instead
git push -u origin main
```

**Username**: `sergiogm-dev00`  
**Password**: `[paste your Personal Access Token here]`

### Step 3: Store Credentials (Optional but Recommended)

To avoid entering the token every time:

**On macOS/Linux:**
```bash
# Store credentials in Git credential helper
git config --global credential.helper store

# Then push (enter token once, it will be saved)
git push -u origin main
```

**Or use SSH instead (more secure):**

---

## Alternative: Use SSH (More Secure)

### Step 1: Generate SSH Key (if you don't have one)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Press Enter to accept default location
# Optionally set a passphrase for extra security
```

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Copy the entire output (starts with `ssh-ed25519`)

2. Go to GitHub: https://github.com/settings/keys
3. Click **"New SSH key"**
4. Title: `My MacBook` (or any name)
5. Key: Paste your public key
6. Click **"Add SSH key"**

### Step 3: Change Remote URL to SSH

```bash
# Change from HTTPS to SSH
git remote set-url origin git@github.com:sergiogm-dev00/gala-ec31-2025.git

# Verify
git remote -v

# Now push (no password needed!)
git push -u origin main
```

---

## Quick Fix (Right Now)

**Option 1: Use Personal Access Token (Fastest)**

1. Create token: https://github.com/settings/tokens
2. Copy the token
3. Run:
   ```bash
   git push -u origin main
   ```
4. When prompted:
   - Username: `sergiogm-dev00`
   - Password: `[paste your token]`

**Option 2: Use SSH (Better long-term)**

```bash
# Change to SSH
git remote set-url origin git@github.com:sergiogm-dev00/gala-ec31-2025.git

# Push
git push -u origin main
```

---

## Verify It Works

After successful push, you should see:
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
...
To https://github.com/sergiogm-dev00/gala-ec31-2025.git
 * [new branch]      main -> main
```

Then proceed with Vercel deployment!

