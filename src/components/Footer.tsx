export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-semibold tracking-tight">
            monad.passport
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 monad.passport
          </div>
        </div>
      </div>
    </footer>
  );
};
