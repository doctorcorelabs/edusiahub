import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DollarSign, Users, Smartphone } from 'lucide-react';

const SolutionSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: DollarSign,
      title: t('solution.solution1.title'),
      description: t('solution.solution1.description'),
      details: t('solution.solution1.feature'),
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: t('solution.solution2.title'),
      description: t('solution.solution2.description'),
      details: t('solution.solution2.feature'),
      color: 'bg-green-500'
    },
    {
      icon: Smartphone,
      title: t('solution.solution3.title'),
      description: t('solution.solution3.description'),
      details: t('solution.solution3.feature'),
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('solution.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`flex justify-center items-center w-16 h-16 ${solution.color} rounded-xl mb-6 mx-auto`}>
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-center">
                {solution.description}
              </p>
              
              <p className="text-sm text-gray-500 leading-relaxed text-center">
                {solution.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
