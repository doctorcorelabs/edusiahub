import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const CallToActionSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            {t('callToAction.title')}
          </h2>
          
          <blockquote className="text-xl lg:text-2xl text-blue-100 mb-8 italic leading-relaxed">
            "{t('callToAction.subtitle')}"
          </blockquote>
          
          <p className="text-lg text-blue-100 mb-12">
            {t('callToAction.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              {t('callToAction.buttons.volunteer')}
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              {t('callToAction.buttons.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
