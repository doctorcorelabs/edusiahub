import React from 'react';

const Blog = () => (
  <div className="container mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-4">Blog</h1>
    <p className="text-lg text-gray-700 mb-4">Baca artikel, opini, dan berita terbaru seputar pendidikan inklusif, inovasi, dan kisah inspiratif dari berbagai daerah.</p>
    <ul className="list-disc ml-6 mb-4">
      <li><b>Artikel Terbaru:</b> Update rutin dari tim dan kontributor.</li>
      <li><b>Kisah Inspiratif:</b> Cerita nyata dari lapangan.</li>
      <li><b>Opini & Analisis:</b> Pandangan ahli dan praktisi.</li>
    </ul>
    <p className="text-gray-700">Jangan lewatkan insight dan inspirasi terbaru di dunia pendidikan inklusif.</p>
  </div>
);

export default Blog; 