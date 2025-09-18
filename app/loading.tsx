import { LoadingSpinner } from '../components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner />
        <p className="text-dark-text-secondary">Loading AlphaFlow...</p>
      </div>
    </div>
  );
}
