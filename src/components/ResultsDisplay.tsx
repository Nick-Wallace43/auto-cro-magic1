
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Simple markdown parsing for our specific needs
const parseMarkdown = (markdown: string) => {
  let html = markdown;
  
  // Handle headings
  html = html.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold my-4">$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold my-3 mt-6">$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold my-2">$1</h3>');
  
  // Handle bold
  html = html.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');
  
  // Handle italic
  html = html.replace(/\*(.*?)\*/gm, '<em>$1</em>');
  
  // Handle lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal my-1">$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc my-1">$1</li>');
  
  // Handle emoji indicators
  html = html.replace(/✅ (.*$)/gm, '<div class="flex items-start my-1"><span class="text-success mr-2 flex-shrink-0">✅</span> <span>$1</span></div>');
  html = html.replace(/⚠️ (.*$)/gm, '<div class="flex items-start my-1"><span class="text-warning mr-2 flex-shrink-0">⚠️</span> <span>$1</span></div>');
  
  // Handle paragraphs
  html = html.replace(/^(?!<[hl\d]|<div|<li)(.*$)/gm, '<p class="my-2">$1</p>');
  
  // Cleanup empty paragraphs
  html = html.replace(/<p class="my-2"><\/p>/gm, '');
  
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
    <div className="max-w-4xl mx-auto py-12 px-6 md:px-8">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800">
          Your AI-Powered CRO Report
        </h2>
        
        <div 
          ref={resultRef} 
          className="prose prose-slate max-w-none mb-8"
        />
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Button onClick={onReset} className="bg-primary hover:bg-primary/90 text-white">
            Run Another Analysis <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
