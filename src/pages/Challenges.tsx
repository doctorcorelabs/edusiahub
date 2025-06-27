import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart as BarChartIcon, 
  PieChart as PieChartIcon, 
  Map, 
  Users, 
  AlertTriangle, 
  BookOpen, 
  Globe,
  TrendingUp,
  TrendingDown,
  Eye,
  Heart,
  Brain,
  Accessibility,
  GraduationCap,
  Building,
  Wifi,
  Smartphone,
  Monitor,
  Lightbulb,
  Target,
  Clock,
  DollarSign,
  Shield,
  CheckCircle,
  XCircle,
  MinusCircle
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Pie, 
  PieChart, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  Cell,
  Line,
  LineChart,
  Area,
  AreaChart,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart";
import { useTranslation } from 'react-i18next';

const Challenges = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const isIndonesian = i18n.language === 'id';

  // Place the data objects here so they are in scope
  const challengesData = {
    participation: [
      { level: isIndonesian ? "SD" : "Primary", "Tingkat Partisipasi": 65, "Target": 95, fill: "#3B82F6" },
      { level: isIndonesian ? "SMP" : "Junior High", "Tingkat Partisipasi": 58, "Target": 90, fill: "#10B981" },
      { level: isIndonesian ? "SMA" : "Senior High", "Tingkat Partisipasi": 45, "Target": 85, fill: "#F59E0B" },
      { level: isIndonesian ? "SMK" : "Vocational", "Tingkat Partisipasi": 38, "Target": 80, fill: "#EF4444" },
    ],
    facilities: [
      { facility: isIndonesian ? "Akses Ramp" : "Access Ramp", value: 40, target: 100, fill: "#3B82F6" },
      { facility: isIndonesian ? "Toilet Khusus" : "Special Toilet", value: 25, target: 100, fill: "#10B981" },
      { facility: isIndonesian ? "Buku Braille" : "Braille Book", value: 15, target: 100, fill: "#F59E0B" },
      { facility: isIndonesian ? "Teknologi Asistif" : "Assistive Technology", value: 12, target: 100, fill: "#8B5CF6" },
      { facility: isIndonesian ? "Ruang Terapi" : "Therapy Room", value: 8, target: 100, fill: "#EF4444" },
      { facility: isIndonesian ? "Lainnya" : "Others", value: 20, target: 100, fill: "#6B7280" },
    ],
    teachers: [
      { region: isIndonesian ? "Jawa" : "Java", "Guru Terlatih": 35, "Total Guru": 100, fill: "#3B82F6" },
      { region: isIndonesian ? "Sumatera" : "Sumatra", "Guru Terlatih": 28, "Total Guru": 100, fill: "#10B981" },
      { region: isIndonesian ? "Sulawesi" : "Sulawesi", "Guru Terlatih": 22, "Total Guru": 100, fill: "#F59E0B" },
      { region: isIndonesian ? "Kalimantan" : "Kalimantan", "Guru Terlatih": 18, "Total Guru": 100, fill: "#8B5CF6" },
      { region: isIndonesian ? "Papua" : "Papua", "Guru Terlatih": 12, "Total Guru": 100, fill: "#EF4444" },
      { region: isIndonesian ? "Maluku" : "Maluku", "Guru Terlatih": 15, "Total Guru": 100, fill: "#6B7280" },
    ],
    regionalComparison: [
      { region: isIndonesian ? "DKI Jakarta" : "Jakarta", infrastructure: 75, teachers: 65, policy: 80, stigma: 45 },
      { region: isIndonesian ? "Jawa Barat" : "West Java", infrastructure: 60, teachers: 55, policy: 70, stigma: 50 },
      { region: isIndonesian ? "Jawa Tengah" : "Central Java", infrastructure: 55, teachers: 50, policy: 65, stigma: 55 },
      { region: isIndonesian ? "Jawa Timur" : "East Java", infrastructure: 50, teachers: 45, policy: 60, stigma: 60 },
      { region: isIndonesian ? "Sumatera Utara" : "North Sumatra", infrastructure: 45, teachers: 40, policy: 55, stigma: 65 },
      { region: isIndonesian ? "Sulawesi Selatan" : "South Sulawesi", infrastructure: 40, teachers: 35, policy: 50, stigma: 70 },
    ],
    timeline: [
      { year: 2015, policy: 30, implementation: 20, awareness: 25 },
      { year: 2016, policy: 35, implementation: 25, awareness: 30 },
      { year: 2017, policy: 40, implementation: 30, awareness: 35 },
      { year: 2018, policy: 45, implementation: 35, awareness: 40 },
      { year: 2019, policy: 50, implementation: 40, awareness: 45 },
      { year: 2020, policy: 55, implementation: 45, awareness: 50 },
      { year: 2021, policy: 60, implementation: 50, awareness: 55 },
      { year: 2022, policy: 65, implementation: 55, awareness: 60 },
      { year: 2023, policy: 70, implementation: 60, awareness: 65 },
      { year: 2024, policy: 75, implementation: 65, awareness: 70 },
    ],
    challenges: [
      { category: isIndonesian ? "Infrastruktur" : "Infrastructure", severity: 85, impact: isIndonesian ? "Tinggi" : "High", priority: isIndonesian ? "Kritis" : "Critical" },
      { category: isIndonesian ? "SDM Guru" : "Teachers HR", severity: 78, impact: isIndonesian ? "Tinggi" : "High", priority: isIndonesian ? "Kritis" : "Critical" },
      { category: isIndonesian ? "Stigma Sosial" : "Social Stigma", severity: 72, impact: isIndonesian ? "Sedang" : "Medium", priority: isIndonesian ? "Tinggi" : "High" },
      { category: isIndonesian ? "Kebijakan" : "Policy", severity: 65, impact: isIndonesian ? "Tinggi" : "High", priority: isIndonesian ? "Tinggi" : "High" },
      { category: isIndonesian ? "Teknologi" : "Technology", severity: 58, impact: isIndonesian ? "Sedang" : "Medium", priority: isIndonesian ? "Sedang" : "Medium" },
      { category: isIndonesian ? "Anggaran" : "Budget", severity: 82, impact: isIndonesian ? "Tinggi" : "High", priority: isIndonesian ? "Kritis" : "Critical" },
    ]
  };

  const testimonials = [
    {
      name: isIndonesian ? "Ibu Sari" : "Mrs. Sari",
      role: isIndonesian ? "Orang Tua Siswa" : "Parent",
      location: isIndonesian ? "Jakarta" : "Jakarta",
      quote: "Awalnya saya khawatir, tapi dengan dukungan sekolah, anak saya kini bisa belajar dan bermain dengan teman-temannya tanpa merasa berbeda.",
      quoteEn: "At first I was worried, but with school support, my child can now learn and play with friends without feeling different.",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: isIndonesian ? "Bapak Agung" : "Mr. Agung",
      role: isIndonesian ? "Guru SLB" : "Special School Teacher",
      location: isIndonesian ? "Bandung" : "Bandung",
      quote: "Tantangan terbesar adalah mengubah pola pikir. Pendidikan inklusif bukan hanya tentang fasilitas, tapi tentang hati yang terbuka.",
      quoteEn: "The biggest challenge is changing mindsets. Inclusive education is not just about facilities, but about open hearts.",
      image: "/placeholder.svg",
      rating: 4
    },
    {
      name: isIndonesian ? "Ibu Dewi" : "Mrs. Dewi",
      role: isIndonesian ? "Kepala Sekolah" : "Principal",
      location: isIndonesian ? "Surabaya" : "Surabaya",
      quote: "Implementasi pendidikan inklusif memerlukan komitmen jangka panjang dan dukungan dari semua pihak.",
      quoteEn: "Implementing inclusive education requires long-term commitment and support from all parties.",
      image: "/placeholder.svg",
      rating: 5
    },
    {
      name: isIndonesian ? "Pak Rudi" : "Mr. Rudi",
      role: isIndonesian ? "Pemerhati Pendidikan" : "Education Observer",
      location: isIndonesian ? "Medan" : "Medan",
      quote: "Data menunjukkan kemajuan, tapi masih banyak yang harus dilakukan untuk mencapai pendidikan inklusif yang ideal.",
      quoteEn: "Data shows progress, but much more needs to be done to achieve ideal inclusive education.",
      image: "/placeholder.svg",
      rating: 4
    }
  ];

  const chartConfig = {
    "Tingkat Partisipasi": {
      label: isIndonesian ? "Partisipasi (%)" : "Participation (%)",
    },
    "Target": {
      label: isIndonesian ? "Target (%)" : "Target (%)",
    },
    "Guru Terlatih": {
      label: isIndonesian ? "Guru Terlatih (%)" : "Trained Teachers (%)",
    },
    "Total Guru": {
      label: isIndonesian ? "Total Guru (%)" : "Total Teachers (%)",
    },
  } satisfies ChartConfig;

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#6B7280'];

  const getPriorityColor = (priority: string) => {
    // Support both Indonesian and English
    switch (priority) {
      case 'Kritis':
      case 'Critical':
        return 'bg-red-500';
      case 'Tinggi':
      case 'High':
        return 'bg-orange-500';
      case 'Sedang':
      case 'Medium':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 80) return 'text-red-600';
    if (severity >= 60) return 'text-orange-600';
    if (severity >= 40) return 'text-yellow-600';
    return 'text-green-600';
  };

  // Define legend labels for teachers chart
  const trainedLabel = isIndonesian ? 'Guru Terlatih' : 'Trained Teachers';
  const totalLabel = isIndonesian ? 'Total Guru' : 'Total Teachers';
  // Define consistent colors
  const TRAINED_COLOR = '#2563eb'; // blue-600
  const TOTAL_COLOR = '#6b7280';   // gray-500

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 1. Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-4 text-white" 
        style={{ backgroundImage: "url('/new.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-4">
            {isIndonesian ? "Tantangan Pendidikan Inklusif" : "Inclusive Education Challenges"}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {isIndonesian 
              ? "Setiap Anak Berhak Belajar, Realita Masih Berbicara Lain"
              : "Every Child Has the Right to Learn, Reality Tells a Different Story"
            }
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {isIndonesian
              ? "Menyelami tantangan nyata yang menghalangi terwujudnya pendidikan inklusif untuk semua anak di Indonesia."
              : "Exploring the real challenges that hinder the realization of inclusive education for all children in Indonesia."
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">2.5M+</div>
              <div className="text-sm">{isIndonesian ? "Anak Berkebutuhan Khusus" : "Children with Special Needs"}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">30%</div>
              <div className="text-sm">{isIndonesian ? "Tidak Memiliki Akses" : "Lack Access"}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">65%</div>
              <div className="text-sm">{isIndonesian ? "Sekolah Belum Siap" : "Schools Not Ready"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Challenges Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">
              {isIndonesian ? "Peta Masalah Pendidikan Inklusif" : "Inclusive Education Challenge Map"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isIndonesian
                ? "Enam pilar utama menjadi tantangan besar yang harus kita hadapi bersama untuk masa depan pendidikan yang lebih baik."
                : "Six main pillars pose significant challenges that we must face together for a better educational future."
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challengesData.challenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{challenge.category}</CardTitle>
                    <Badge className={getPriorityColor(challenge.priority)}>
                      {challenge.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{isIndonesian ? "Tingkat Keparahan" : "Severity Level"}</span>
                        <span className={getSeverityColor(challenge.severity)}>{challenge.severity}%</span>
                      </div>
                      <Progress value={challenge.severity} className="h-2" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>{isIndonesian ? "Dampak" : "Impact"}: {challenge.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Data Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isIndonesian ? "Angka di Balik Cerita" : "Numbers Behind the Story"}
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">
                <span className="inline md:hidden" title={isIndonesian ? 'Gambaran Umum' : 'Overview'}><BarChartIcon className="w-5 h-5" /></span>
                <span className="hidden md:inline">{isIndonesian ? 'Gambaran Umum' : 'Overview'}</span>
              </TabsTrigger>
              <TabsTrigger value="participation">
                <span className="inline md:hidden" title={isIndonesian ? 'Partisipasi' : 'Participation'}><Users className="w-5 h-5" /></span>
                <span className="hidden md:inline">{isIndonesian ? 'Partisipasi' : 'Participation'}</span>
              </TabsTrigger>
              <TabsTrigger value="facilities">
                <span className="inline md:hidden" title={isIndonesian ? 'Fasilitas' : 'Facilities'}><PieChartIcon className="w-5 h-5" /></span>
                <span className="hidden md:inline">{isIndonesian ? 'Fasilitas' : 'Facilities'}</span>
              </TabsTrigger>
              <TabsTrigger value="regional">
                <span className="inline md:hidden" title={isIndonesian ? 'Perbandingan Regional' : 'Regional Comparison'}><Map className="w-5 h-5" /></span>
                <span className="hidden md:inline">{isIndonesian ? 'Perbandingan Regional' : 'Regional Comparison'}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{isIndonesian ? "Tren Implementasi Pendidikan Inklusif" : "Inclusive Education Implementation Trends"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart data={challengesData.timeline}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="policy" 
                          stackId="1" 
                          stroke="#3B82F6" 
                          fill="#3B82F6" 
                          fillOpacity={0.3}
                          name={isIndonesian ? "Kebijakan" : "Policy"}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="implementation" 
                          stackId="1" 
                          stroke="#10B981" 
                          fill="#10B981" 
                          fillOpacity={0.3}
                          name={isIndonesian ? "Implementasi" : "Implementation"}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="awareness" 
                          stackId="1" 
                          stroke="#F59E0B" 
                          fill="#F59E0B" 
                          fillOpacity={0.3}
                          name={isIndonesian ? "Kesadaran" : "Awareness"}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{isIndonesian ? "Distribusi Tantangan Berdasarkan Kategori" : "Challenge Distribution by Category"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart data={challengesData.challenges}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="category" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar
                          name={isIndonesian ? "Tingkat Keparahan" : "Severity Level"}
                          dataKey="severity"
                          stroke="#3B82F6"
                          fill="#3B82F6"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="participation" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{isIndonesian ? "Angka Partisipasi Kasar (APK) vs Target" : "Gross Participation Rate (GPR) vs Target"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={challengesData.participation}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="level" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Tingkat Partisipasi" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Target" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="facilities" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>{isIndonesian ? "Ketersediaan Fasilitas Ramah Disabilitas" : "Availability of Disability-Friendly Facilities"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={challengesData.facilities}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ facility, value }) => `${facility}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {challengesData.facilities.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{isIndonesian ? "Guru dengan Pelatihan Inklusi per Wilayah" : "Teachers with Inclusive Training by Region"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={challengesData.teachers}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="region" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Guru Terlatih" name={trainedLabel} fill={TRAINED_COLOR} radius={[4, 4, 0, 0]} />
                        <Bar dataKey="Total Guru" name={totalLabel} fill={TOTAL_COLOR} radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="regional" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{isIndonesian ? "Perbandingan Kesiapan Regional" : "Regional Readiness Comparison"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={challengesData.regionalComparison}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="region" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="infrastructure" fill="#3B82F6" radius={[4, 4, 0, 0]} name={isIndonesian ? "Infrastruktur" : "Infrastructure"} />
                      <Bar dataKey="teachers" fill="#10B981" radius={[4, 4, 0, 0]} name={isIndonesian ? "Guru" : "Teachers"} />
                      <Bar dataKey="policy" fill="#F59E0B" radius={[4, 4, 0, 0]} name={isIndonesian ? "Kebijakan" : "Policy"} />
                      <Line type="monotone" dataKey="stigma" stroke="#EF4444" strokeWidth={3} name={isIndonesian ? "Stigma" : "Stigma"} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 4. Detailed Challenges Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {isIndonesian ? "Analisis Mendalam Tantangan" : "Deep Analysis of Challenges"}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-500" />
                  {isIndonesian ? "Tantangan Infrastruktur" : "Infrastructure Challenges"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Akses Fisik" : "Physical Access"}</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Teknologi Asistif" : "Assistive Technology"}</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  <Progress value={12} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Konektivitas Digital" : "Digital Connectivity"}</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  {isIndonesian ? "Tantangan Sumber Daya Manusia" : "Human Resource Challenges"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Pelatihan Guru" : "Teacher Training"}</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Rasio Guru-Siswa" : "Teacher-Student Ratio"}</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Dukungan Spesialis" : "Specialist Support"}</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  {isIndonesian ? "Tantangan Sosial & Budaya" : "Social & Cultural Challenges"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Stigma Masyarakat" : "Community Stigma"}</span>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Kesadaran Keluarga" : "Family Awareness"}</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Dukungan Komunitas" : "Community Support"}</span>
                    <span className="text-sm font-medium">38%</span>
                  </div>
                  <Progress value={38} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-red-500" />
                  {isIndonesian ? "Tantangan Kebijakan & Regulasi" : "Policy & Regulatory Challenges"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Implementasi Kebijakan" : "Policy Implementation"}</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Alokasi Anggaran" : "Budget Allocation"}</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">{isIndonesian ? "Koordinasi Antar Sektor" : "Cross-Sector Coordination"}</span>
                    <span className="text-sm font-medium">55%</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Star component for ratings
const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default Challenges; 