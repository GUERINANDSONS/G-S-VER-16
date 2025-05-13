import dynamic from 'next/dynamic';
const Scheduler = dynamic(() => import('../components/SchedulerApp'), { ssr: false });

export default function Home() {
  return (
    <main style={{ padding: '1rem' }}>
      <h1>Custom Home Scheduler</h1>
      <Scheduler />
    </main>
  );
}
