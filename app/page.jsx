import Attribution from '@/components/Attribution';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center text-custom md:text-sm lg:text-custom">
      <Card></Card>
      <Attribution></Attribution>
    </main>
  );
}
