import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  XCircle,
  Star,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";
import OptimizedTechImage from "./OptimizedImages";

interface TechStack {
  id: string
  name: string
  slug?: string
  category_slug?: string
  logo?: string
  logo_url?: string
  short_description: string
  detailed_description?: string
  official_docs: string
  learning_curve: string
  popularity: string
  pros: string[]
  cons: string[]
  major_use_cases: string[]
  basic_prerequisites: string[]
}

// const PopularityBar = ({ percentage }: { percentage: number }) => (
//   <div className="w-full bg-muted rounded-full h-2">
//     <div
//       className="bg-primary h-2 rounded-full transition-all duration-300"
//       style={{ width: `${percentage}%` }}
//     />
//   </div>
// );

const LearningCurveBadge = ({ level }: { level: string }) => {
  const getVariant = (level: string) => {
    if (level == "Beginner") return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    if (level == "Intermediate") return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    if (level == "high" || level == 'High') return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    if (level == "Medium" || level == 'medium') return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    if (level == "Low" || level == 'low') return "bg-red-500/20 text-red-400 border-red-500/30";
    return "bg-red-500/20 text-red-400 border-red-500/30";
  };

  return (
    <Badge className={`px-3 py-1.5 text-sm font-medium capitalize border ${getVariant(level)} 
      rounded-lg transition-colors duration-200`}
    >
      {level}
    </Badge>
  );
};

export default function TechCard({ stack }: { stack: TechStack }) {
  return (
    <Card className="h-full bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl flex justify-between w-full items-center gap-4">
            <span className="font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {stack.name}
            </span>
            <span>
              <OptimizedTechImage 
                logoUrl={stack.logo_url}
                name={stack.name}
                size="large"
                className="w-14 h-14 flex-shrink-0 rounded-xl p-2 bg-white/5 border border-white/10"
              />
            </span>
          </CardTitle>
          {/* Github star to add later */}
          {/* <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              {stack.githubStars}
            </span>
          </div> */}
        </div>
        <CardDescription className="text-base leading-relaxed text-neutral-300/90 mt-4">
          {stack.short_description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Pros */}
        <div>
          <h3 className="flex items-center gap-2 font-medium text-white mb-4">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            Pros
          </h3>
          <ul className="space-y-3">
            {stack.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-500/80 transition-colors" />
                <span className="text-sm text-neutral-300/90 leading-relaxed group-hover:text-white transition-colors">
                  {pro}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <h3 className="flex items-center gap-2 font-medium text-white mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
            Cons
          </h3>
          <ul className="space-y-3">
            {stack.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500/60 group-hover:bg-red-500/80 transition-colors" />
                <span className="text-sm text-neutral-300/90 leading-relaxed group-hover:text-white transition-colors">
                  {con}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="flex items-center gap-2 font-medium text-white mb-4">
            <Users className="w-5 h-5 text-blue-400" />
            Major Use Cases
          </h3>
          <div className="grid gap-2">
            {stack.major_use_cases.map((useCase, i) => (
              <div 
                key={i} 
                className="text-sm text-neutral-300/90 bg-white/5 border border-white/10 rounded-lg p-3
                         hover:bg-white/10 transition-colors group"
              >
                <span className="group-hover:text-white transition-colors">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Learning Curve */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
            <h3 className="flex items-center gap-2 font-medium text-white mb-3">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Learning Curve
            </h3>
            <div>
              <LearningCurveBadge level={stack.learning_curve} />
            </div>
          </div>

          {/* Popularity */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
            <h3 className="flex items-center gap-2 font-medium text-white mb-3">
              <Star className="w-5 h-5 text-blue-400" />
              Popularity
            </h3>
            <LearningCurveBadge level={stack.popularity} />
          </div>
        </div>

        {/* Docs Link */}
        <div className="pt-4">
          <Button 
            asChild 
            className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl h-11 
                     transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <a
              href={stack.official_docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>View Official Documentation</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
