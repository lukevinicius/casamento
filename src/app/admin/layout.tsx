export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen bg-zinc-800 p-4 md:p-20">{children}</div>
}
