
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
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
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />

      {currentStep === 'hero' && (
        <>
          <Hero />
          <CTASection onStartAnalysis={handleStartAnalysis} />
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
