
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

interface ResultsDisplayProps {
  analysisResult: string;
  onReset: () => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ analysisResult, onReset }) => {
  // Define sections to display in the results
  const sections = [
    { id: 'first-impressions', title: 'First Impressions', blurred: false },
    { id: 'cta-strategy', title: 'CTA Strategy', blurred: false },
    { id: 'imagery-visual', title: 'Imagery & Visual Hierarchy', blurred: false },
    { id: 'copywriting', title: 'Copywriting & Value Proposition', blurred: false },
    { id: 'mobile-experience', title: 'Mobile Experience', blurred: false },
    { id: 'quick-wins', title: 'Quick Wins', blurred: true },
    { id: 'deeper-improvements', title: 'Deeper Improvements', blurred: true },
    { id: 'cro-impact', title: 'Estimated CRO Impact', blurred: true },
    { id: 'resources', title: 'Resources', blurred: true },
  ];

  // Sample content for demonstration purposes
  const getSectionContent = (sectionId: string) => {
    const contents: Record<string, string> = {
      'first-impressions': 'Your product page makes a strong initial impression with a clean layout. The hero image effectively showcases the product, but the value proposition could be more immediately clear.',
      'cta-strategy': 'The "Add to Cart" button has good visibility but could benefit from higher contrast against the background. Consider testing an alternative color that stands out more prominently.',
      'imagery-visual': 'Your product images are professional, but consider adding more lifestyle shots showing the product in use. The visual hierarchy could be improved by making the primary product image larger.',
      'copywriting': 'The product description effectively communicates features but doesn\'t sufficiently address customer pain points. Strengthen the value proposition by clearly stating how the product solves specific problems.',
      'mobile-experience': 'Your mobile layout is functional but the text is too small on smaller screens. Increase font sizes for product titles and descriptions to improve readability on mobile devices.',
      'quick-wins': 'Add urgency elements like limited-time offers or low stock indicators. Improve button contrast by changing from blue to a more vibrant color like orange or green. Add social proof elements near the add-to-cart button.',
      'deeper-improvements': 'Restructure the product page to follow the proven F-pattern layout. Implement a sticky add-to-cart button that follows the user as they scroll. Create a dedicated section for customer testimonials with photos.',
      'cro-impact': 'Based on our analysis, implementing these suggestions could potentially increase your conversion rate by 15-25%. Quick wins alone could yield a 5-10% improvement within the first week of implementation.',
      'resources': 'Check out these resources for more insights: "The Psychology of High-Converting Shopify PDPs", "Mastering Mobile E-Commerce UX", "CRO Best Practices for 2023"'
    };
    
    return contents[sectionId] || 'No content available for this section.';
  };

  // Resources links (only shown in the resources section)
  const resourceLinks = [
    { title: "The Psychology of High-Converting Shopify PDPs", url: "https://example.com/psychology-pdps" },
    { title: "Mastering Mobile E-Commerce UX", url: "https://example.com/mobile-ecommerce-ux" },
    { title: "CRO Best Practices for 2023", url: "https://example.com/cro-best-practices" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:px-8">
      <div className="mb-8">
        <Button
          variant="outline"
          onClick={onReset}
          className="text-lg py-6 px-6 border-[#4A5568] text-[#E2E8F0] hover:bg-[#1E293B]"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Analyze Another Page
        </Button>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-8">Your Product Page Analysis</h1>

      <div className="space-y-8">
        {sections.map((section) => (
          <Card key={section.id} className="bg-[#1E293B] border-0 shadow-md overflow-hidden">
            <CardHeader className="bg-[#2D3748] pb-4">
              <CardTitle className="text-2xl text-[#E2E8F0]">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className={`p-6 ${section.blurred ? 'relative' : ''}`}>
              {section.id === 'resources' ? (
                <div className={section.blurred ? 'blur-[6px] select-none' : ''}>
                  <ul className="space-y-3 text-lg">
                    {resourceLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url} 
                          className="text-primary hover:underline flex items-center"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className={`text-lg text-[#E2E8F0] ${section.blurred ? 'blur-[6px] select-none' : ''}`}>
                  {getSectionContent(section.id)}
                </p>
              )}
              
              {section.blurred && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#1E293B]/50">
                  <p className="text-lg font-medium text-[#E2E8F0] mb-4 text-center">
                    Upgrade to AutoCRO Pro to unlock this section
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-lg py-5 px-8">
                    Upgrade Now
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsDisplay;
