# EdusiaHub - Inclusive Education Platform

A comprehensive platform dedicated to advancing inclusive education in Indonesia through research, advocacy, and practical solutions.

## Features

### 🌍 Multi-Language Support
The website supports both Indonesian (ID) and English (EN) languages. Users can switch between languages using the language switcher in the header.

**Supported Languages:**
- 🇮🇩 Indonesian (ID) - Default
- 🇺🇸 English (EN)

**Language Switching:**
- Click the language switcher button in the header (desktop) or mobile menu
- Language preference is saved in localStorage
- Automatic language detection based on browser settings

### 🎯 Key Sections
- **Hero Section**: Introduction to inclusive education
- **Challenge Section**: Understanding the reality of inclusive education in Indonesia
- **Solution Section**: Strategic approaches to building inclusive education systems
- **Call to Action**: Join the movement for inclusive education
- **Footer**: Resources and links

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Internationalization**: react-i18next + i18next
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd edusiahub-inclusive-future-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation with language switcher
│   ├── HeroSection.tsx # Main hero section
│   ├── ChallengeSection.tsx # Challenges overview
│   ├── SolutionSection.tsx # Solutions overview
│   ├── CallToActionSection.tsx # Call to action
│   ├── Footer.tsx      # Footer with links
│   └── LanguageSwitcher.tsx # Language toggle component
├── i18n/               # Internationalization
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── id.json     # Indonesian translations
├── lib/                # Utility functions
├── hooks/              # Custom React hooks
└── pages/              # Page components
```

## Adding New Translations

To add new text content:

1. Add the translation key to both `src/i18n/locales/en.json` and `src/i18n/locales/id.json`
2. Use the translation in your component with `const { t } = useTranslation()` and `t('your.translation.key')`

Example:
```json
// en.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}

// id.json
{
  "newSection": {
    "title": "Judul Bagian Baru",
    "description": "Deskripsi bagian baru"
  }
}
```

```tsx
// In your component
import { useTranslation } from 'react-i18next';

const NewSection = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
};
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add translations for any new text content
5. Test the language switching functionality
6. Submit a pull request

## License

This project is licensed under the MIT License.
