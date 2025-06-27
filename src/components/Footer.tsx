import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('footer.links.about'), href: '/about' },
    { name: t('footer.links.programs'), href: '/solutions' },
    { name: t('footer.links.resources'), href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ];

  const resources = [
    { name: 'Untuk Orang Tua', href: '/resources/parents' },
    { name: 'Untuk Guru', href: '/resources/teachers' },
    { name: 'Untuk Pembuat Kebijakan', href: '/resources/policy' },
    { name: 'Komunitas', href: '/community' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:col-span-2">
          <div className="text-3xl font-bold text-blue-400 mb-4">{t('header.logo')}</div>
          <p className="text-gray-300 mb-6 max-w-md">
            {t('footer.description')}
          </p>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EdusiaHub. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
