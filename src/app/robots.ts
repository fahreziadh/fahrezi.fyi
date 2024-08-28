export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
        },
      ],
      sitemap: 'https://fahrezi.fyi/sitemap.xml',
      host: 'https://fahrezi.fyi',
    };
  }