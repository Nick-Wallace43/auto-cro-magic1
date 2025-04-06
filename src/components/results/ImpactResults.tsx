
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Lock } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface ImpactResultsProps {
  analysisType: string;
}

const ImpactResults: React.FC<ImpactResultsProps> = ({ analysisType }) => {
  // Impact results are blurred for free users
  const isProUser = false; // This would typically come from user state

  return (
    <Card className="bg-[#1E293B] border-0 shadow-md overflow-hidden">
      <CardHeader className="bg-[#2D3748] pb-4">
        <CardTitle className="text-2xl text-[#E2E8F0]">Estimated CRO Impact</CardTitle>
      </CardHeader>
      <CardContent className="p-6 relative">
        <div className={`space-y-8 ${!isProUser ? 'blur-[6px] select-none' : ''}`}>
          <div className="text-center py-6">
            <h3 className="text-3xl font-bold text-[#E2E8F0] mb-2">Potential Conversion Improvement</h3>
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-primary to-secondary text-white text-3xl font-bold py-3 px-8 rounded-lg">
                +15-25%
              </div>
            </div>
            <p className="text-lg text-[#E2E8F0] max-w-2xl mx-auto">
              Based on our analysis, implementing the recommended changes could increase your conversion rate by 15-25% compared to your current page performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[#E2E8F0]">Quick Win Impact</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Trust badges & social proof</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+4-7%</span>
                  </div>
                  <Progress value={60} className="h-2 bg-[#2D3748]" indicatorClassName="bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">CTA button improvements</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+2-5%</span>
                  </div>
                  <Progress value={40} className="h-2 bg-[#2D3748]" indicatorClassName="bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Urgency elements</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+3-6%</span>
                  </div>
                  <Progress value={50} className="h-2 bg-[#2D3748]" indicatorClassName="bg-primary" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Mobile optimizations</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+3-8%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-[#2D3748]" indicatorClassName="bg-primary" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[#E2E8F0]">Deeper Improvement Impact</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Image gallery restructuring</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+5-10%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-[#2D3748]" indicatorClassName="bg-secondary" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Content restructuring</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+3-7%</span>
                  </div>
                  <Progress value={55} className="h-2 bg-[#2D3748]" indicatorClassName="bg-secondary" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Cross-sell implementation</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+8-15%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-[#2D3748]" indicatorClassName="bg-secondary" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg text-[#E2E8F0]">Size guide addition</span>
                    <span className="text-lg font-medium text-[#E2E8F0]">+4-8%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-[#2D3748]" indicatorClassName="bg-secondary" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#2D3748] p-6 rounded-lg">
            <h4 className="text-xl font-bold text-[#E2E8F0] mb-4 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-green-400" />
              ROI Projection
            </h4>
            <p className="text-lg text-[#E2E8F0] mb-4">
              Assuming your current conversion rate is around 2% (typical Shopify average) and your average order value is $75:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-lg text-[#E2E8F0]">Current monthly revenue per 1,000 visitors:</span>
                <span className="text-lg font-semibold text-[#E2E8F0]">$1,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg text-[#E2E8F0]">Projected monthly revenue after improvements:</span>
                <span className="text-lg font-semibold text-green-400">$1,875 - $2,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-lg text-[#E2E8F0]">Potential monthly revenue increase:</span>
                <span className="text-lg font-semibold text-green-400">$375 - $500</span>
              </div>
            </div>
            <p className="text-lg text-[#E2E8F0]">
              Implementation of all recommendations could yield an additional <span className="font-semibold text-green-400">$4,500 - $6,000 per year</span> for every 1,000 monthly visitors.
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

export default ImpactResults;
