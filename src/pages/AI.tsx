import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  Copy, 
  Check, 
  AlertTriangle,
  Lightbulb,
  Users,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ReactMarkdown from 'react-markdown';

interface AIResponse {
  content: string;
  isLoading: boolean;
  error: string | null;
}

const AI = () => {
  const { t, i18n } = useTranslation();
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [responses, setResponses] = useState<Record<string, AIResponse>>({});
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  // Form states for different tools
  const [activityForm, setActivityForm] = useState({
    subject: '',
    topic: '',
    grade: '',
    specialNeed: '',
    activityStyle: ''
  });

  const [communicationForm, setCommunicationForm] = useState({
    role: '',
    target: '',
    purpose: '',
    keyPoints: ''
  });

  const [simplifierForm, setSimplifierForm] = useState({
    originalText: '',
    targetAudience: ''
  });

  const tools = [
    {
      id: 'activity-planner',
      title: t('ai.tools.activityPlanner.title'),
      description: t('ai.tools.activityPlanner.description'),
      icon: Lightbulb,
      color: 'bg-blue-500'
    },
    {
      id: 'communication-assistant',
      title: t('ai.tools.communicationAssistant.title'),
      description: t('ai.tools.communicationAssistant.description'),
      icon: MessageSquare,
      color: 'bg-green-500'
    },
    {
      id: 'content-simplifier',
      title: t('ai.tools.contentSimplifier.title'),
      description: t('ai.tools.contentSimplifier.description'),
      icon: FileText,
      color: 'bg-purple-500'
    }
  ];

  // Dropdown options for localization
  const gradeOptions = i18n.language === 'en'
    ? [
        'Grade 1',
        'Grade 2',
        'Grade 3',
        'Grade 4',
        'Grade 5',
        'Grade 6',
      ]
    : [
        'Kelas 1',
        'Kelas 2',
        'Kelas 3',
        'Kelas 4',
        'Kelas 5',
        'Kelas 6',
      ];
  const specialNeedOptions = i18n.language === 'en'
    ? [
        'Attention Difficulty/ADHD',
        'Dyslexia',
        'Autism Spectrum',
        'Slow Learner',
        'Mild Visual Impairment',
      ]
    : [
        'Kesulitan Fokus/ADHD',
        'Disleksia',
        'Spektrum Autisme',
        'Lambat Belajar',
        'Gangguan Penglihatan Ringan',
      ];
  const activityStyleOptions = i18n.language === 'en'
    ? [
        'Group Activity',
        'Individual Task',
        'Educational Game',
        'Homework',
      ]
    : [
        'Aktivitas Kelompok',
        'Tugas Individu',
        'Permainan Edukatif',
        'Tugas di Rumah',
      ];

  // Dropdown options for Communication Assistant
  const roleOptions = i18n.language === 'en'
    ? ['Parent', 'Teacher']
    : ['Orang Tua', 'Guru'];
  const targetOptions = i18n.language === 'en'
    ? ['Teacher', 'Parent']
    : ['Guru', 'Orang Tua'];
  const purposeOptions = i18n.language === 'en'
    ? [
        'Request a meeting schedule',
        'Express concern about child behavior',
        'Give positive update',
        'Ask how to support child at home/school',
      ]
    : [
        'Meminta jadwal pertemuan',
        'Menyampaikan kekhawatiran tentang perilaku anak',
        'Memberikan update positif',
        'Menanyakan cara mendukung anak di rumah/sekolah',
      ];

  // Dropdown options for Content Simplifier
  const audienceOptions = i18n.language === 'en'
    ? [
        'Children aged 6-8',
        'Children with Reading Difficulties',
        'Summary of Key Points',
      ]
    : [
        'Anak Usia 6-8 tahun',
        'Anak dengan Kesulitan Membaca',
        'Ringkasan Poin-Poin',
      ];

  const handleCopyToClipboard = async (text: string, toolId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [toolId]: true }));
      toast({
        title: t('ai.copySuccess'),
        description: t('ai.copySuccessDesc'),
      });
      setTimeout(() => setCopiedStates(prev => ({ ...prev, [toolId]: false })), 2000);
    } catch (err) {
      toast({
        title: t('ai.copyError'),
        description: t('ai.copyErrorDesc'),
        variant: 'destructive',
      });
    }
  };

  const generateAIResponse = async (toolId: string, prompt: string) => {
    setResponses(prev => ({
      ...prev,
      [toolId]: { content: '', isLoading: true, error: null }
    }));

    try {
      // Use deployed Cloudflare Worker URL
      const apiUrl = 'https://edusiahub-ai.daivanfebrijuansetiya.workers.dev';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toolId,
          prompt,
          language: t('common.language')
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setResponses(prev => ({
        ...prev,
        [toolId]: { content: data.content, isLoading: false, error: null }
      }));
    } catch (error) {
      console.error('AI generation error:', error);
      
      // For development, provide a mock response when API is not available
      if (error.message.includes('Failed to fetch') || error.message.includes('HTTP error')) {
        const mockResponses = {
          'activity-planner': `# Rencana Aktivitas Pembelajaran\n\n## Judul Aktivitas\nAktivitas Pembelajaran Interaktif untuk ${activityForm.subject}\n\n## Tujuan Pembelajaran\n- Memahami konsep ${activityForm.topic}\n- Mengembangkan keterampilan kolaborasi\n- Meningkatkan kepercayaan diri siswa\n\n## Alat dan Bahan\n- Kartu pembelajaran\n- Papan tulis atau flipchart\n- Timer\n- Reward system\n\n## Langkah-langkah Aktivitas\n1. **Persiapan (5 menit)**\n   - Siapkan materi pembelajaran\n   - Atur ruang kelas sesuai kebutuhan\n\n2. **Kegiatan Inti (20 menit)**\n   - Jelaskan konsep dengan contoh konkret\n   - Lakukan aktivitas kelompok\n   - Berikan dukungan individual\n\n3. **Penutup (5 menit)**\n   - Refleksi pembelajaran\n   - Pemberian reward\n\n## Tips Adaptasi untuk ${activityForm.specialNeed}\n- Berikan instruksi yang jelas dan bertahap\n- Gunakan visual aids untuk mendukung pemahaman\n- Berikan waktu ekstra untuk menyelesaikan tugas\n- Dukung dengan positive reinforcement\n\n*Catatan: Sesuaikan aktivitas ini dengan kebutuhan spesifik siswa dan kondisi kelas Anda.*`,

          'communication-assistant': `Yth. Bapak/Ibu Guru,\n\nSemoga sehat selalu. Saya orang tua dari ${communicationForm.role === 'Orang Tua' ? 'anak saya' : 'siswa'} yang ingin berkomunikasi dengan ${communicationForm.target}.\n\n${communicationForm.keyPoints}\n\nSaya sangat menghargai kerja sama dan dukungan yang telah diberikan. Apakah ada waktu luang untuk kita berdiskusi lebih lanjut?\n\nTerima kasih atas perhatiannya.\n\nSalam hormat,\n[Orang Tua/Guru]`,

          'content-simplifier': `Konten yang telah disederhanakan:\n\n${simplifierForm.originalText.substring(0, 200)}...\n\n**Penjelasan Sederhana:**\nMateri di atas telah disesuaikan untuk ${simplifierForm.targetAudience}. Penggunaan bahasa yang lebih sederhana dan contoh konkret membantu pemahaman yang lebih baik.\n\n**Poin-poin Penting:**\n- Gunakan bahasa yang mudah dipahami\n- Berikan contoh yang relevan\n- Sertakan visual aids jika memungkinkan\n- Berikan kesempatan untuk bertanya\n\n*Konten ini dapat disesuaikan lebih lanjut sesuai kebutuhan spesifik.*`
        };

        setResponses(prev => ({
          ...prev,
          [toolId]: { 
            content: mockResponses[toolId] || 'Mock response generated for testing purposes.', 
            isLoading: false, 
            error: null 
          }
        }));
      } else {
        setResponses(prev => ({
          ...prev,
          [toolId]: { 
            content: '', 
            isLoading: false, 
            error: t('ai.errorMessage') 
          }
        }));
      }
    }
  };

  const handleActivitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `Mata Pelajaran: ${activityForm.subject}
Topik: ${activityForm.topic}
Tingkat Kelas: ${activityForm.grade}
Kebutuhan Khusus: ${activityForm.specialNeed}
Gaya Aktivitas: ${activityForm.activityStyle}`;
    
    generateAIResponse('activity-planner', prompt);
  };

  const handleCommunicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `Peran: ${communicationForm.role}
Target: ${communicationForm.target}
Tujuan: ${communicationForm.purpose}
Poin Kunci: ${communicationForm.keyPoints}`;
    
    generateAIResponse('communication-assistant', prompt);
  };

  const handleSimplifierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `Teks Asli: ${simplifierForm.originalText}
Target Audience: ${simplifierForm.targetAudience}`;
    
    generateAIResponse('content-simplifier', prompt);
  };

  function stripCodeBlock(content: string) {
    // Remove triple backticks and optional language specifier
    return content.replace(/^```[a-zA-Z]*\n([\s\S]*?)```$/gm, '$1').trim();
  }

  const renderActivityPlanner = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-blue-500" />
          {t('ai.tools.activityPlanner.title')}
        </CardTitle>
        <CardDescription>{t('ai.tools.activityPlanner.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleActivitySubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="subject">{t('ai.activityForm.subject')}</Label>
              <Input
                id="subject"
                value={activityForm.subject}
                onChange={(e) => setActivityForm(prev => ({ ...prev, subject: e.target.value }))}
                placeholder={t('ai.activityForm.subjectPlaceholder')}
                required
              />
            </div>
            <div>
              <Label htmlFor="topic">{t('ai.activityForm.topic')}</Label>
              <Input
                id="topic"
                value={activityForm.topic}
                onChange={(e) => setActivityForm(prev => ({ ...prev, topic: e.target.value }))}
                placeholder={t('ai.activityForm.topicPlaceholder')}
                required
              />
            </div>
            <div>
              <Label htmlFor="grade">{t('ai.activityForm.grade')}</Label>
              <Select value={activityForm.grade} onValueChange={(value) => setActivityForm(prev => ({ ...prev, grade: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder={t('ai.activityForm.gradePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {gradeOptions.map(grade => (
                    <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="specialNeed">{t('ai.activityForm.specialNeed')}</Label>
              <Select value={activityForm.specialNeed} onValueChange={(value) => setActivityForm(prev => ({ ...prev, specialNeed: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder={t('ai.activityForm.specialNeedPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {specialNeedOptions.map(need => (
                    <SelectItem key={need} value={need}>{need}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="activityStyle">{t('ai.activityForm.activityStyle')}</Label>
              <Select value={activityForm.activityStyle} onValueChange={(value) => setActivityForm(prev => ({ ...prev, activityStyle: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder={t('ai.activityForm.activityStylePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {activityStyleOptions.map(style => (
                    <SelectItem key={style} value={style}>{style}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={responses['activity-planner']?.isLoading}>
            {responses['activity-planner']?.isLoading ? t('ai.generating') : t('ai.generateActivity')}
          </Button>
        </form>

        {responses['activity-planner'] && (
          <div className="mt-6">
            <Separator className="my-4" />
            {responses['activity-planner'].isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-2">{t('ai.generating')}</span>
              </div>
            )}
            {responses['activity-planner'].error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{responses['activity-planner'].error}</AlertDescription>
              </Alert>
            )}
            {responses['activity-planner'].content && (
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-blue-100 animate-fade-in mt-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{t('ai.result')}</Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyToClipboard(responses['activity-planner'].content, 'activity-planner')}
                  >
                    {copiedStates['activity-planner'] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none text-justify leading-relaxed">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-blue-700 font-bold" {...props} />, 
                      h2: ({node, ...props}) => <h2 className="text-purple-700 font-semibold" {...props} />, 
                      strong: ({node, ...props}) => <strong className="text-pink-700" {...props} />, 
                      li: ({node, ...props}) => <li className="text-green-700" {...props} />,
                    }}
                  >
                    {stripCodeBlock(responses['activity-planner'].content)}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderCommunicationAssistant = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-green-500" />
          {t('ai.tools.communicationAssistant.title')}
        </CardTitle>
        <CardDescription>{t('ai.tools.communicationAssistant.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCommunicationSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="role">{t('ai.communicationForm.role')}</Label>
              <Select value={communicationForm.role} onValueChange={(value) => setCommunicationForm(prev => ({ ...prev, role: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder={t('ai.communicationForm.rolePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {roleOptions.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="target">{t('ai.communicationForm.target')}</Label>
              <Select value={communicationForm.target} onValueChange={(value) => setCommunicationForm(prev => ({ ...prev, target: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder={t('ai.communicationForm.targetPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {targetOptions.map(target => (
                    <SelectItem key={target} value={target}>{target}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="purpose">{t('ai.communicationForm.purpose')}</Label>
              <Select value={communicationForm.purpose} onValueChange={(value) => setCommunicationForm(prev => ({ ...prev, purpose: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder={t('ai.communicationForm.purposePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  {purposeOptions.map(purpose => (
                    <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="keyPoints">{t('ai.communicationForm.keyPoints')}</Label>
              <Textarea
                id="keyPoints"
                value={communicationForm.keyPoints}
                onChange={(e) => setCommunicationForm(prev => ({ ...prev, keyPoints: e.target.value }))}
                placeholder={t('ai.communicationForm.keyPointsPlaceholder')}
                rows={4}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={responses['communication-assistant']?.isLoading}>
            {responses['communication-assistant']?.isLoading ? t('ai.generating') : t('ai.generateMessage')}
          </Button>
        </form>

        {responses['communication-assistant'] && (
          <div className="mt-6">
            <Separator className="my-4" />
            {responses['communication-assistant'].isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                <span className="ml-2">{t('ai.generating')}</span>
              </div>
            )}
            {responses['communication-assistant'].error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{responses['communication-assistant'].error}</AlertDescription>
              </Alert>
            )}
            {responses['communication-assistant'].content && (
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-blue-100 animate-fade-in mt-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{t('ai.result')}</Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyToClipboard(responses['communication-assistant'].content, 'communication-assistant')}
                  >
                    {copiedStates['communication-assistant'] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none text-justify leading-relaxed">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-blue-700 font-bold" {...props} />, 
                      h2: ({node, ...props}) => <h2 className="text-purple-700 font-semibold" {...props} />, 
                      strong: ({node, ...props}) => <strong className="text-pink-700" {...props} />, 
                      li: ({node, ...props}) => <li className="text-green-700" {...props} />,
                    }}
                  >
                    {stripCodeBlock(responses['communication-assistant'].content)}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderContentSimplifier = () => (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-500" />
          {t('ai.tools.contentSimplifier.title')}
        </CardTitle>
        <CardDescription>{t('ai.tools.contentSimplifier.description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSimplifierSubmit} className="space-y-4">
          <div>
            <Label htmlFor="originalText">{t('ai.simplifierForm.originalText')}</Label>
            <Textarea
              id="originalText"
              value={simplifierForm.originalText}
              onChange={(e) => setSimplifierForm(prev => ({ ...prev, originalText: e.target.value }))}
              placeholder={t('ai.simplifierForm.originalTextPlaceholder')}
              rows={6}
              required
            />
          </div>
          <div>
            <Label htmlFor="targetAudience">{t('ai.simplifierForm.targetAudience')}</Label>
            <Select value={simplifierForm.targetAudience} onValueChange={(value) => setSimplifierForm(prev => ({ ...prev, targetAudience: value }))}>
              <SelectTrigger>
                <SelectValue placeholder={t('ai.simplifierForm.targetAudiencePlaceholder')} />
              </SelectTrigger>
              <SelectContent>
                {audienceOptions.map(audience => (
                  <SelectItem key={audience} value={audience}>{audience}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled={responses['content-simplifier']?.isLoading}>
            {responses['content-simplifier']?.isLoading ? t('ai.generating') : t('ai.simplifyNow')}
          </Button>
        </form>

        {responses['content-simplifier'] && (
          <div className="mt-6">
            <Separator className="my-4" />
            {responses['content-simplifier'].isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="ml-2">{t('ai.generating')}</span>
              </div>
            )}
            {responses['content-simplifier'].error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{responses['content-simplifier'].error}</AlertDescription>
              </Alert>
            )}
            {responses['content-simplifier'].content && (
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6 shadow-lg border border-blue-100 animate-fade-in mt-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{t('ai.result')}</Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopyToClipboard(responses['content-simplifier'].content, 'content-simplifier')}
                  >
                    {copiedStates['content-simplifier'] ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none text-justify leading-relaxed">
                  <ReactMarkdown
                    components={{
                      h1: ({node, ...props}) => <h1 className="text-blue-700 font-bold" {...props} />, 
                      h2: ({node, ...props}) => <h2 className="text-purple-700 font-semibold" {...props} />, 
                      strong: ({node, ...props}) => <strong className="text-pink-700" {...props} />, 
                      li: ({node, ...props}) => <li className="text-green-700" {...props} />,
                    }}
                  >
                    {stripCodeBlock(responses['content-simplifier'].content)}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  // Tambahkan animasi fade-in (CSS-in-JS)
  const fadeInStyle = `@keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }`;

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Spacer for header/navbar */}
      <div className="mt-8" />

      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">{t('ai.title')}</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          {t('ai.subtitle')}
        </p>
        
        {/* Disclaimer */}
        <Alert className="max-w-4xl mx-auto mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            {t('ai.disclaimer')}
          </AlertDescription>
        </Alert>
      </div>

      {/* Tool Selection */}
      {!activeTool && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => (
            <Card 
              key={tool.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() => setActiveTool(tool.id)}
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-lg ${tool.color} flex items-center justify-center mb-4`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-center">{tool.title}</CardTitle>
                <CardDescription className="text-justify mt-2">{tool.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {/* Back Button */}
      {activeTool && (
        <div className="flex justify-center mb-6">
          <Button 
            variant="outline" 
            onClick={() => setActiveTool(null)}
            className="flex items-center gap-2"
          >
            ← {t('ai.backToTools')}
          </Button>
        </div>
      )}

      {/* Tool Content */}
      {activeTool === 'activity-planner' && renderActivityPlanner()}
      {activeTool === 'communication-assistant' && renderCommunicationAssistant()}
      {activeTool === 'content-simplifier' && renderContentSimplifier()}

      {/* Features Overview */}
      {!activeTool && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">{t('ai.features.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('ai.features.timeSaving.title')}</h3>
              <p className="text-sm text-gray-600">{t('ai.features.timeSaving.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('ai.features.freshIdeas.title')}</h3>
              <p className="text-sm text-gray-600">{t('ai.features.freshIdeas.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('ai.features.accessibility.title')}</h3>
              <p className="text-sm text-gray-600">{t('ai.features.accessibility.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('ai.features.support.title')}</h3>
              <p className="text-sm text-gray-600">{t('ai.features.support.description')}</p>
            </div>
          </div>
        </div>
      )}

      <style>{fadeInStyle}</style>
    </div>
  );
};

export default AI; 