import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Upload, 
  Brain, 
  FileText, 
  Heart, 
  Stethoscope, 
  Shield, 
  Users, 
  Award, 
  Zap,
  Cpu,
  Scan,
  Play,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Landing = () => {
  const steps = [
    {
      icon: Upload,
      title: "Data Injection",
      description: "Secure upload of medical images, bio-acoustics, and vital metrics through encrypted channels"
    },
    {
      icon: Brain,
      title: "Neural Processing",
      description: "Advanced AI algorithms analyze multimodal data using deep learning and computer vision"
    },
    {
      icon: FileText,
      title: "Quantum Report",
      description: "Clinical-grade reports with predictive analytics, risk matrices, and actionable intelligence"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Quantum Accuracy",
      description: "99.7% diagnostic precision with FDA-validated neural networks and quantum processing"
    },
    {
      icon: Users,
      title: "Multi-Role Interface",
      description: "Specialized cyber dashboards for patients and medical professionals with real-time sync"
    },
    {
      icon: Award,
      title: "Research Nexus",
      description: "Built on peer-reviewed studies with continuous learning from global medical datasets"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "24/7 health surveillance with instant alert systems and predictive warning protocols"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Ultra-fast processing at the edge with sub-second response times and offline capability"
    },
    {
      icon: Scan,
      title: "Multi-Modal Fusion",
      description: "Advanced sensor fusion combining visual, audio, and biometric data streams for comprehensive analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-medical-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-screen bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan-line"></div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 animate-pulse-glow">
                <Zap className="w-4 h-4 mr-2" />
                Next-Gen Medical AI
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-medical-green to-primary bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-foreground">Multimodal Health</span>
              <br />
              <span className="bg-gradient-to-r from-medical-green to-primary bg-clip-text text-transparent">
                Screening
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary disease prediction using <span className="text-primary font-semibold">computer vision</span>, 
              <span className="text-medical-green font-semibold"> audio analysis</span>, 
              and <span className="text-primary font-semibold">vital signs integration</span> for clinical-grade health reports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/login">
                <Button size="lg" className="relative text-lg px-8 py-4 bg-gradient-to-r from-primary to-medical-green hover:from-primary/80 hover:to-medical-green/80 transition-all duration-300 glow-blue">
                  <Cpu className="mr-2 h-5 w-5" />
                  Launch System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 neon-border hover:bg-primary/10 transition-all duration-300">
                <Play className="mr-2 h-5 w-5" /> 
                Neural Demo
              </Button>
            </div>

            {/* Floating stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { value: "99.7%", label: "Accuracy", icon: Brain },
                { value: "<2s", label: "Analysis", icon: Zap },
                { value: "24/7", label: "Monitoring", icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="cyber-card p-4 text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-medical-green bg-clip-text text-transparent">
              Neural Processing Pipeline
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Advanced AI algorithms process multimodal health data in real-time
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="cyber-card text-center animate-slide-up hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-medical-green rounded-full flex items-center justify-center mx-auto mb-4 glow-blue">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-mono text-primary mb-2">STEP {index + 1}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
            <div className="flex justify-between items-center px-20">
              <div className="w-32 h-px bg-gradient-to-r from-primary to-medical-green animate-data-flow"></div>
              <div className="w-32 h-px bg-gradient-to-r from-medical-green to-primary animate-data-flow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-medical-green/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-medical-green bg-clip-text text-transparent">
                  Healthcare Crisis Matrix
                </span>
              </h2>
              <div className="space-y-6">
                <div className="cyber-card p-6 border-l-4 border-health-critical">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-health-critical rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-critical">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">1:1800 Doctor-Patient Ratio</h3>
                      <p className="text-muted-foreground">Critical shortage of healthcare professionals in rural sectors</p>
                    </div>
                  </div>
                </div>
                <div className="cyber-card p-6 border-l-4 border-health-warning">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-health-warning rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-warning">
                      <Zap className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Late Stage Detection</h3>
                      <p className="text-muted-foreground">70% of diseases identified at critical progression stages</p>
                    </div>
                  </div>
                </div>
                <div className="cyber-card p-6 border-l-4 border-health-good">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-health-good rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-green">
                      <Stethoscope className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Neural Solution Deploy</h3>
                      <p className="text-muted-foreground">Democratizing healthcare access through quantum AI screening technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="cyber-card p-8 text-center neon-border">
                <div className="gradient-body rounded-lg p-8">
                  <Users className="h-20 w-20 text-primary mx-auto mb-4 animate-float" />
                  <p className="text-lg font-semibold text-foreground mb-2">Interactive Health Matrix</p>
                  <p className="text-muted-foreground">Real-time visualization of India's health crisis data streams</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-primary/10 rounded p-3">
                      <div className="text-2xl font-bold text-primary">1.4B</div>
                      <div className="text-muted-foreground">Population</div>
                    </div>
                    <div className="bg-medical-green/10 rounded p-3">
                      <div className="text-2xl font-bold text-medical-green">AI+</div>
                      <div className="text-muted-foreground">Solution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-medical-green bg-clip-text text-transparent">
              Quantum Health Features
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Cutting-edge technology meets medical precision
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="cyber-card group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-medical-green/20 rounded-full flex items-center justify-center mx-auto">
                      <feature.icon className="h-8 w-8 text-primary group-hover:text-medical-green transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-medical-green rounded-full animate-pulse-glow opacity-60"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-medical-green/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="cyber-card p-12 neon-border">
              <Scan className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse-glow" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-medical-green bg-clip-text text-transparent">
                  Initialize Health Matrix
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Activate your personal health monitoring system. 
                Deploy AI-powered diagnostics and unlock the future of preventive medicine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button size="lg" className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-medical-green hover:from-primary/80 hover:to-medical-green/80 glow-blue transition-all duration-300">
                    <Zap className="mr-2 h-5 w-5" />
                    Activate System
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 neon-border hover:bg-primary/10 transition-all duration-300">
                  <Brain className="mr-2 h-5 w-5" />
                  Neural Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;