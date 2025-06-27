// Header Navigation Updates for AI
// This file contains the navigation updates needed for the AI feature

export const headerUpdates = {
  en: {
    "header": {
      "navigation": {
        "ai": "Edusia AI"
      }
    }
  },
  id: {
    "header": {
      "navigation": {
        "ai": "Edusia AI"
      }
    }
  }
};

// Function to update header navigation
export const updateHeaderNavigation = (existingTranslations, language) => {
  const updates = headerUpdates[language];
  if (!updates) {
    console.warn(`Header updates not found for language: ${language}`);
    return existingTranslations;
  }

  return {
    ...existingTranslations,
    header: {
      ...existingTranslations.header,
      navigation: {
        ...existingTranslations.header.navigation,
        ...updates.header.navigation
      }
    }
  };
}; 