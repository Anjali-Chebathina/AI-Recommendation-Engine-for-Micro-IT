import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Star, ThumbsUp, ThumbsDown, RotateCcw, Sparkles, TrendingUp, Users, Clock, Award, DollarSign } from 'lucide-react';
import { generateRecommendations } from '@/utils/recommendationEngine';

interface RecommendationResultsProps {
  profileData: any;
  onStartOver: () => void;
}

const RecommendationResults = ({ profileData, onStartOver }: RecommendationResultsProps) => {
  const [recommendations] = useState(() => generateRecommendations(profileData));
  const [feedback, setFeedback] = useState<{[key: string]: 'up' | 'down' | null}>({});
  const [ratings, setRatings] = useState<{[key: string]: number}>({});

  const handleFeedback = (domainId: string, type: 'up' | 'down') => {
    setFeedback(prev => ({
      ...prev,
      [domainId]: prev[domainId] === type ? null : type
    }));
  };

  const handleRating = (domainId: string, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [domainId]: rating
    }));
  };

  const getMatchColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100 border-green-200';
    if (score >= 70) return 'text-blue-600 bg-blue-100 border-blue-200';
    if (score >= 55) return 'text-yellow-600 bg-yellow-100 border-yellow-200';
    return 'text-gray-600 bg-gray-100 border-gray-200';
  };

  const getDemandLevelColor = (level: string) => {
    switch (level) {
      case 'Extremely High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Very High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'High': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-full">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your AI-Powered Recommendations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Based on your profile analysis, here are the most suitable internship domains tailored for you.
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 inline-block">
            <p className="text-lg font-semibold text-gray-800">
              Hello {profileData.name}! 🎯 Here are your personalized matches:
            </p>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="space-y-8 mb-12">
          {recommendations.map((rec, index) => (
            <Card key={rec.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="flex">
                {/* Rank Badge */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 flex items-center justify-center min-w-[120px]">
                  <div className="text-center">
                    <div className="text-3xl font-bold">#{index + 1}</div>
                    <div className="text-sm opacity-90">Best Match</div>
                    <Award className="h-6 w-6 mx-auto mt-2 opacity-80" />
                  </div>
                </div>

                <div className="flex-1">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{rec.domain}</CardTitle>
                        <CardDescription className="text-gray-600 text-lg leading-relaxed">{rec.description}</CardDescription>
                      </div>
                      <div className="text-right ml-6">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border ${getMatchColor(rec.matchScore)}`}>
                          {rec.matchScore}% Match
                        </div>
                        <Progress value={rec.matchScore} className="w-32 mt-2" />
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Badge variant="outline" className={`${getDemandLevelColor(rec.demandLevel)} border`}>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {rec.demandLevel} Demand
                      </Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {rec.avgSalary}
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        <Award className="h-3 w-3 mr-1" />
                        {rec.industryGrowth} Growth
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Skills Match */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                        Your Matching Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rec.matchingSkills.length > 0 ? (
                          rec.matchingSkills.map((skill: string, skillIndex: number) => (
                            <Badge key={skillIndex} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {skill}
                            </Badge>
                          ))
                        ) : (
                          <span className="text-gray-500 italic">Based on your interests and academic background</span>
                        )}
                      </div>
                    </div>

                    {/* Why This Domain */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-purple-600" />
                        Why This Domain is Perfect for You
                      </h4>
                      <p className="text-gray-700 leading-relaxed bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                        {rec.reasoning}
                      </p>
                    </div>

                    {/* Potential Roles */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-green-600" />
                        Internship Opportunities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rec.potentialRoles.map((role: string, roleIndex: number) => (
                          <Badge key={roleIndex} variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Feedback Section */}
                    <div className="border-t pt-6 bg-gray-50 -mx-6 px-6 -mb-6 pb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-medium text-gray-700">Rate this recommendation:</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => handleRating(rec.id, star)}
                                className={`transition-colors hover:scale-110 transform ${
                                  (ratings[rec.id] || 0) >= star ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              >
                                <Star className="h-5 w-5 fill-current" />
                              </button>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleFeedback(rec.id, 'up')}
                            className={`transition-all ${
                              feedback[rec.id] === 'up' 
                                ? 'bg-green-100 text-green-700 border-green-300 scale-105' 
                                : 'hover:bg-green-50 hover:border-green-200'
                            }`}
                          >
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleFeedback(rec.id, 'down')}
                            className={`transition-all ${
                              feedback[rec.id] === 'down' 
                                ? 'bg-red-100 text-red-700 border-red-300 scale-105' 
                                : 'hover:bg-red-50 hover:border-red-200'
                            }`}
                          >
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <Button
            onClick={onStartOver}
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Try with Different Profile
          </Button>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <Sparkles className="h-6 w-6 mr-2 text-blue-600" />
              Next Steps to Land Your Dream Internship
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">🎯 Application Strategy:</h4>
                <p className="text-gray-600 text-sm">Focus on your top 2-3 matches and tailor your applications to highlight relevant skills</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">🔍 Where to Apply:</h4>
                <p className="text-gray-600 text-sm">Search on LinkedIn, Internshala, AngelList, and company career pages</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">📚 Skill Development:</h4>
                <p className="text-gray-600 text-sm">Strengthen skills mentioned in your matches through online courses and projects</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">🤝 Networking:</h4>
                <p className="text-gray-600 text-sm">Connect with professionals in your target domains on LinkedIn and attend virtual events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationResults;
