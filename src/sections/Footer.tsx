import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/@ValiyevDev",
  },
  {
    title: "Telegram",
    href: "https://t.me/vsa_010",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/vsa_010",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadsodiq-valiyev-a479b4379",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2
                   -translate-x-1/2 bg-emerald-300/30 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 "
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row justify-between">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row imtes-center gap-8 ">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:text-white"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
