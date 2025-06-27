import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Target, Eye, Users, TrendingUp, Award, ArrowRight, Play, Globe, Heart, BookOpen, Star, Quote, CheckCircle, Clock, Calendar, BarChart3, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ChallengeSection from './ChallengeSection';
import SolutionSection from './SolutionSection';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate stats
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const keyPoints = [
    {
      icon: ShieldCheck,
      title: t('hero.keyPoints.point1.title'),
      description: t('hero.keyPoints.point1.description'),
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Target,
      title: t('hero.keyPoints.point2.title'),
      description: t('hero.keyPoints.point2.description'),
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: Eye,
      title: t('hero.keyPoints.point3.title'),
      description: t('hero.keyPoints.point3.description'),
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
  ];

  const stats = [
    { 
      number: t('hero.stats.stat1.number'), 
      label: t('hero.stats.stat1.label'), 
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: t('hero.stats.stat1.description')
    },
    { 
      number: t('hero.stats.stat2.number'), 
      label: t('hero.stats.stat2.label'), 
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      description: t('hero.stats.stat2.description')
    },
    { 
      number: t('hero.stats.stat3.number'), 
      label: t('hero.stats.stat3.label'), 
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: t('hero.stats.stat3.description')
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: t('hero.floatingCards.card2.title'),
      description: t('hero.floatingCards.card2.subtitle'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: t('hero.floatingCards.card1.title'),
      description: t('hero.floatingCards.card1.subtitle'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ShieldCheck,
      title: t('hero.floatingCards.card3.title'),
      description: t('hero.floatingCards.card3.subtitle'),
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Special Education Teacher",
      content: "EdusiaHub has transformed how I approach inclusive education. The resources and training have made a real difference in my classroom.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ahmad Rahman",
      role: "School Principal",
      content: "Our school's inclusive education program has improved significantly since implementing EdusiaHub's solutions. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const progressData = [
    { label: t('progress.areas.infrastructure'), percentage: 65, color: "bg-blue-500" },
    { label: t('progress.areas.teacherTraining'), percentage: 45, color: "bg-green-500" },
    { label: t('progress.areas.resourceAccess'), percentage: 78, color: "bg-purple-500" },
    { label: t('progress.areas.communitySupport'), percentage: 82, color: "bg-orange-500" }
  ];

  const timeline = [
    {
      year: "2025",
      title: t('progress.timeline.2025.foundation.title'),
      description: t('progress.timeline.2025.foundation.description'),
      status: "completed",
      icon: CheckCircle
    },
    {
      year: "2025",
      title: t('progress.timeline.2025.aiAssessment.title'),
      description: t('progress.timeline.2025.aiAssessment.description'),
      status: "current",
      icon: Clock
    },
    {
      year: "2026",
      title: t('progress.timeline.2026.first100.title'),
      description: t('progress.timeline.2026.first100.description'),
      status: "upcoming",
      icon: Calendar
    },
    {
      year: "2026",
      title: t('progress.timeline.2026.platform.title'),
      description: t('progress.timeline.2026.platform.description'),
      status: "upcoming",
      icon: Calendar
    },
    {
      year: "2027",
      title: t('progress.timeline.2027.expansion.title'),
      description: t('progress.timeline.2027.expansion.description'),
      status: "upcoming",
      icon: Calendar
    },
    {
      year: "2028",
      title: t('progress.timeline.2028.partnership.title'),
      description: t('progress.timeline.2028.partnership.description'),
      status: "upcoming",
      icon: Calendar
    }
  ];

  const impactData = [
    { category: t('impactMetrics.categories.learningOutcomes'), before: 45, after: 78, color: "from-green-400 to-green-600" },
    { category: t('impactMetrics.categories.teacherConfidence'), before: 32, after: 85, color: "from-blue-400 to-blue-600" },
    { category: t('impactMetrics.categories.parentSatisfaction'), before: 58, after: 92, color: "from-purple-400 to-purple-600" },
    { category: t('impactMetrics.categories.studentEngagement'), before: 41, after: 89, color: "from-orange-400 to-orange-600" }
  ];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Judul utama full width */}
        <div className="w-full px-4 pt-32 pb-8">
          <motion.h1
            className="max-w-5xl mx-auto text-center text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {(() => {
              const title = t('hero.title');
              // For EN: Shaping the Future of Inclusive Education in Indonesia
              // For ID: Membentuk Masa Depan Pendidikan Inklusif di Indonesia
              if (title.includes('Inclusive Education')) {
                const [before, after] = title.split('Inclusive Education');
                return <>{before}<span className="text-purple-600">Inclusive</span> <span className="text-blue-600">Education</span>{after}</>;
              } else if (title.includes('Pendidikan Inklusif')) {
                const [before, after] = title.split('Pendidikan Inklusif');
                return <>{before}<span className="text-purple-600">Pendidikan</span> <span className="text-blue-600">Inklusif</span>{after}</>;
              } else {
                return title;
              }
            })()}
          </motion.h1>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Content */}
            <motion.div 
              className="space-y-8 flex flex-col justify-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div 
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-base font-medium border border-blue-200 shadow mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                <span>{t('hero.sdgBadge')}</span>
              </motion.div>
              <div className="space-y-6">
                <motion.p 
                  className="text-xl text-gray-600 leading-relaxed text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {t('hero.subtitle')}
                </motion.p>
              </div>

              {/* Interactive Statistics */}
              <motion.div 
                className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{t('hero.stats.title')}</h3>
                </div>
                
                <div className="text-center mb-6">
                  <motion.div 
                    key={currentStat}
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stats[currentStat].number}
                  </motion.div>
                  <motion.div 
                    key={`label-${currentStat}`}
                    className="text-lg font-semibold text-gray-900 mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stats[currentStat].label}
                  </motion.div>
                  <motion.p 
                    key={`desc-${currentStat}`}
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {stats[currentStat].description}
                  </motion.p>
                </div>

                <div className="flex justify-center gap-2">
                  {stats.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStat(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStat ? 'bg-blue-600 w-6' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Key Points */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {keyPoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${point.bgColor} ${point.textColor} rounded-xl flex items-center justify-center shadow-sm`}>
                      <point.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Kolom kanan: Gambar + Floating Card */}
            <motion.div 
              className="relative order-first lg:order-last flex flex-col items-center justify-start"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/inclusive.jpg"
                    alt="Inclusive education, diverse students and teacher collaborating in a classroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  {/* Floating cards - posisi tengah bawah, tidak menutupi teks */}
                  <div className="absolute left-1/2 bottom-6 transform -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 w-full px-4 pointer-events-none z-20">
                    <motion.div 
                      className="bg-white/30 backdrop-blur-lg rounded-2xl p-3 md:p-4 shadow-lg border border-white/40 max-w-xs w-full pointer-events-auto -translate-x-8 self-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{t('hero.floatingCards.card1.title')}</div>
                          <div className="text-xs text-white">{t('hero.floatingCards.card1.subtitle')}</div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-white/30 backdrop-blur-lg rounded-xl p-3 md:p-4 shadow-lg border border-white/40 max-w-xs w-full pointer-events-auto translate-x-8 self-end"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{t('hero.floatingCards.card2.title')}</div>
                          <div className="text-xs text-white">{t('hero.floatingCards.card2.subtitle')}</div>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-white/30 backdrop-blur-lg rounded-xl p-3 md:p-4 shadow-lg border border-white/40 max-w-xs w-full pointer-events-auto -translate-x-4 self-center"
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{t('hero.floatingCards.card3.title')}</div>
                          <div className="text-xs text-white">{t('hero.floatingCards.card3.subtitle')}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              </div>
              {/* Tombol di bawah gambar */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => navigate('/solutions')}
                >
                  {t('hero.buttons.discoverRole')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 group"
                  onClick={() => navigate('/ai')}
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  {t('hero.buttons.viewData')}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">{t('hero.scrollIndicator')}</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sisipkan Challenge & Solution sebelum Impact Metrics */}
      <ChallengeSection />
      <SolutionSection />

      {/* Impact Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('impactMetrics.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('impactMetrics.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-semibold text-gray-900 mb-4 text-center">{item.category}</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t('impactMetrics.labels.before')}</span>
                    <span className="text-lg font-bold text-gray-400">{item.before}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="h-2 rounded-full bg-gray-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.before}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t('impactMetrics.labels.after')}</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {item.after}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.after}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-green-600">
                    +{item.after - item.before}%
                  </span>
                  <div className="text-xs text-gray-600">{t('impactMetrics.labels.improvement')}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('progress.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('progress.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Progress Bars */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {progressData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      className={`h-3 rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('progress.journeyTitle')}</h3>
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-green-100 text-green-600' :
                      item.status === 'current' ? 'bg-blue-100 text-blue-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-gray-900">{item.year}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'completed' ? 'bg-green-100 text-green-800' :
                        item.status === 'current' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {t(`progress.status.${item.status}`)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
};

export default HeroSection;
