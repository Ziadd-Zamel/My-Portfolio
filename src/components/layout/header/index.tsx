import { Brand } from "./components/brand";
import { DesktopNav } from "./components/desktop-nav";
import { HeaderActions } from "./components/header-actions";
import { MobileMenu } from "./components/mobile-menu";
import { HeaderFrame } from "./header-frame";

export default function Header() {
  return (
    <HeaderFrame>
      <div className="box-container flex h-16 items-center justify-between gap-4 sm:h-18">
        <Brand />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <HeaderActions />
          <MobileMenu />
        </div>
      </div>
    </HeaderFrame>
  );
}
