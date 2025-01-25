import Navigation from "@/app/_components/navigation/Navigation"

interface MainLayoutProps {
  children: React.ReactNode
}

// メインレイアウト
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-2"></footer>
    </div>
  )
}

export default MainLayout