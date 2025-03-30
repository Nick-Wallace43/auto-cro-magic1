
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Enhanced markdown parsing for premium look
const parseMarkdown = (markdown: string) => {
  let html = markdown;
  
  // Handle headings
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold my-5 text-[#E2E8F0]">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold my-6 mt-8 text-[#E2E8F0] border-b border-[#334155] pb-2">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold my-4 text-[#E2E8F0]">$1</h3>');
  
  // Handle bold
  html = html.replace(/\*\*(.*?)\*\*/gm, '<strong class="text-[#E2E8F0]">$1</strong>');
  
  // Handle italic
  html = html.replace(/\*(.*?)\*/gm, '<em>$1</em>');
  
  // Handle lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal my-2 text-lg text-[#E2E8F0]">$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc my-2 text-lg text-[#E2E8F0]">$1</li>');
  
  // Replace emoji indicators with custom styling
  html = html.replace(/✅ (.*$)/gm, '<div class="status-success my-3 text-lg text-[#E2E8F0]">$1</div>');
  html = html.replace(/⚠️ (.*$)/gm, '<div class="status-warning my-3 text-lg text-[#E2E8F0]">$1</div>');
  
  // Handle paragraphs
  html = html.replace(/^(?!<[hl\d]|<div|<li)(.*$)/gm, '<p class="my-3 text-lg text-[#E2E8F0]">$1</p>');
  
  // Handle links (make them stylish)
  html = html.replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2" class="text-primary hover:text-primary/80 underline transition-colors" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Cleanup empty paragraphs
  html = html.replace(/<p class="my-3 text-lg text-\[#E2E8F0\]"><\/p>/gm, '');
  
  // Blur the Premium sections
  const blurSection = (sectionTitle, html) => {
    const sectionIndex = html.indexOf(`<h2 class="text-xl font-bold my-6 mt-8 text-[#E2E8F0] border-b border-[#334155] pb-2">${sectionTitle}</h2>`);
    if (sectionIndex === -1) return html;
    
    let nextSectionIndex = html.indexOf('<h2 class="text-xl font-bold my-6 mt-8 text-[#E2E8F0] border-b border-[#334155] pb-2">', sectionIndex + 1);
    if (nextSectionIndex === -1) nextSectionIndex = html.length;
    
    const sectionContent = html.substring(sectionIndex, nextSectionIndex);
    const blurredSection = `
      <div class="relative my-8">
        <h2 class="text-xl font-bold my-6 mt-8 text-[#E2E8F0] border-b border-[#334155] pb-2">${sectionTitle}</h2>
        <div class="absolute inset-0 backdrop-blur-sm bg-[#1E293B]/30 flex flex-col items-center justify-center z-10 rounded-xl mt-16">
          <div class="text-center p-8">
            <div class="w-14 h-14 rounded-full bg-[#334155] flex items-center justify-center mx-auto mb-5">
              <Lock className="h-7 w-7 text-white" />
            </div>
            <h3 class="text-xl font-bold text-[#E2E8F0] mb-3">Premium Insights</h3>
            <p class="text-[#CBD5E1] mb-7 text-lg">Upgrade to AutoCRO Pro to unlock this section.</p>
            <button class="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 px-8 rounded-md transition-all hover:shadow-lg inline-flex items-center text-lg">
              Upgrade <svg class="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="blur-sm pointer-events-none">
          ${sectionContent.substring(sectionContent.indexOf('</h2>') + 6)}
        </div>
      </div>
    `;
    
    return html.substring(0, sectionIndex) + blurredSection + html.substring(nextSectionIndex);
  };
  
  // Apply blur to premium sections
  const sectionsToBlur = ['Quick Wins', 'Deeper Improvements', 'Estimated CRO Impact', 'Resources'];
  for (const section of sectionsToBlur) {
    html = blurSection(section, html);
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
    <div className="pt-28 pb-16 px-6 md:px-8 min-h-screen bg-[#111827]">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-[#1E293B] border border-[#334155] shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-[#334155] py-6 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#E2E8F0]">
              Your AI-Powered CRO Report
            </h2>
          </div>
          
          <CardContent className="p-6 md:p-8">
            <div 
              ref={resultRef} 
              className="prose prose-slate max-w-none"
            />
            
            <div className="flex flex-col md:flex-row gap-5 justify-center mt-14 pt-8 border-t border-[#334155]">
              <Button onClick={onReset} className="bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-lg text-lg py-6 h-auto px-8">
                Run Another Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-[#334155] text-[#E2E8F0] hover:bg-[#334155]/30 text-lg py-6 h-auto px-8">
                <Lock className="mr-2 h-5 w-5" /> Upgrade to Pro
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResultsDisplay;
