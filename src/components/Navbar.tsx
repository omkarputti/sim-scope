import { Button } from "@/components/ui/button";
import { Activity, Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Login", href: "/login" },
    { label: "Patient Dashboard", href: "/patient-dashboard" },
    { label: "Doctor Dashboard", href: "/doctor-dashboard" },
    { label: "Report", href: "/report" },
    { label: "Research", href: "/research" },
    { label: "Contact Info", href: "/contact" },
    { label: "Help", href: "/help" },
  ];

  return (
    <nav className="bg-background/95 border-b border-primary/20 backdrop-blur-lg sticky top-0 z-50 relative">
      {/* Scan line animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-medical-green rounded-lg flex items-center justify-center glow-blue">
                <Zap className="h-6 w-6 text-primary-foreground animate-pulse-glow" />
              </div>
              <Activity className="h-4 w-4 text-medical-green absolute -top-1 -right-1 animate-float" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-medical-green bg-clip-text text-transparent">
                SIMHEALTH
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                v2.0-CYBER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute inset-0 border border-primary/30 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-blue"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden neon-border"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-slide-up">
            <div className="flex flex-col space-y-2 bg-card/80 backdrop-blur-lg rounded-lg p-4 border border-primary/20">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  to={item.href} 
                  className="text-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/10 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;