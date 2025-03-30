
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeFeatures from '@/components/HomeFeatures';
import AnalysisForm from '@/components/AnalysisForm';
import ResultsDisplay from '@/components/ResultsDisplay';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'hero' | 'analysis' | 'results'>('hero');
  const [analysisResult, setAnalysisResult] = useState<string>('');

  const handleStartAnalysis = () => {
    setCurrentStep('analysis');
    // Scroll to the analysis form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalysisComplete = (results: string) => {
    setAnalysisResult(results);
    setCurrentStep('results');
    // Scroll to results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setCurrentStep('analysis');
    // Scroll to the analysis form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F172A]">
      <Navbar />

      {currentStep === 'hero' && (
        <>
          <Hero onStartAnalysis={handleStartAnalysis} />
          
          {/* New CTA Block */}
          <div className="py-16 px-6 md:px-8 bg-[#0F172A] text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-8">
                Ready to Optimize Your Product Page?
              </h2>
              <button
                onClick={handleStartAnalysis}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg md:text-xl font-medium px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Analysis
              </button>
            </div>
          </div>
          
          <HomeFeatures />
        </>
      )}

      {currentStep === 'analysis' && (
        <AnalysisForm onAnalysisComplete={handleAnalysisComplete} />
      )}

      {currentStep === 'results' && (
        <ResultsDisplay analysisResult={analysisResult} onReset={handleReset} />
      )}

      <Footer />
    </div>
  );
};

export default Index;
