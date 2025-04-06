
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LightbulbIcon, Zap, Lock } from 'lucide-react';

interface QuickWinsResultsProps {
  analysisType: string;
}

const QuickWinsResults: React.FC<QuickWinsResultsProps> = ({ analysisType }) => {
  // Quick wins are blurred for free users
  const isProUser = false; // This would typically come from user state
  
  const quickWins = [
    {
      id: 1,
      title: "Add trust badges above the fold",
      description: "Add payment icons, security badges, and guarantee symbols directly below the Add to Cart button to increase trust and conversion rates.",
      effort: "10 minutes",
      impact: "Medium"
    },
    {
      id: 2,
      title: "Increase CTA button contrast",
      description: "Change your primary CTA button from blue (#4A5AEF) to a higher-contrast color like bright green (#10B981) or orange (#F59E0B) to improve visibility and click rates.",
      effort: "5 minutes",
      impact: "High"
    },
    {
      id: 3,
      title: "Move reviews above the fold",
      description: "Add a star rating and review count summary directly below the product title, allowing customers to immediately see social proof.",
      effort: "15 minutes",
      impact: "High"
    },
    {
      id: 4,
      title: "Add urgency elements",
      description: "Add a simple 'Only X left in stock' message for products with limited inventory, or a shipping countdown timer ('Order within 3 hours for next-day delivery').",
      effort: "20 minutes",
      impact: "Medium"
    },
    {
      id: 5,
      title: "Improve mobile Add to Cart visibility",
      description: "Make the Add to Cart button sticky on mobile so it remains visible as users scroll through the product details.",
      effort: "30 minutes",
      impact: "High"
    }
  ];

  return (
    <Card className="bg-[#1E293B] border-0 shadow-md overflow-hidden">
      <CardHeader className="bg-[#2D3748] pb-4">
        <CardTitle className="text-2xl text-[#E2E8F0]">Quick Wins</CardTitle>
      </CardHeader>
      <CardContent className="p-6 relative">
        <div className={`space-y-6 ${!isProUser ? 'blur-[6px] select-none' : ''}`}>
          <p className="text-lg text-[#E2E8F0]">
            These high-impact changes can be implemented in 30 minutes or less:
          </p>
          
          {quickWins.map((win) => (
            <div key={win.id} className="p-4 bg-[#2D3748] rounded-lg border border-[#4A5568]">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-amber-400 mt-1" />
                <div>
                  <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">{win.title}</h4>
                  <p className="text-lg text-[#E2E8F0] mb-3">
                    {win.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm bg-[#1E293B] px-3 py-1 rounded-full text-[#94A3B8]">
                      ⏱️ {win.effort}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      win.impact === 'High' 
                        ? 'bg-green-500/20 text-green-400' 
                        : win.impact === 'Medium'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      💪 {win.impact} Impact
                    </span>
                  </div>
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

export default QuickWinsResults;
