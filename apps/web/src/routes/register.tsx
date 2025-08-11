import { createFileRoute } from '@tanstack/react-router';
import { GalleryVerticalEnd } from 'lucide-react';
import { LoginForm } from '@/components/login-form';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a className="flex items-center gap-2 self-center font-medium" href="#">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          FlowAnalytics
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
