import SidebarLayout from "@/components/layout/sidebar/SidebarLayout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarLayout pageTitle="Keremet chat adminstration">
        {children}
      </SidebarLayout>
    </div>
  );
}
