
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx';
import { useTheme } from '@/hooks/useTheme.js';
import { useLanguage } from '@/hooks/useLanguage.js';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/calculator', label: t.nav.calculator },
    { path: '/contact', label: t.nav.contact }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80">
            <img 
              src="https://horizons-cdn.hostinger.com/d60b3481-e00e-4403-a421-f92fa9b69241/f534ef8093ed9065ca6b2e39b9ef46e6.png" 
              alt="Elektro Maks Logo" 
              className="h-6 sm:h-8 w-auto object-contain"
            />
            <span className="text-xl font-bold">{t.companyName}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex transition-all duration-200 hover:bg-muted"
            >
              {language === 'sr' ? 'EN' : 'SR'}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-all duration-200 hover:bg-muted active:scale-95"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="transition-all duration-200 active:scale-95">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    className="mt-4 transition-all duration-200"
                  >
                    {language === 'sr' ? 'Switch to English' : 'Prebaci na srpski'}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
