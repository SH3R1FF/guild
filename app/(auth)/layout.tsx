const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      // <div className="flex-center min-h-screen w-full dark:bg-[#131316] bg-primary-50  bg-dotted-pattern bg-cover bg-fixed bg-center">
      <div className="flex-center min-h-screen w-full dark:bg-neutral-900/90 bg-primary-50 bg-cover bg-fixed bg-center">
        {children}
      </div>
    )
  }
  
  export default Layout