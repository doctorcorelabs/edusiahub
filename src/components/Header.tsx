import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Home,
  Info,
  BarChart2,
  Lightbulb,
  BookOpen,
  Users,
  Newspaper,
  Mail,
  ChevronDown,
  Compass,
  Brain
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const moreMenuRef = useRef(null);

  const navigation = [
    { name: t('header.navigation.home'), to: '/', icon: Home },
    { name: t('header.navigation.about'), to: '/about', icon: Info },
    { name: t('header.navigation.challenges'), to: '/challenges', icon: BarChart2 },
    { name: t('header.navigation.solutions'), to: '/solutions', icon: Lightbulb },
    { name: t('header.navigation.resources'), to: '/resources', icon: BookOpen },
    { name: t('header.navigation.ai'), to: '/ai', icon: Brain },
    { name: t('header.navigation.getInvolved'), to: '/get-involved', icon: Users },
    { name: t('header.navigation.blog'), to: '/blog', icon: Newspaper },
    { name: t('header.navigation.contact'), to: '/contact', icon: Mail },
  ];

  const primaryNav = navigation.slice(0, 6);
  const moreNav = navigation.slice(6);

  const isActive = (to: string) => location.pathname === to;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-lg rounded-b-2xl transition-all">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight drop-shadow-lg">
              EdusiaHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-4">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-base transition-all duration-200 relative ${isActive(item.to) ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                  <span
                    className={`absolute left-2 right-2 -bottom-1 h-0.5 rounded bg-blue-600 transition-all duration-300 ${isActive(item.to) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} group-hover:opacity-100 group-hover:scale-x-100`}
                  />
                </Link>
              );
            })}
            <div className="ml-2 flex items-center">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Language Toggle for mobile (hidden on desktop) */}
          <div className="flex lg:hidden items-center">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-gray-300 shadow ml-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl rounded-l-2xl p-6 flex flex-col gap-4 animate-slide-in">
              <div className="flex justify-between items-center mb-4">
                <Link to="/" className="text-2xl font-extrabold text-blue-600" onClick={() => setIsMenuOpen(false)}>
                  EdusiaHub
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-7 w-7" />
                </Button>
              </div>
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${isActive(item.to) ? 'text-blue-700 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5 shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-6">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .animate-slide-in {
            animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
