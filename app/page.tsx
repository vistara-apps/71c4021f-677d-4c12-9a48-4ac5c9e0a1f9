import { Dashboard } from '../components/Dashboard';
import { FrameHeader } from '../components/FrameHeader';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-background">
      <div className="max-w-[640px] mx-auto px-4">
        <FrameHeader />
        <Dashboard />
      </div>
    </main>
  );
}
