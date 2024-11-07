export default function Layout({ children }) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col items-center justify-center bg-yellow-400">
        <header className="w-full p-5 text-center bg-yellow-500">
          <h1 className="text-3xl font-bold text-white">Bonnatösen</h1>
        </header>
        <main className="w-full max-w-4xl p-5">{children}</main>
        <footer className="w-full p-5 text-center bg-yellow-500">
          <p className="text-white">Följ oss: @bonnatosensburgare @Bonnatosensmackor</p>
        </footer>
      </body>
    </html>
  );
}
