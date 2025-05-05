import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(`App running in ${import.meta.env.MODE} mode`);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>React + Vite App</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Development</h2>
        <ul>
          <li>Fast refresh enabled</li>
          <li>Environment: <strong>{import.meta.env.MODE}</strong></li>
          <li>Start dev server using: <code>npm run dev</code></li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Deployment</h2>
        <ul>
          <li>Build using: <code>npm run build</code></li>
          <li>Preview locally: <code>npm run preview</code></li>
          <li>Deploy <strong>dist/</strong> folder to static host (e.g., Vercel, Netlify, GitHub Pages)</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
