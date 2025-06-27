import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart as BarChartIcon, PieChart as PieChartIcon, Map, Users, AlertTriangle, BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"


// Placeholder data - in a real application, this would come from an API or a dedicated data file.
const testimonials = [
  {
    name: "Ibu Sari",
    role: "Orang Tua Siswa",
    quote: "Awalnya saya khawatir, tapi dengan dukungan sekolah, anak saya kini bisa belajar dan bermain dengan teman-temannya tanpa merasa berbeda.",
    image: "/placeholder.svg"
  },
  {
    name: "Bapak Agung",
    role: "Guru SLB",
    quote: "Tantangan terbesar adalah mengubah pola pikir. Pendidikan inklusif bukan hanya tentang fasilitas, tapi tentang hati yang terbuka.",
    image: "/placeholder.svg"
  }
];

const Challenges = () => {
  const barChartData = [
    { level: "SD", "Tingkat Partisipasi": 65, fill: "var(--color-sd)" },
    { level: "SMP", "Tingkat Partisipasi": 58, fill: "var(--color-smp)" },
    { level: "SMA", "Tingkat Partisipasi": 45, fill: "var(--color-sma)" },
  ];

  const barChartConfig = {
    "Tingkat Partisipasi": {
      label: "Partisipasi (%)",
    },
    sd: {
      label: "SD",
      color: "hsl(var(--chart-1))",
    },
    smp: {
      label: "SMP",
      color: "hsl(var(--chart-2))",
    },
    sma: {
      label: "SMA",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig

  const pieChartData = [
    { facility: "Akses Ramp", value: 40, fill: "var(--color-ramp)" },
    { facility: "Toilet Khusus", value: 25, fill: "var(--color-toilet)" },
    { facility: "Buku Braille", value: 15, fill: "var(--color-braille)" },
    { facility: "Lainnya", value: 20, fill: "var(--color-other)" },
  ];

  const pieChartConfig = {
    value: {
      label: "Persentase",
    },
    ramp: {
      label: "Akses Ramp",
      color: "hsl(var(--chart-1))",
    },
    toilet: {
      label: "Toilet Khusus",
      color: "hsl(var(--chart-2))",
    },
    braille: {
      label: "Buku Braille",
      color: "hsl(var(--chart-3))",
    },
    other: {
      label: "Lainnya",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 1. Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-4 text-white" 
        style={{ backgroundImage: "url('/inklusif.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Setiap Anak Berhak Belajar, Realita Masih Berbicara Lain
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Menyelami tantangan nyata yang menghalangi terwujudnya pendidikan inklusif untuk semua anak di Indonesia.
          </p>
        </div>
      </section>

      {/* 2. Challenges Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Peta Masalah Pendidikan Inklusif</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Empat pilar utama menjadi tantangan besar yang harus kita hadapi bersama untuk masa depan pendidikan yang lebih baik.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Map className="mx-auto h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Infrastruktur</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Kesenjangan akses fisik dan digital yang membatasi partisipasi.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Sumber Daya Manusia</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Garda depan pendidikan yang memerlukan dukungan dan pelatihan berkelanjutan.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle>Stigma Sosial</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tembok tak terlihat yang mengucilkan dan mendiskriminasi.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="mx-auto h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Regulasi & Kebijakan</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Jarak antara niat baik dalam kebijakan dan implementasi di lapangan.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Interactive Data Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Angka di Balik Cerita</h2>
          <Tabs defaultValue="participation" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="participation">Partisipasi</TabsTrigger>
              <TabsTrigger value="facilities">Sarana & Prasarana</TabsTrigger>
              <TabsTrigger value="teachers">Data Guru</TabsTrigger>
            </TabsList>
            <TabsContent value="participation" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Angka Partisipasi Kasar (APK)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={barChartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={barChartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="level"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                      />
                      <YAxis />
                      <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Bar dataKey="Tingkat Partisipasi" radius={8} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facilities" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ketersediaan Fasilitas Ramah Disabilitas</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center pb-0">
                  <ChartContainer
                    config={pieChartConfig}
                    className="mx-auto aspect-square h-[250px]"
                  >
                    <PieChart>
                      <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={pieChartData}
                        dataKey="value"
                        nameKey="facility"
                        innerRadius={60}
                        strokeWidth={5}
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <ChartLegend
                        content={<ChartLegendContent nameKey="facility" />}
                        className="-translate-y-[2rem] flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="teachers" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Guru dengan Pelatihan Inklusi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 py-8">Data mengenai jumlah guru yang telah menerima pelatihan khusus. (Placeholder for another chart)</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Suara Mereka yang Terdampak</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200" />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tantangan Ini Nyata. Begitu Pula Peluangnya.</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Melihat tantangan adalah langkah pertama. Langkah berikutnya adalah menjadi bagian dari solusi. Mari bergerak bersama.</p>
          <div className="flex justify-center gap-4">
            <NavLink to="/solutions">
              <Button variant="secondary" size="lg">Lihat Solusi Kami</Button>
            </NavLink>
            <NavLink to="/get-involved">
              <Button variant="default" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Ikut Terlibat
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
