export default function HomePage() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to the Next.js Auth App 🚀</h1>
      <p>This is your home page. Use the navigation to:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>/register</strong> – Create a new account</li>
        <li><strong>/login</strong> – Login to your account</li>
        <li><strong>/profile</strong> – Access protected profile page</li>
      </ul>
    </main>
  );
}
