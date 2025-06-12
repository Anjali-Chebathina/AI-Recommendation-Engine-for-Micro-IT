import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, User, Code, Briefcase, Target } from 'lucide-react';

interface ProfileFormProps {
  onComplete: (data: any) => void;
  onBack: () => void;
}

const ProfileForm = ({ onComplete, onBack }: ProfileFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    degree: '',
    branch: '',
    skills: [] as string[],
    interests: [] as string[],
    pastExperience: '',
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const skillOptions = [
    'Programming (Python, Java, C++)',
    'Web Development (HTML, CSS, JavaScript)',
    'Data Analysis & Statistics',
    'Machine Learning & AI',
    'Mobile App Development',
    'Database Management (SQL, NoSQL)',
    'UI/UX Design',
    'Digital Marketing & SEO',
    'Content Writing & Communication',
    'Project Management',
    'Financial Analysis',
    'Research & Analytics'
  ];

  const interestOptions = [
    'Artificial Intelligence & Machine Learning',
    'Web Development & Frontend',
    'Mobile App Development',
    'Data Science & Analytics',
    'Cybersecurity',
    'Cloud Computing & DevOps',
    'Digital Marketing & Growth',
    'Finance & Banking',
    'Human Resources & Talent',
    'Consulting & Strategy',
    'Research & Development',
    'Product Management',
    'UI/UX Design',
    'Content Creation & Media'
  ];

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.year && formData.degree && formData.branch;
      case 2:
        return formData.skills.length > 0;
      case 3:
        return formData.interests.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Basic Information</h2>
              <p className="text-gray-600">Tell us about your academic background</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Current Year</Label>
                  <Select value={formData.year} onValueChange={(value) => setFormData({...formData, year: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st">1st Year</SelectItem>
                      <SelectItem value="2nd">2nd Year</SelectItem>
                      <SelectItem value="3rd">3rd Year</SelectItem>
                      <SelectItem value="4th">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="degree">Degree</Label>
                  <Select value={formData.degree} onValueChange={(value) => setFormData({...formData, degree: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="B.Tech">B.Tech</SelectItem>
                      <SelectItem value="B.E">B.E</SelectItem>
                      <SelectItem value="BCA">BCA</SelectItem>
                      <SelectItem value="B.Sc">B.Sc</SelectItem>
                      <SelectItem value="BBA">BBA</SelectItem>
                      <SelectItem value="B.Com">B.Com</SelectItem>
                      <SelectItem value="MBA">MBA</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="branch">Branch/Specialization</Label>
                <Input
                  id="branch"
                  value={formData.branch}
                  onChange={(e) => setFormData({...formData, branch: e.target.value})}
                  placeholder="e.g., Computer Science, Mechanical Engineering, etc."
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Skills & Abilities</h2>
              <p className="text-gray-600">Select your current skills and competencies</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {skillOptions.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Checkbox 
                    id={`skill-${index}`}
                    checked={formData.skills.includes(skill)}
                    onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                  />
                  <Label htmlFor={`skill-${index}`} className="text-sm font-medium cursor-pointer">
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
            
            {formData.skills.length > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  Selected: {formData.skills.length} skill(s)
                </p>
              </div>
            )}
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Career Interests</h2>
              <p className="text-gray-600">What domains are you passionate about?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {interestOptions.map((interest, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Checkbox 
                    id={`interest-${index}`}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                  />
                  <Label htmlFor={`interest-${index}`} className="text-sm font-medium cursor-pointer">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
            
            {formData.interests.length > 0 && (
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-indigo-700">
                  Selected: {formData.interests.length} interest(s)
                </p>
              </div>
            )}
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Briefcase className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience & Projects</h2>
              <p className="text-gray-600">Tell us about your relevant experience (optional)</p>
            </div>
            
            <div>
              <Label htmlFor="pastExperience">Past Experience & Projects</Label>
              <Textarea
                id="pastExperience"
                value={formData.pastExperience}
                onChange={(e) => setFormData({...formData, pastExperience: e.target.value})}
                placeholder="Describe any internships, projects, competitions, certifications, or relevant experience you have..."
                rows={6}
                className="mt-1"
              />
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-700">
                💡 Include details about projects, technologies used, achievements, and any relevant coursework or certifications.
              </p>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mb-4">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-gray-600 mt-2">Step {currentStep} of {totalSteps}</p>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create Your Profile
            </CardTitle>
            <CardDescription className="text-lg">
              Help us understand you better to provide personalized recommendations
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                {currentStep === 1 ? 'Back to Home' : 'Previous'}
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center gap-2"
              >
                {currentStep === totalSteps ? 'Get Recommendations' : 'Next'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileForm;
