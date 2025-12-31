# OAuth Setup Guide for GitBattle

## Overview
GitBattle uses NextAuth.js for authentication with Google and GitHub OAuth providers. This guide will help you set up the required credentials.

## Prerequisites
- A Google Cloud account
- A GitHub account
- Access to your project's `.env` file

---

## 1. Google OAuth Setup

### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "GitBattle")
4. Click "Create"

### Step 2: Enable OAuth Consent Screen
1. In the left sidebar, go to **APIs & Services** → **OAuth consent screen**
2. Select **External** user type
3. Click  "Create"
4. Fill in the required fields:
   - App name: `GitBattle`
   - User support email: Your email
   - Developer contact: Your email
5. Click "Save and Continue"
6. Skip Scopes (click "Save and Continue")
7. Add test users if needed
8. Click "Save and Continue" → "Back to Dashboard"

### Step 3: Create OAuth Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click "Create Credentials" → "OAuth client ID"
3. Application type: **Web application**
4. Name: `GitBattle Web Client`
5. Authorized JavaScript origins:
   ```
   http://localhost:3000
   ```
6. Authorized redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
7. Click "Create"
8. Copy the **Client ID** and **Client Secret**

---

## 2. GitHub OAuth Setup

### Step 1: Create OAuth App
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in the form:
   - Application name: `GitBattle`
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Click "Register application"

### Step 2: Get Credentials
1. Copy the **Client ID**
2. Click "Generate a new client secret"
3. Copy the **Client Secret** (you won't be able to see it again!)

---

## 3. Environment Variables Setup

Create or update your `.env` file in the project root with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-generate-using-openssl

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id-here
GITHUB_CLIENT_SECRET=your-github-client-secret-here

# MongoDB Connection (if not already set)
# MONGODB_URI=mongodb://localhost:27017/gitbattle
# or your MongoDB Atlas connection string

# Email Configuration (for Contact Form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
CONTACT_EMAIL=recipient-email@gmail.com
```

### Generating NEXTAUTH_SECRET

Run this command in your terminal to generate a secure random secret:

```bash
openssl rand -base64 32
```

Copy the output and paste it as your `NEXTAUTH_SECRET` value.

### Getting EMAIL_PASS (Gmail)
1. Go to your [Google Account Settings](https://myaccount.google.com/)
2. Search for "App Passwords"
3. Create a new app password (e.g., "GitBattle Contact")
4. Copy the **16-character code** and use it as `EMAIL_PASS`
5. Set `EMAIL_USER` to your Gmail address

---

## 4. Production Setup

When deploying to production, you'll need to update the OAuth app settings:

### Google Cloud Console
1. Go to your OAuth client settings
2. Add your production domain to:
   - Authorized JavaScript origins: `https://yourdomain.com`
   - Authorized redirect URIs: `https://yourdomain.com/api/auth/callback/google`

### GitHub OAuth App
1. Go to your OAuth app settings
2. Update:
   - Homepage URL: `https://yourdomain.com`
   - Authorization callback URL: `https://yourdomain.com/api/auth/callback/github`

### Environment Variables
Update your production `.env` (or hosting platform's environment variables):
```env
NEXTAUTH_URL=https://yourdomain.com
```

---

## 5. Verification

After setting up:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/login`

3. Try signing in with both Google and GitHub

4. Check for errors in the console

---

## Troubleshooting

### "Configuration error" on sign-in
- Verify all environment variables are set correctly
- Ensure no extra spaces in your `.env` file
- Restart the dev server after changing `.env`

### "Redirect URI mismatch"
- Check that the callback URLs match exactly:
  - Google: `http://localhost:3000/api/auth/callback/google`
  - GitHub: `http://localhost:3000/api/auth/callback/github`
- Make sure there are no trailing slashes

### "Invalid client"
- Double-check your Client IDs and Secrets
- Regenerate secrets if needed

### Session/Auth not working
- Ensure `NEXTAUTH_SECRET` is generated and set
- Check that `sessionProvider` is wrapping your app in `layout.tsx`

---

## Security Notes

- **Never commit `.env` to version control**  (it's already in `.gitignore`)
- Keep your Client Secrets secure
- Regenerate secrets if they're ever exposed
- Use different OAuth apps for development and production
- Rotate `NEXTAUTH_SECRET` periodically

---

## Need Help?

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
