
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Enhanced markdown parsing for premium look
const parseMarkdown = (markdown: string) => {
  let html = markdown;
  
  // Handle headings
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold my-4 text-white">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold my-5 mt-8 text-white border-b border-[#334155] pb-2">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold my-3 text-white">$1</h3>');
  
  // Handle bold
  html = html.replace(/\*\*(.*?)\*\*/gm, '<strong class="text-white">$1</strong>');
  
  // Handle italic
  html = html.replace(/\*(.*?)\*/gm, '<em>$1</em>');
  
  // Handle lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal my-2 text-[#CBD5E1]">$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc my-2 text-[#CBD5E1]">$1</li>');
  
  // Replace emoji indicators with custom styling
  html = html.replace(/✅ (.*$)/gm, '<div class="status-success my-3 text-[#CBD5E1]">$1</div>');
  html = html.replace(/⚠️ (.*$)/gm, '<div class="status-warning my-3 text-[#CBD5E1]">$1</div>');
  
  // Handle paragraphs
  html = html.replace(/^(?!<[hl\d]|<div|<li)(.*$)/gm, '<p class="my-3 text-[#94A3B8]">$1</p>');
  
  // Cleanup empty paragraphs
  html = html.replace(/<p class="my-3 text-\[#94A3B8\]"><\/p>/gm, '');
  
  // Blur the Quick Wins section and add upgrade CTA
  const quickWinsIndex = html.indexOf('<h2 class="text-xl font-bold my-5 mt-8 text-white border-b border-[#334155] pb-2">Quick Wins</h2>');
  const deeperImprovementsIndex = html.indexOf('<h2 class="text-xl font-bold my-5 mt-8 text-white border-b border-[#334155] pb-2">Deeper Improvements</h2>');
  
  if (quickWinsIndex !== -1 && deeperImprovementsIndex !== -1) {
    const quickWinsSection = html.substring(quickWinsIndex, deeperImprovementsIndex);
    const blurredSection = `
      <div class="relative my-8">
        <div class="absolute inset-0 backdrop-blur-sm bg-[#1E293B]/30 flex flex-col items-center justify-center z-10 rounded-xl">
          <div class="text-center p-8">
            <div class="w-12 h-12 rounded-full bg-[#334155] flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Quick Wins</h3>
            <p class="text-[#94A3B8] mb-6">This section is included in AutoCRO Pro. Upgrade to unlock your high-impact, low-effort CRO checklist.</p>
            <button class="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-2 px-6 rounded-md transition-all hover:shadow-lg inline-flex items-center">
              Upgrade <svg class="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        ${quickWinsSection}
      </div>
    `;
    
    html = html.substring(0, quickWinsIndex) + blurredSection + html.substring(deeperImprovementsIndex);
  }
  
  return html;
};

interface ResultsDisplayProps {
  analysisResult: string;
  onReset: () => void;
}

const ResultsDisplay = ({ analysisResult, onReset }: ResultsDisplayProps) => {
  const resultRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.innerHTML = parseMarkdown(analysisResult);
    }
  }, [analysisResult]);
  
  return (
    <div className="pt-28 pb-16 px-6 md:px-8 min-h-screen bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-[#1E293B] border border-[#334155] shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-[#334155] py-5 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">
              Your AI-Powered CRO Report
            </h2>
          </div>
          
          <CardContent className="p-6 md:p-8">
            <div 
              ref={resultRef} 
              className="prose prose-slate max-w-none"
            />
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12 pt-8 border-t border-[#334155]">
              <Button onClick={onReset} className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white transition-all hover:shadow-lg">
                Run Another Analysis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" className="border-[#334155] text-white hover:bg-[#334155]/30">
                <Lock className="mr-2 h-4 w-4" /> Upgrade to Pro
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsDisplay;
