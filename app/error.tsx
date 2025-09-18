'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-dark-background flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        <h2 className="text-2xl font-bold text-dark-foreground">
          Something went wrong!
        </h2>
        <p className="text-dark-text-secondary">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
