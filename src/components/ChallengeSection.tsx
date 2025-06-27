import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { TrendingDown, Users, BookOpen } from 'lucide-react';

const ChallengeSection = () => {
  const { t } = useTranslation();

  const challenges = [
    {
      icon: TrendingDown,
      percentage: '65%',
      description: t('challenge.challenge1.description'),
      color: 'text-red-600'
    },
    {
      icon: Users,
      percentage: '78%',
      description: t('challenge.challenge2.description'),
      color: 'text-orange-600'
    },
    {
      icon: BookOpen,
      percentage: '42%',
      description: t('challenge.challenge3.description'),
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('challenge.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('challenge.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                <challenge.icon className={`h-8 w-8 ${challenge.color}`} />
              </div>
              <div className={`text-4xl font-bold mb-4 ${challenge.color}`}>
                {challenge.percentage}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-3">
            {t('challenge.subtitle')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
