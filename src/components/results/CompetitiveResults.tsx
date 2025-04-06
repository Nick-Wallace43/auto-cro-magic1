
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart2, TrendingUp, TrendingDown, Minus, Award } from 'lucide-react';

interface CompetitiveResultsProps {
  analysisType: string;
}

const CompetitiveResults: React.FC<CompetitiveResultsProps> = ({ analysisType }) => {
  return (
    <div className="space-y-8">
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Competitive Benchmark Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg text-[#E2E8F0] mb-6">
            Here's how your {analysisType === 'product' ? 'product page' : analysisType === 'homepage' ? 'homepage' : 'collection page'} compares to top-performing Shopify stores in your industry:
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Trust Signals</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your page has <strong>2 trust elements</strong> visible above the fold. Top-performing stores in your category average <strong>5-7 trust elements</strong> (reviews, guarantees, security badges).
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center">
                <Minus className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Product Images</h4>
                <p className="text-lg text-[#E2E8F0]">
                  You have <strong>7 product images</strong>, which is on par with the category average of <strong>6-8 images</strong>. However, top performers include more lifestyle/context shots.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Performance Score</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your mobile performance score is <strong>47</strong>, significantly below the Shopify average of <strong>62</strong> and top performers' average of <strong>78+</strong>.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Product Description Length</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your product description is <strong>127 words</strong>, which is above the category average of <strong>85 words</strong>. Format could be improved, but content length is good.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">SEO Optimization</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your SEO score is <strong>62/100</strong>, below the industry average of <strong>74/100</strong>. Missing meta description, alt texts, and keyword optimization are key factors.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2D3748] flex items-center justify-center">
                <Minus className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">CTA Placement</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your Add to Cart button appears <strong>740px</strong> from the top of the page on mobile, which matches the category average of <strong>700-800px</strong>. Top performers have it at <strong>500-600px</strong>.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Direct Competitor Insights</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg text-[#E2E8F0] mb-6">
            Based on your product category, here's how specific competitors structure their pages:
          </p>
          
          <div className="space-y-6">
            <div className="p-4 bg-[#2D3748] rounded-lg">
              <h4 className="text-xl font-medium text-[#E2E8F0] mb-3 flex items-center">
                <Award className="h-5 w-5 text-amber-400 mr-2" />
                Top Brand in Your Category
              </h4>
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-lg text-[#E2E8F0]">Uses video as first media element (you only use static images)</li>
                <li className="text-lg text-[#E2E8F0]">Shows 10+ reviews directly on product page</li>
                <li className="text-lg text-[#E2E8F0]">Features comparison chart with similar products</li>
                <li className="text-lg text-[#E2E8F0]">Offers size guide with detailed measurements</li>
                <li className="text-lg text-[#E2E8F0]">Includes sustainability badges prominently near the price</li>
              </ul>
            </div>
            
            <div className="p-4 bg-[#2D3748] rounded-lg">
              <h4 className="text-xl font-medium text-[#E2E8F0] mb-3">Key Differentiators You're Missing</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li className="text-lg text-[#E2E8F0]">No product video (73% of top competitors have one)</li>
                <li className="text-lg text-[#E2E8F0]">No customer photo gallery (64% of competitors show customer photos)</li>
                <li className="text-lg text-[#E2E8F0]">Missing size guide (standard in this product category)</li>
                <li className="text-lg text-[#E2E8F0]">No cross-selling recommendations (present in 91% of competitor pages)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitiveResults;
