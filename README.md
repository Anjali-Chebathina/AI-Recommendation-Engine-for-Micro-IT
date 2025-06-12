# AI-Recommendation-Engine-for-Micro-IT
**Made with ❤️ to Micro IT Services (MITS)**


AI-powered Student Internship Recommendation System built with React, TypeScript, and Tailwind CSS. Features intelligent matching based on student profiles, skills assessment, and comprehensive internship recommendations, that helps students find the perfect internship opportunities based on their skills, interests, and career goals.
## 🚀 Features

- **Smart Profile Assessment**: 4-step comprehensive profile building
- **AI-Powered Matching**: Advanced algorithm for personalized recommendations
- **Skill Gap Analysis**: Identifies areas for improvement
- **Company Insights**: Detailed information about potential employers
- **Progress Tracking**: Visual representation of profile completion
- **Responsive Design**: Works seamlessly on all devices
## UI preview

![Screenshot 2025-06-12 170757](https://github.com/user-attachments/assets/8fb74e06-8735-4538-a599-823122a2070e)

![Screenshot 2025-06-12 171750](https://github.com/user-attachments/assets/bc88b4e1-8d96-4a44-9956-eefe30f52f2d)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Build Tool**: Vite
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anjali-Chebathina/student-internship-ai.git
   cd student-internship-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
student-internship-ai/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── ProfileForm.tsx  # Multi-step profile form
│   │   └── RecommendationResults.tsx
│   ├── hooks/
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── Index.tsx        # Main application page
│   │   └── NotFound.tsx     # 404 error page
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 How It Works

1. **Profile Creation**: Students complete a 4-step assessment covering:
   - Personal information and education
   - Skills and technical expertise
   - Interests and career preferences
   - Availability and commitment level

2. **AI Analysis**: The system analyzes the student profile using advanced algorithms

3. **Smart Matching**: Generates personalized internship recommendations based on:
   - Skill compatibility
   - Interest alignment
   - Career goals
   - Company culture fit

4. **Results Display**: Presents ranked recommendations with:
   - Company details and descriptions
   - Required skills and technologies
   - Application guidance
   - Skill gap analysis

## 🌟 Key Components

### ProfileForm Component
- Multi-step form with progress tracking
- Form validation using Zod schemas
- Responsive design with smooth transitions

### RecommendationResults Component
- AI-powered recommendation engine
- Interactive company cards
- Skill matching visualization
- Application tracking

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔮 Future Enhancements

- [ ] Backend integration with real company data
- [ ] User authentication and profile persistence
- [ ] Advanced filtering and search capabilities
- [ ] Integration with job boards and company APIs
- [ ] AI chatbot for personalized guidance
- [ ] Analytics dashboard for success tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 About Micro IT Services (MITS)

Micro IT Services (MITS) is dedicated to bridging the gap between students and industry through innovative technology solutions. Our mission is to empower the next generation of tech professionals with the tools and opportunities they need to succeed.

## 📞 Support

For support, please contact :
- Email: anjalichebathina@gmail.com


---

**Made with ❤️ to Micro IT Services (MITS)**
