import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Loader2 } from 'lucide-react';

export function PageAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzePage = async () => {
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: 'https://www.meundies.com/products/boxer-brief-w-fly-wild-jellies',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze page');
      }

      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Page Analysis</CardTitle>
          <CardDescription>
            Click the button below to analyze the MeUndies product page
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={analyzePage} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Page'
            )}
          </Button>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}

          {analysis && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md whitespace-pre-wrap">
              {analysis}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 