import Image from "next/image";
import logo from "@/assets/images/et-logo.png";
import whiteLogo from "@/assets/images/et-logo-white.png";

type HeaderProps = {
  dark: boolean;
  onHome: () => void;
  onThemeChange: () => void;
};

export default function Header({ dark, onHome, onThemeChange }: HeaderProps) {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center py-4 lg:py-8 xl:py-10">
      <div className="max-w-360 w-full mx-auto flex items-center px-6 md:px-10 lg:px-14 xl:px-18 min-[90rem]:px-20">
        <button
          type="button"
          onClick={onHome}
          className="pointer-events-auto mr-auto cursor-pointer"
          aria-label="Back to introduction"
        >
          <Image
            src={dark ? whiteLogo : logo}
            width={104}
            height={34}
            alt="Emmanuel Tobiloba"
            className="h-12 w-auto object-cover"
            priority
          />
        </button>

        <button
          type="button"
          role="switch"
          aria-checked={dark}
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          onClick={onThemeChange}
          className="pointer-events-auto relative h-7 w-14 cursor-pointer rounded-full border border-(--line) bg-(--card) shadow-sm transition-colors"
        >
          <span className="absolute top-1/2 left-2 -translate-y-1/2 text-[10px] text-(--muted)">
            ☀
          </span>
          <span className="absolute top-1/2 right-2 -translate-y-1/2 text-[10px] text-(--muted)">
            ☾
          </span>
          <span
            className={`absolute top-0.75 left-0.75 size-5 rounded-full bg-(--accent) shadow-md transition-transform duration-300 ease-out ${
              dark ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
