interface PageSpeedData {
  mobile: {
    score: number;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
    };
    renderBlocking: string[];
  };
  desktop: {
    score: number;
    coreWebVitals: {
      lcp: number;
      fid: number;
      cls: number;
    };
    renderBlocking: string[];
  };
}

export async function getPageSpeedData(url: string, apiKey: string): Promise<PageSpeedData> {
  const baseUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  
  const fetchData = async (strategy: 'mobile' | 'desktop') => {
    const response = await fetch(
      `${baseUrl}?url=${encodeURIComponent(url)}&strategy=${strategy}&key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`PageSpeed API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      score: data.lighthouseResult.categories.performance.score * 100,
      coreWebVitals: {
        lcp: data.lighthouseResult.audits['largest-contentful-paint'].numericValue,
        fid: data.lighthouseResult.audits['first-input-delay'].numericValue,
        cls: data.lighthouseResult.audits['cumulative-layout-shift'].numericValue,
      },
      renderBlocking: data.lighthouseResult.audits['render-blocking-resources'].details.items.map(
        (item: { url: string }) => item.url
      ),
    };
  };

  const [mobileData, desktopData] = await Promise.all([
    fetchData('mobile'),
    fetchData('desktop'),
  ]);

  return {
    mobile: mobileData,
    desktop: desktopData,
  };
} 