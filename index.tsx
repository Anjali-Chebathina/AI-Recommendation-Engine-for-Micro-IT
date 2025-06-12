import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, GraduationCap, Target, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import ProfileForm from '@/components/ProfileForm';
import RecommendationResults from '@/components/RecommendationResults';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'landing' | 'profile' | 'results'>('landing');
  const [profileData, setProfileData] = useState(null);

  const handleProfileComplete = (data: any) => {
    setProfileData(data);
    setCurrentStep('results');
  };

  const handleStartOver = () => {
    setCurrentStep('landing');
    setProfileData(null);
  };

  if (currentStep === 'profile') {
    return <ProfileForm onComplete={handleProfileComplete} onBack={() => setCurrentStep('landing')} />;
  }

  if (currentStep === 'results' && profileData) {
    return <RecommendationResults profileData={profileData} onStartOver={handleStartOver} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Company Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Micro IT Services</h2>
                <p className="text-sm text-gray-600">(MITS)</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Powered by AI Technology</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-600 mb-2">Micro IT Services (MITS) Presents</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            AI-Powered Internship
            <span className="block">Recommendation Engine</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover your perfect internship domain with our intelligent recommendation system. 
            Get personalized suggestions based on your academic profile, skills, and career interests.
          </p>
          <Button 
            onClick={() => setCurrentStep('profile')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get My Recommendations
            <Target className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">Smart Profiling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                Create a comprehensive profile based on your academic background, skills, and interests
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">AI-Powered Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                Advanced algorithms analyze your profile to suggest the most suitable internship domains
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">Data-Driven Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                Get detailed insights and reasoning behind each recommendation with industry trends
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-gray-700">Trusted by Students Worldwide</p>
            <p className="text-sm text-gray-600">Micro IT Services (MITS) - Your Partner in Career Success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-gray-600 font-medium">Internship Domains</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-gray-600 font-medium">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
