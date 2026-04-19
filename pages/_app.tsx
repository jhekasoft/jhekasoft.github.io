import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Menu, Sun, Moon, X } from 'lucide-react';
import { GitHubIcon, TelegramIcon } from '../src/BrandIcons';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import '../styles/globals.css';

const themeModeKey = 'themeMode';

function readThemeMode(): string {
  const themeMode = localStorage.getItem(themeModeKey);
  return themeMode === 'light' ? 'light' : 'dark';
}

function writeThemeMode(mode: string): string {
  const themeMode = mode === 'light' ? 'light' : 'dark';
  localStorage.setItem(themeModeKey, themeMode);
  return themeMode;
}

const menuList = [
  { title: 'Experience', url: '/experience' },
  { title: 'Timeline', url: '/timeline' },
  { title: 'Publications', url: '/publications' },
  { title: 'Projects', url: '/projects' },
  { title: 'Contact', url: '/contact' },
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [themeMode, setThemeMode] = React.useState<string>('dark');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const mode = readThemeMode();
    setThemeMode(mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (process.env.googleTagId) {
      TagManager.initialize({ gtmId: process.env.googleTagId || '' });
    }
  }, []);

  function toggleColorMode() {
    const next = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(next);
    writeThemeMode(next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function closeDrawer(e: React.KeyboardEvent | React.MouseEvent) {
    if (
      e.type === 'keydown' &&
      ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')
    ) return;
    setDrawerOpen(false);
  }

  return (
    <>
      <Head>
        <title>{process.env.baseTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" key="title" content={process.env.baseTitle} />
        <meta property="og:description" key="description" content="Software engineer. 🧑‍💻 Kyiv, Ukraine. 🇺🇦 Golang, TypeScript, Node.js" />
        <meta property="og:url" content={process.env.baseUrl + router.asPath} />
        <meta property="og:site_name" content={process.env.baseTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" key="image" content={process.env.baseUrl + '/cover.jpg'} />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Drawer overlay */}
        {drawerOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={closeDrawer}
            onKeyDown={closeDrawer}
          />
        )}

        {/* Drawer */}
        <div
          className={`fixed left-0 top-0 h-full w-64 z-50 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-200 ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="presentation"
          onClick={closeDrawer}
          onKeyDown={closeDrawer}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <span className="font-semibold">{process.env.baseTitle}</span>
            <button onClick={closeDrawer} className="p-1">
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col">
            <Link
              href="/"
              className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              activeClassName="bg-gray-100 dark:bg-gray-800 font-semibold"
            >
              Main
            </Link>
            {menuList.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                activeClassName="bg-gray-100 dark:bg-gray-800 font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* AppBar */}
        <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-teal-600/80 dark:bg-teal-800/80 text-white shadow">
          <div className="flex items-center h-10 px-2 gap-1">
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1.5 rounded hover:bg-white/10 transition-colors"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={20} />
            </button>

            {/* Avatar link — desktop only */}
            <Link href="/" className="hidden md:flex items-center p-1 rounded hover:bg-white/10 transition-colors">
              <img
                alt="Eugene Efremov"
                src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
                className="w-6 h-6 rounded-full"
              />
            </Link>

            {/* Site title */}
            <Link href="/" className="font-semibold text-base hover:opacity-90 px-1">
              {process.env.baseTitle}
            </Link>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-0.5">
              {menuList.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className="px-3 py-1.5 rounded text-sm hover:bg-white/10 transition-colors"
                  activeClassName="bg-white/20 font-semibold"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-5 w-px bg-white/30 mx-1" />

            {/* Theme toggle */}
            <button
              aria-label="Toggle dark/light mode"
              title="Dark/Light mode"
              onClick={toggleColorMode}
              className="p-1.5 rounded hover:bg-white/10 transition-colors"
            >
              {themeMode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Divider */}
            <div className="h-5 w-px bg-white/30 mx-1" />

            {/* Social links */}
            <a
              href="https://t.me/jhekasoft"
              target="_blank"
              rel="noreferrer"
              title="Telegram"
              className="p-1.5 rounded hover:bg-white/10 transition-colors"
            >
              <TelegramIcon size={18} />
            </a>
            <a
              href="https://github.com/jhekasoft"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-1.5 rounded hover:bg-white/10 transition-colors"
            >
              <GitHubIcon size={18} />
            </a>
          </div>
        </header>

        {/* AppBar spacer */}
        <div className="h-10" />

        {/* Page content */}
        <main className="flex-1">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer className="py-2 px-4 mt-auto bg-gray-100 dark:bg-gray-800">
          <Copyright />
        </footer>
      </div>
    </>
  );
}
