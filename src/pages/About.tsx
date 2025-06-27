import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, TooltipProps } from 'recharts';
import { useTranslation } from 'react-i18next';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { motion } from 'framer-motion';

// Palet Warna Sesuai Hero Section
const HERO_THEME_COLORS = {
  primary: '#4f46e5', // purple-600
  secondary: '#3b82f6', // blue-600
  background: '#f0f5ff', // a light blue/purple tint
  muted: '#cbd5e1', // slate-300 for better contrast
};

const schoolDistributionData = [
  { name: 'SD', value: 400, fill: HERO_THEME_COLORS.primary },
  { name: 'SMP', value: 300, fill: HERO_THEME_COLORS.secondary },
  { name: 'SMA', value: 200, fill: '#22c55e' },
  { name: 'SMK', value: 150, fill: '#f59e42' },
  { name: 'SLB', value: 100, fill: '#a21caf' },
];

const About = () => {
  const { t } = useTranslation();

  const abkAccessData = [
    { name: t('about.chart2_legend1'), value: 12, fill: HERO_THEME_COLORS.secondary },
    { name: t('about.chart2_legend2'), value: 88, fill: HERO_THEME_COLORS.muted },
  ];

  const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 text-sm bg-white/80 backdrop-blur-sm border rounded-md shadow-lg">
          <p className="font-bold">{payload[0].name}</p>
          <p className="text-foreground">{`${t('about.chart_value_label')}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const challenges = [
    { title: t('about.challenge1_title'), description: t('about.challenge1_desc') },
    { title: t('about.challenge2_title'), description: t('about.challenge2_desc') },
    { title: t('about.challenge3_title'), description: t('about.challenge3_desc') },
    { title: t('about.challenge4_title'), description: t('about.challenge4_desc') },
  ];

  const solutions = [
    { title: t('about.solution1_title'), description: t('about.solution1_desc') },
    { title: t('about.solution2_title'), description: t('about.solution2_desc') },
    { title: t('about.solution3_title'), description: t('about.solution3_desc') },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto py-16 px-4">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-purple-600">{t('about.title_part1')}</span> <span className="text-blue-600">{t('about.title_part2')}</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.intro')}
          </p>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">{t('about.data_title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Card className="bg-white/70 backdrop-blur-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{t('about.chart1_title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={schoolDistributionData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#4b5563" fontSize={12} />
                    <YAxis stroke="#4b5563" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(199, 210, 254, 0.5)' }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {schoolDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{t('about.chart2_title')}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie data={abkAccessData} cx="50%" cy="50%" innerRadius={80} outerRadius={120} paddingAngle={5} dataKey="value" labelLine={false}>
                      {abkAccessData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend iconType="circle" />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <span className="text-4xl font-bold text-blue-600">12%</span>
                    <p className="text-sm text-gray-600">{t('about.chart2_center_label')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">{t('about.challenges_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item, index) => (
              <Card key={index} className="text-center bg-white/70 backdrop-blur-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-purple-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="py-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-10 shadow-2xl">
              <h2 className="text-4xl font-bold text-center mb-10">{t('about.solutions_title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((item, index) => (
                  <div key={index} className="text-center">
                  <CardTitle className="text-blue-600 mb-2">{item.title}</CardTitle>
                  <p className="text-gray-700">{item.description}</p>
                  </div>
              ))}
              </div>
          </div>
        </motion.section>

        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{t('about.vision_title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">{t('about.vision_text')}</p>
          <h2 className="text-4xl font-bold mb-4">{t('about.mission_title')}</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-600">{t('about.mission1')}</h3>
                  <p className="text-gray-700">{t('about.mission1_desc')}</p>
              </div>
              <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-600">{t('about.mission2')}</h3>
                  <p className="text-gray-700">{t('about.mission2_desc')}</p>
              </div>
              <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-600">{t('about.mission3')}</h3>
                  <p className="text-gray-700">{t('about.mission3_desc')}</p>
              </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
