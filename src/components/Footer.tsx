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
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-blue-400 mb-4">{t('header.logo')}</div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.links.resources')}</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                {t('footer.links.privacy')}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                {t('footer.links.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
