export default function RootLogin({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <h1>SSD</h1>
        {children}
      </div>
    );
  }