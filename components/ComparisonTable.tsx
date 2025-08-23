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

interface TechStack {
    id: string
    name: string
    slug?: string
    category_slug?: string
    logo?: string
    logo_url?: string
    short_description:string
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
    if (level=="Beginner") return "bg-green-600";
    if (level=="Intermediate") return "bg-yellow-300 ";
    if(level=="high" || level=='High') return "bg-green-500"
    if(level=="Medium" || level=='medium') return "bg-yellow-500 "
    if(level=="Low" || level=='low') return "bg-red-500"
    return "bg-red-800";
  };

  return <Badge className={`p-1.5 text-xs text-white ${getVariant(level)}`}>{level}</Badge>;
};

export default function TechCard({ stack }: { stack: TechStack }) {
  return (
    <Card className="h-full bg-black/40 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-card-foreground">{stack.name}</CardTitle>
          {/* Github star to add later */}
          {/* <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              {stack.githubStars}
            </span>
          </div> */}
        </div>
        <CardDescription className="text-base leading-relaxed">{stack.short_description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Pros */}
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-card-foreground mb-3">
            <CheckCircle className="w-5 h-5 text-green-700" />
            Pros
          </h3>
          <ul className="space-y-2">
            {stack.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-card-foreground mb-3">
            <XCircle className="w-5 h-5 text-destructive" />
            Cons
          </h3>
          <ul className="space-y-2">
            {stack.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-card-foreground mb-3">
            <Users className="w-5 h-5 text-amber-600" />
            Major Use Cases
          </h3>
          <ul className="space-y-1">
            {stack.major_use_cases.map((useCase, i) => (
              <li key={i} className="text-sm text-muted-foreground">
                • {useCase}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Curve */}
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-card-foreground mb-3">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            Learning Curve
          </h3>
          <div className="">
             <LearningCurveBadge level={stack.learning_curve} />
          </div>
        </div>

        {/* Popularity */}
        <div>
          <h3 className="flex items-center gap-2 font-semibold text-card-foreground mb-3">
            <Star className="w-5 h-5 text-amber-600" />
            Popularity
          </h3>
            <div className="">
             <LearningCurveBadge level={stack.popularity}/>
          </div>
          {/* Popularity Bar */}
          {/* <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Developer Adoption</span>
              <span className="font-medium">{stack.popularity}%</span>
            </div>
            <PopularityBar percentage={stack.popularity} />
          </div> */}
        </div>

        {/* Docs Link */}
        <div className="pt-4">
          <Button asChild className="w-full">
            <a
              href={stack.official_docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              View Official Documentation
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
