import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="pl-10 w-full flex items-center justify-end">
          <Image
            src="/preview.png"
            width={700}
            height={900}
            className="rounded-l-xl object-contain"
            alt="EasyBank - Preview"
          />
        </div>
      </div>
    </main>
  );
}
