
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Lock } from 'lucide-react';

interface DeeperImprovementsResultsProps {
  analysisType: string;
}

const DeeperImprovementsResults: React.FC<DeeperImprovementsResultsProps> = ({ analysisType }) => {
  // Deeper improvements are blurred for free users
  const isProUser = false; // This would typically come from user state
  
  const improvements = [
    {
      id: 1,
      title: "Restructure product image gallery",
      description: "Reorder your product gallery to show lifestyle images first, followed by product details. Research indicates that starting with context (how the product is used) before showing details increases conversion rates by up to 12%.",
      effort: "Medium",
      impact: "High"
    },
    {
      id: 2,
      title: "Implement accordion-style product details",
      description: "Replace your long-form product description with collapsible accordions for specifications, materials, care instructions, and shipping details. This makes information more accessible without overwhelming customers.",
      effort: "Medium",
      impact: "Medium"
    },
    {
      id: 3,
      title: "Add cross-sell section",
      description: "Create a 'Complete the Look' section with 3-4 complementary products. When implemented effectively, cross-selling can increase average order value by 10-30%.",
      effort: "Medium",
      impact: "High"
    },
    {
      id: 4,
      title: "Implement progressive disclosure for reviews",
      description: "Rather than showing all reviews at once, implement a system that shows the most helpful positive and critical reviews first, with options to load more. This approach makes review content more digestible.",
      effort: "High",
      impact: "Medium"
    },
    {
      id: 5,
      title: "Add comprehensive size guide",
      description: "Create a detailed size guide with measurements, fit information, and a comparison to other common brands. This reduces return rates and increases customer confidence when purchasing.",
      effort: "Medium",
      impact: "High"
    }
  ];

  return (
    <Card className="bg-[#1E293B] border-0 shadow-md overflow-hidden">
      <CardHeader className="bg-[#2D3748] pb-4">
        <CardTitle className="text-2xl text-[#E2E8F0]">Deeper Improvements</CardTitle>
      </CardHeader>
      <CardContent className="p-6 relative">
        <div className={`space-y-6 ${!isProUser ? 'blur-[6px] select-none' : ''}`}>
          <p className="text-lg text-[#E2E8F0]">
            These strategic changes require more effort but can significantly impact conversion rates:
          </p>
          
          {improvements.map((item) => (
            <div key={item.id} className="p-4 bg-[#2D3748] rounded-lg border border-[#4A5568]">
              <div className="space-y-3">
                <h4 className="text-xl font-medium text-[#E2E8F0]">{item.title}</h4>
                <p className="text-lg text-[#E2E8F0]">
                  {item.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.effort === 'High' 
                      ? 'bg-amber-500/20 text-amber-400' 
                      : item.effort === 'Medium'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-green-500/20 text-green-400'
                  }`}>
                    ⏱️ {item.effort} Effort
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.impact === 'High' 
                      ? 'bg-green-500/20 text-green-400' 
                      : item.impact === 'Medium'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    💪 {item.impact} Impact
                  </span>
                </div>
              </div>
            </div>
          ))}
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

export default DeeperImprovementsResults;
