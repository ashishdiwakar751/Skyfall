import { useEffect } from 'react';

/**
 * Custom hook for updating document title and meta description for dynamic route SEO.
 */
export const useSeo = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }

      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && title) {
        ogTitle.setAttribute('content', title);
      }
    }
  }, [title, description]);
};

export default useSeo;
