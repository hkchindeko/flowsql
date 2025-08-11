# Login Page Integration

This project has been updated with a new login page based on the shadcn-ui login-03 block, integrated with Better Auth.

## Features

- **Modern UI**: Clean, responsive login page using shadcn/ui components
- **OAuth Integration**: Google and Apple sign-in support
- **Email/Password**: Traditional authentication method
- **Better Auth**: Integrated with Better Auth library
- **TypeScript**: Full type safety

## Setup Instructions

### 1. Environment Variables

Add the following environment variables to your `.env` file:

```env
# Better Auth
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3001

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Apple OAuth
APPLE_CLIENT_ID=your-apple-client-id
APPLE_CLIENT_SECRET=your-apple-client-secret
```

### 2. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### 3. Apple OAuth Setup

1. Go to [Apple Developer Portal](https://developer.apple.com/)
2. Create a new App ID
3. Configure Sign in with Apple
4. Create a Service ID
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/apple`

## Routes

- `/login` - Login page
- `/register` - Registration page (uses same form)
- `/dashboard` - Redirect destination after successful login

## Components

- `LoginForm` - Main login component with OAuth and email/password
- `Card`, `Button`, `Input`, `Label` - shadcn/ui components used

## Server Configuration

The Better Auth configuration is in `apps/server/src/lib/auth.ts` and includes:

- Email and password authentication
- Google and Apple OAuth providers
- SQLite database with Drizzle ORM

## Usage

The login form automatically handles:
- OAuth redirects
- Form validation
- Error handling
- Loading states
- Navigation after successful authentication

## Customization

To customize the appearance:
1. Modify the `LoginForm` component in `apps/web/src/components/login-form.tsx`
2. Update the branding in the route components
3. Adjust the styling using Tailwind CSS classes

## Testing

To test the login functionality:

1. Start the development server: `bun run dev`
2. Navigate to `http://localhost:3001/login`
3. Try different authentication methods
4. Check redirects and error handling