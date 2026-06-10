import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Next Single Template</h1>
        <p className="mt-3 text-lg text-neutral-500">Next.js 16 + TypeScript 6 + Tailwind CSS 4</p>
      </div>
      <div className="flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Documentation</Button>
      </div>
    </main>
  );
}
