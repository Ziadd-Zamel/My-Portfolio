export default function Footer() {
  return (
    <footer className="w-full max-w-full shrink-0 border-t border-border px-4 py-6 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()}
    </footer>
  );
}
