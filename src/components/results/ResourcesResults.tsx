
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Lock } from 'lucide-react';

interface ResourcesResultsProps {
  analysisType: string;
}

const ResourcesResults: React.FC<ResourcesResultsProps> = ({ analysisType }) => {
  // Resources are blurred for free users
  const isProUser = false; // This would typically come from user state
  
  // Define resource links based on analysis type
  const getResources = () => {
    if (analysisType === 'product') {
      return [
        { 
          title: "The Psychology of High-Converting Shopify PDPs", 
          url: "https://www.shopify.com/blog/product-page",
          category: "Conversion Rate Optimization"
        },
        { 
          title: "Mastering Mobile E-Commerce UX", 
          url: "https://www.smashingmagazine.com/2022/04/mobile-ecommerce-ux-guide/",
          category: "Mobile UX"
        },
        { 
          title: "CRO Best Practices for 2023", 
          url: "https://www.optimizely.com/optimization-glossary/conversion-rate-optimization/",
          category: "Conversion Rate Optimization"
        },
        { 
          title: "Product Photography: The Ultimate DIY Guide", 
          url: "https://www.shopify.com/blog/product-photography-tips",
          category: "Visual Optimization"
        },
        { 
          title: "How to Write Product Descriptions That Sell", 
          url: "https://www.shopify.com/blog/8211159-9-simple-ways-to-write-product-descriptions-that-sell",
          category: "Copywriting"
        },
        { 
          title: "Shopify Page Speed Optimization Guide", 
          url: "https://www.shopify.com/blog/website-speed-optimization",
          category: "Performance"
        },
        { 
          title: "Trust Signals: How to Build Credibility Online", 
          url: "https://www.crazyegg.com/blog/trust-signals/",
          category: "Trust & Social Proof"
        },
        { 
          title: "The Science of Social Proof in E-Commerce", 
          url: "https://www.bigcommerce.com/blog/social-proof-examples/",
          category: "Trust & Social Proof"
        },
      ];
    } else if (analysisType === 'homepage') {
      return [
        { 
          title: "The Anatomy of a Perfect Shopify Homepage", 
          url: "https://www.shopify.com/blog/homepage-design",
          category: "Homepage Design"
        },
        { 
          title: "Value Proposition: How to Create Compelling Homepage Messaging", 
          url: "https://www.nngroup.com/articles/value-proposition/",
          category: "Messaging & Copywriting"
        },
        // Additional homepage resources
      ];
    } else { // collection
      return [
        { 
          title: "Collection Page Best Practices for Higher Conversions", 
          url: "https://www.shopify.com/blog/collection-page-optimization",
          category: "Collection Design"
        },
        { 
          title: "Product Filtering & Sorting: UX Best Practices", 
          url: "https://baymard.com/blog/ecommerce-filtering-and-sorting",
          category: "User Experience"
        },
        // Additional collection resources
      ];
    }
  };
  
  const resources = getResources();
  
  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    acc[resource.category] = acc[resource.category] || [];
    acc[resource.category].push(resource);
    return acc;
  }, {});

  return (
    <Card className="bg-[#1E293B] border-0 shadow-md overflow-hidden">
      <CardHeader className="bg-[#2D3748] pb-4">
        <CardTitle className="text-2xl text-[#E2E8F0]">Resources</CardTitle>
      </CardHeader>
      <CardContent className="p-6 relative">
        <div className={`space-y-6 ${!isProUser ? 'blur-[6px] select-none' : ''}`}>
          <p className="text-lg text-[#E2E8F0]">
            We've curated these resources specifically for your {analysisType === 'product' ? 'product page' : analysisType === 'homepage' ? 'homepage' : 'collection page'} optimization needs:
          </p>
          
          {Object.entries(groupedResources).map(([category, categoryResources]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-xl font-medium text-[#E2E8F0]">{category}</h3>
              <ul className="space-y-3">
                {categoryResources.map((resource: any, index: number) => (
                  <li key={index} className="flex items-center">
                    <ExternalLink className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-primary hover:text-primary/80 hover:underline"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="bg-[#2D3748] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#E2E8F0] mb-2">Pro Resources</h4>
            <p className="text-lg text-[#E2E8F0]">
              AutoCRO Pro members also receive access to our exclusive library of advanced guides, templates, and case studies.
            </p>
          </div>
        </div>
        
        {!isProUser && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#1E293B]/50">
            <Lock className="h-10 w-10 text-[#E2E8F0] mb-4" />
            <p className="text-lg font-medium text-[#E2E8F0] mb-4 text-center">
              Upgrade to AutoCRO Pro to unlock this section
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white text-lg py-5 px-8">
              Upgrade Now
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourcesResults;
