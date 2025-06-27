import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Chart, ChartData } from '@/components/ui/chart';
import { 
  Building2, 
  Users, 
  Laptop, 
  Heart, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Award,
  Target,
  Calendar,
  MapPin,
  Users2,
  BookOpen,
  Shield,
  Lightbulb
} from 'lucide-react';

const Solutions = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      key: 'infrastructure',
      icon: Building2,
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      key: 'teacherTraining',
      icon: Users,
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      key: 'technology',
      icon: Laptop,
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      key: 'community',
      icon: Heart,
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const implementationPhases = [
    { key: 'phase1', color: 'bg-blue-100 border-blue-300', progress: 100 },
    { key: 'phase2', color: 'bg-green-100 border-green-300', progress: 75 },
    { key: 'phase3', color: 'bg-purple-100 border-purple-300', progress: 50 },
    { key: 'phase4', color: 'bg-orange-100 border-orange-300', progress: 25 }
  ];

  // Chart data for visualizations
  const impactData: ChartData[] = [
    { label: 'Siswa Terlayani', value: 25000, color: '#3B82F6' },
    { label: 'Sekolah Inklusif', value: 500, color: '#10B981' },
    { label: 'Guru Terlatih', value: 10000, color: '#8B5CF6' },
    { label: 'Komunitas Terlibat', value: 200, color: '#F59E0B' }
  ];

  const regionalData: ChartData[] = [
    { label: 'Jawa', value: 45, color: '#3B82F6' },
    { label: 'Sumatera', value: 25, color: '#10B981' },
    { label: 'Sulawesi', value: 15, color: '#8B5CF6' },
    { label: 'Kalimantan', value: 10, color: '#F59E0B' },
    { label: 'Papua & Maluku', value: 5, color: '#EF4444' }
  ];

  const improvementData: ChartData[] = [
    { label: 'Partisipasi Siswa', value: 85, color: '#3B82F6' },
    { label: 'Kepercayaan Diri Guru', value: 90, color: '#10B981' },
    { label: 'Kepuasan Orang Tua', value: 78, color: '#8B5CF6' },
    { label: 'Hasil Pembelajaran', value: 82, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              {t('solutions.hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('solutions.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              {t('solutions.hero.subtitle')}
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              {t('solutions.hero.description')}
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 animate-bounce delay-1000">
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.overview.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {t('solutions.overview.subtitle')}
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('solutions.overview.description')}
            </p>
          </div>

          {/* Four Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <Card key={pillar.key} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${pillar.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {t(`solutions.pillars.${pillar.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-gray-600 text-center">
                    {t(`solutions.pillars.${pillar.key}.subtitle`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex flex-col items-center">
                  <p className="text-gray-700 mb-6 text-center">
                    {t(`solutions.pillars.${pillar.key}.description`)}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6 flex flex-col items-center">
                    {(t(`solutions.pillars.${pillar.key}.features`, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start justify-center text-sm text-gray-600 w-full max-w-xs">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-justify w-full block">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.implementation.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('solutions.implementation.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationPhases.map((phase, index) => (
                <Card key={phase.key} className={`${phase.color} border-2 relative overflow-hidden flex flex-col h-full min-h-[380px]`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                        {index + 1}
                      </div>
                      <Calendar className="w-6 h-6 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {t(`solutions.implementation.phases.${phase.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                      {t(`solutions.implementation.phases.${phase.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="flex-1 flex flex-col justify-start">
                      <div className="space-y-3 mb-4">
                        {(t(`solutions.implementation.phases.${phase.key}.activities`, { returnObjects: true }) as string[]).map((activity: string, idx: number) => (
                          <div key={idx} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-justify w-full block">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 mt-auto">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{phase.progress}%</span>
                      </div>
                      <Progress value={phase.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data & Analisis
            </h2>
            <p className="text-xl text-gray-600">
              Visualisasi dampak dan distribusi program pendidikan inklusif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Chart 
              title="Dampak Program" 
              data={impactData} 
              type="bar" 
              height={250}
            />
            <Chart 
              title="Distribusi Regional" 
              data={regionalData} 
              type="pie" 
              height={250}
            />
            <Chart 
              title="Peningkatan Kualitas" 
              data={improvementData} 
              type="bar" 
              height={250}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('solutions.successStories.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('solutions.successStories.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(t('solutions.successStories.stories', { returnObjects: true }) as any[]).map((story: any, index: number) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Success
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {story.school}
                  </CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {story.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-lg font-bold text-green-800 mb-2">
                      {story.achievement}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t('solutions.impact.title')}
            </h2>
            <p className="text-xl text-blue-100">
              {t('solutions.impact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t('solutions.impact.metrics', { returnObjects: true })).map(([key, metric]: [string, any]) => (
              <Card key={key} className="bg-white/10 backdrop-blur-sm border-white/20 text-center group hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {key === 'students' && <Users2 className="w-8 h-8 text-white" />}
                    {key === 'schools' && <Building2 className="w-8 h-8 text-white" />}
                    {key === 'teachers' && <BookOpen className="w-8 h-8 text-white" />}
                    {key === 'communities' && <Heart className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    {metric.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {metric.label}
                  </div>
                  <p className="text-blue-100 text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Lightbulb className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('solutions.callToAction.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {t('solutions.callToAction.subtitle')}
              </p>
              <p className="text-lg text-gray-700">
                {t('solutions.callToAction.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t('solutions.callToAction.buttons.getInvolved')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                {t('solutions.callToAction.buttons.learnMore')}
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                {t('solutions.callToAction.buttons.contact')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions; 