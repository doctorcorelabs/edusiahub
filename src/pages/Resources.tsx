import React from 'react';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Resources = () => {
  const { t } = useTranslation();
  const videos = t('resources.videos', { returnObjects: true }) as any[];
  const categories = t('resources.categories', { returnObjects: true });

  // Map for category color (ID and EN)
  const getCategoryColor = (category) => {
    const colorMap = {
      'Inspirasi': 'bg-purple-100 text-purple-700 border-purple-200',
      'Inspiration': 'bg-purple-100 text-purple-700 border-purple-200',
      'Praktik': 'bg-blue-100 text-blue-700 border-blue-200',
      'Practice': 'bg-blue-100 text-blue-700 border-blue-200',
      'Teknologi': 'bg-green-100 text-green-700 border-green-200',
      'Technology': 'bg-green-100 text-green-700 border-green-200',
      'Kolaborasi': 'bg-orange-100 text-orange-700 border-orange-200',
      'Collaboration': 'bg-orange-100 text-orange-700 border-orange-200',
      'Evaluasi': 'bg-red-100 text-red-700 border-red-200',
      'Evaluation': 'bg-red-100 text-red-700 border-red-200',
      'Kisah Sukses': 'bg-pink-100 text-pink-700 border-pink-200',
      'Success Story': 'bg-pink-100 text-pink-700 border-pink-200',
    };
    return colorMap[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto py-12 px-4 pt-32">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('resources.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={index === 3 ? `https://img.youtube.com/vi/${video.id}/0.jpg` : index === 4 ? `https://img.youtube.com/vi/${video.id}/0.jpg` : index === 5 ? `https://img.youtube.com/vi/${video.id}/0.jpg` : `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x240/f3f4f6/6b7280?text=Video+Preview';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play className="w-8 h-8 text-blue-600 fill-current" />
                    </div>
                  </div>
                </div>
                {index === 0 ? (
                  <div className="p-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-5 h-5" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : index === 1 ? (
                  <div className="p-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-5 h-5" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : index === 2 ? (
                  <div className="p-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-5 h-5" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : index === 3 ? (
                  <div className="p-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-5 h-5" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : index === 4 ? (
                  <div className="p-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-5 h-5" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : index === 5 ? (
                  <div className="p-6 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-5 h-5" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : (
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.views} {t('resources.labelViews')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                    </div>
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Play className="w-4 h-4" />
                      {t('resources.buttonWatch')}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources; 