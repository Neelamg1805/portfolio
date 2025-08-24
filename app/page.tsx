"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Code,
  Music,
  ChefHat,
  Video,
  Star,
  GitBranch,
  Users,
  Calendar,
  Menu,
  X,
  Smartphone,
  Database,
  Wrench,
  Globe,
  Layers,
  Zap,
  Shield,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const skills = [
    { name: "HTML", category: "Frontend", level: 90 },
    { name: "CSS", category: "Frontend", level: 85 },
    { name: "JavaScript", category: "Frontend", level: 88 },
    { name: "React.js", category: "Frontend", level: 85 },
    { name: "Next.js", category: "Frontend", level: 80 },
    { name: "Bootstrap", category: "Frontend", level: 85 },
    { name: "jQuery", category: "Frontend", level: 75 },
    { name: "React Native", category: "Mobile", level: 80 },
    { name: "Android Studio", category: "Mobile", level: 70 },
    { name: "Redux Toolkit", category: "State Management", level: 75 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Express.js", category: "Backend", level: 80 },
    { name: "PostgreSQL", category: "Backend", level: 80 },
    { name: "MySQL", category: "Backend", level: 80 },
    { name: "MongoDB", category: "Backend", level: 75 },
    { name: "Firebase", category: "Backend", level: 85 },
    { name: "Strapi CMS", category: "Backend", level: 75 },
    { name: "Git", category: "Tools", level: 90 },
    { name: "GitHub", category: "Tools", level: 90 },
    { name: "Postman", category: "Tools", level: 85 },
  ]

  const experience = [
    {
      title: "Software Engineer",
      company: "Sthanave Technologies",
      period: "2024 - Present",
      type: "Full-time",
      description:
        "Working as a full-stack developer, building responsive web applications and mobile solutions using modern technologies.",
      achievements: ["Built 5+ production applications", "Improved performance by 40%", "Led team of 3 developers"],
    },
    {
      title: "Web Development Intern",
      company: "Sthanave Technologies",
      period: "2023 - 2024",
      type: "Internship",
      description:
        "Completed comprehensive internship in web development, gaining hands-on experience with frontend and backend technologies.",
      achievements: ["Completed 10+ projects", "Learned modern frameworks", "Collaborated with senior developers"],
    },
  ]

  const education = [
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Uday Prasad Uday Government Polytechnic Durg",
      period: "2021 - 2022",
      grade: "Completed",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "CG Board",
      period: "2019 - 2020",
      grade: "92%",
    },
    {
      degree: "Secondary (10th)",
      institution: "CG Board",
      period: "2018 - 2019",
      grade: "92%",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Web Application",
      description:
        "Built a full-stack e-commerce platform with React.js frontend and Firebase backend, featuring user authentication, product catalog, and shopping cart functionality.",
      technologies: ["React.js", "Firebase", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      stars: 24,
      forks: 8,
    },
    {
      title: "Task Management Mobile App",
      description:
        "Developed a cross-platform mobile application using React Native for task management with offline capabilities and cloud synchronization.",
      technologies: ["React Native", "Redux Toolkit", "Firebase"],
      github: "#",
      live: "#",
      stars: 18,
      forks: 5,
    },
    {
      title: "Restaurant Management System",
      description:
        "Created a comprehensive restaurant management system with Strapi CMS backend, featuring menu management, order tracking, and customer management.",
      technologies: ["Next.js", "Strapi CMS", "MySQL", "Bootstrap"],
      github: "#",
      live: "#",
      stars: 31,
      forks: 12,
    },
  ]

  const hobbies = [
    { name: "Cooking", icon: ChefHat },
    { name: "Video Editing", icon: Video },
    { name: "Listening to Music", icon: Music },
  ]

  const [displayedName, setDisplayedName] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const fullName = "NEELAM GAYAKWAD"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation with Dynamic Elements */}
      <nav className="nav-glassmorphism fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl text-foreground relative">
              <div className="logo-container">
                <span className="gradient-text-professional logo-text">
                  {displayedName}
                  {isTyping && <span className="animate-typing-cursor text-accent">|</span>}
                </span>
                <div className="logo-glow"></div>
              </div>
            </div>
            
            {/* Desktop Navigation with Enhanced Effects */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Work", "Projects", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link-enhanced text-muted-foreground hover:text-accent transition-all duration-300 font-medium text-lg relative group"
                >
                  <span className="nav-text">{item}</span>
                  <div className="nav-underline"></div>
                  <div className="nav-highlight"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button with Animation */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-accent relative overflow-hidden"
              >
                <div className={`menu-icon-container ${mobileMenuOpen ? 'open' : ''}`}>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                  <span className="menu-line"></span>
                </div>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden glassmorphism-card p-6 mb-4 animate-enhanced-fade-in-up">
              <div className="flex flex-col space-y-4">
                {["Home", "About", "Skills", "Work", "Projects", "Contact"].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link text-muted-foreground hover:text-accent transition-colors duration-300 font-medium text-lg py-2 relative group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-text">{item}</span>
                    <div className="mobile-nav-underline"></div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section with Dynamic Elements */}
      <section id="home" className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-bg"></div>
        
        {/* Floating Particles Background */}
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full animate-enhanced-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full animate-enhanced-float animate-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full animate-enhanced-float animate-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent/8 rounded-full animate-enhanced-float animate-delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary/6 rounded-full animate-enhanced-float animate-delay-900"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-enhanced-fade-in-up">
              <div className="hero-card glassmorphism-card p-10 mb-10 animate-glassmorphism-glow relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className="card-pattern"></div>
                

                
                <h1 className="hero-title text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                  <span className="gradient-text-professional hero-text">
                    {displayedName}
                    {isTyping && <span className="animate-typing-cursor text-accent">|</span>}
                  </span>
                </h1>
                
                <div className="hero-badge inline-flex items-center gap-3 bg-accent/10 text-accent px-6 py-3 rounded-full font-semibold text-xl mb-8 border border-accent/20 relative overflow-hidden">
                  <Code className="h-6 w-6" />
                  <span>Software Engineer</span>
                  <div className="badge-shine"></div>
                </div>
                
                <p className="hero-description text-muted-foreground text-xl leading-relaxed mb-10">
                  Web Developer focused on creating useful and effective websites and applications. Eager to take on new
                  challenges and use creative thinking to build fast, responsive, and user-friendly web solutions.
                </p>
              </div>

              <div className="hero-actions flex gap-6">
                <Button className="hero-button-primary github-button px-8 py-4 font-semibold text-lg relative overflow-hidden">
                  <Mail className="mr-3 h-6 w-6" />
                  <span>Hire Me</span>
                  <div className="button-shine"></div>
                </Button>
                <Button
                  className="hero-button-secondary github-button-secondary px-8 py-4 font-semibold text-lg relative overflow-hidden"
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href = "/Neelam_Gayakwad_Resume.pdf"
                    link.download = "Neelam_Gayakwad_Resume.pdf"
                    link.target = "_blank"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="mr-3 h-6 w-6" />
                  <span>Download CV</span>
                  <div className="button-shine"></div>
                </Button>
              </div>
            </div>

            <div className="animate-enhanced-scale-in animate-delay-300">
              <div className="hero-stats-card glassmorphism-card p-10 relative overflow-hidden">
                {/* Card Background Pattern */}
                <div className="card-pattern"></div>
                
                <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <Users className="h-8 w-8 text-accent" />
                  Quick Stats
                </h3>
                
                <div className="stats-grid grid grid-cols-2 gap-8">
                  {[
                    { number: "1+", label: "Years Experience", icon: "⭐" },
                    { number: "15+", label: "Projects Completed", icon: "🚀" },
                    { number: "10+", label: "Technologies", icon: "⚡" },
                    { number: "92%", label: "Academic Score", icon: "🎯" }
                  ].map((stat, index) => (
                    <div key={index} className="stat-item text-center group">
                      <div className="stat-icon text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-professional-dark opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text-professional">Skills & Technologies</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Four Mobile Technology Mockups */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              <span className="gradient-text-professional">Mobile Development Technologies</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              
              {/* React Native Mockup */}
              <div className="tech-mockup-container">
                <div className="tech-mockup react-native-mockup animate-tech-float">
                  <div className="iphone-frame react-native-frame">
                    <div className="iphone-notch">
                      <div className="notch-speaker"></div>
                      <div className="notch-camera"></div>
                    </div>
                    
                    <div className="iphone-screen react-native-screen">
                      <div className="iphone-status-bar">
                        <div className="status-left">
                          <span className="status-time">9:41</span>
                        </div>
                        <div className="status-right">
                          <div className="signal-bars">
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                          </div>
                          <div className="wifi-icon">
                            <div className="wifi-arc"></div>
                          </div>
                          <div className="battery-indicator">
                            <div className="battery-outline">
                              <div className="battery-fill" style={{ width: "85%" }}></div>
                            </div>
                            <span className="battery-percentage">85%</span>
                          </div>
                        </div>
                      </div>

                      <div className="app-header react-native-header">
                        <div className="app-icon react-native-icon">
                          <div className="react-native-logo">⚛️</div>
                        </div>
                        <div className="app-info">
                          <div className="app-title">React Native</div>
                          <div className="app-subtitle">Cross-Platform</div>
                        </div>
                        <div className="app-menu">
                          <div className="menu-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="tech-features">
                        <div className="feature-item">
                          <div className="feature-icon">🚀</div>
                          <div className="feature-text">Native Performance</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">📱</div>
                          <div className="feature-text">iOS & Android</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">⚡</div>
                          <div className="feature-text">Hot Reload</div>
                        </div>
                      </div>

                      <div className="tech-stats">
                        <div className="stat-item">
                          <span className="stat-label">Experience</span>
                          <span className="stat-value">2+ Years</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Projects</span>
                          <span className="stat-value">8+ Apps</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Proficiency</span>
                          <span className="stat-value">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tech-description">
                    <h4 className="tech-title">React Native</h4>
                    <p className="tech-text">Build native mobile apps using React and JavaScript. Cross-platform development with native performance and hot reload capabilities.</p>
                    <div className="tech-tags">
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Mobile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flutter Mockup */}
              <div className="tech-mockup-container">
                <div className="tech-mockup flutter-mockup animate-tech-float animate-delay-200">
                  <div className="iphone-frame flutter-frame">
                    <div className="iphone-notch">
                      <div className="notch-speaker"></div>
                      <div className="notch-camera"></div>
                    </div>
                    
                    <div className="iphone-screen flutter-screen">
                      <div className="iphone-status-bar">
                        <div className="status-left">
                          <span className="status-time">9:41</span>
                        </div>
                        <div className="status-right">
                          <div className="signal-bars">
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                          </div>
                          <div className="wifi-icon">
                            <div className="wifi-arc"></div>
                          </div>
                          <div className="battery-indicator">
                            <div className="battery-outline">
                              <div className="battery-fill" style={{ width: "80%" }}></div>
                            </div>
                            <span className="battery-percentage">80%</span>
                          </div>
                        </div>
                      </div>

                      <div className="app-header flutter-header">
                        <div className="app-icon flutter-icon">
                          <div className="flutter-logo">🦋</div>
                        </div>
                        <div className="app-info">
                          <div className="app-title">Flutter</div>
                          <div className="app-subtitle">Google's UI Kit</div>
                        </div>
                        <div className="app-menu">
                          <div className="menu-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="tech-features">
                        <div className="feature-item">
                          <div className="feature-icon">🎨</div>
                          <div className="feature-text">Beautiful UI</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">⚡</div>
                          <div className="feature-text">Fast Rendering</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">🔧</div>
                          <div className="feature-text">Dart Language</div>
                        </div>
                      </div>

                      <div className="tech-stats">
                        <div className="stat-item">
                          <span className="stat-label">Experience</span>
                          <span className="stat-value">1.5 Years</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Projects</span>
                          <span className="stat-value">5+ Apps</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Proficiency</span>
                          <span className="stat-value">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tech-description">
                    <h4 className="tech-title">Flutter</h4>
                    <p className="tech-text">Google's UI toolkit for building natively compiled applications with beautiful, fast, and expressive user interfaces.</p>
                    <div className="tech-tags">
                      <span className="tech-tag">Dart</span>
                      <span className="tech-tag">Google</span>
                      <span className="tech-tag">UI Kit</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Android Studio Mockup */}
              <div className="tech-mockup-container">
                <div className="tech-mockup android-mockup animate-tech-float animate-delay-400">
                  <div className="iphone-frame android-frame">
                    <div className="iphone-notch">
                      <div className="notch-speaker"></div>
                      <div className="notch-camera"></div>
                    </div>
                    
                    <div className="iphone-screen android-screen">
                      <div className="iphone-status-bar">
                        <div className="status-left">
                          <span className="status-time">9:41</span>
                        </div>
                        <div className="status-right">
                          <div className="signal-bars">
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                          </div>
                          <div className="wifi-icon">
                            <div className="wifi-arc"></div>
                          </div>
                          <div className="battery-indicator">
                            <div className="battery-outline">
                              <div className="battery-fill" style={{ width: "75%" }}></div>
                            </div>
                            <span className="stat-value">75%</span>
                          </div>
                        </div>
                      </div>

                      <div className="app-header android-header">
                        <div className="app-icon android-icon">
                          <div className="android-logo">🤖</div>
                        </div>
                        <div className="app-info">
                          <div className="app-title">Android Studio</div>
                          <div className="app-subtitle">Native Android</div>
                        </div>
                        <div className="app-menu">
                          <div className="menu-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="tech-features">
                        <div className="feature-item">
                          <div className="feature-icon">🔧</div>
                          <div className="feature-text">Full Control</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">📱</div>
                          <div className="feature-text">Android Only</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">⚡</div>
                          <div className="feature-text">Kotlin/Java</div>
                        </div>
                      </div>

                      <div className="tech-stats">
                        <div className="stat-item">
                          <span className="stat-label">Experience</span>
                          <span className="stat-value">1 Year</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Projects</span>
                          <span className="stat-value">3+ Apps</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Proficiency</span>
                          <span className="stat-value">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tech-description">
                    <h4 className="tech-title">Android Studio</h4>
                    <p className="tech-text">Official IDE for Android development with powerful tools, emulator, and full control over native Android features.</p>
                    <div className="tech-tags">
                      <span className="tech-tag">Kotlin</span>
                      <span className="tech-tag">Java</span>
                      <span className="tech-tag">Android</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* iOS Development Mockup */}
              <div className="tech-mockup-container">
                <div className="tech-mockup ios-mockup animate-tech-float animate-delay-600">
                  <div className="iphone-frame ios-frame">
                    <div className="iphone-notch">
                      <div className="notch-speaker"></div>
                      <div className="notch-camera"></div>
                    </div>
                    
                    <div className="iphone-screen ios-screen">
                      <div className="iphone-status-bar">
                        <div className="status-left">
                          <span className="status-time">9:41</span>
                        </div>
                        <div className="status-right">
                          <div className="signal-bars">
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                            <div className="signal-bar"></div>
                          </div>
                          <div className="wifi-icon">
                            <div className="wifi-arc"></div>
                          </div>
                          <div className="battery-indicator">
                            <div className="battery-outline">
                              <div className="battery-fill" style={{ width: "70%" }}></div>
                            </div>
                            <span className="battery-percentage">70%</span>
                          </div>
                        </div>
                      </div>

                      <div className="app-header ios-header">
                        <div className="app-icon ios-icon">
                          <div className="ios-logo">🍎</div>
                        </div>
                        <div className="app-info">
                          <div className="app-title">iOS Development</div>
                          <div className="app-subtitle">Native iOS</div>
                        </div>
                        <div className="app-menu">
                          <div className="menu-dots">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                          </div>
                        </div>
                      </div>

                      <div className="tech-features">
                        <div className="feature-item">
                          <div className="feature-icon">🍎</div>
                          <div className="feature-text">Apple Ecosystem</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">⚡</div>
                          <div className="feature-text">Swift/Objective-C</div>
                        </div>
                        <div className="feature-item">
                          <div className="feature-icon">📱</div>
                          <div className="feature-text">iPhone Only</div>
                        </div>
                      </div>

                      <div className="tech-stats">
                        <div className="stat-item">
                          <span className="stat-label">Experience</span>
                          <span className="stat-value">8 Months</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Projects</span>
                          <span className="stat-value">2+ Apps</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-label">Proficiency</span>
                          <span className="stat-value">70%</span>
                          </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tech-description">
                    <h4 className="tech-title">iOS Development</h4>
                    <p className="tech-text">Native iOS app development using Swift and Objective-C with full access to Apple's ecosystem and design guidelines.</p>
                    <div className="tech-tags">
                      <span className="tech-tag">Swift</span>
                      <span className="tech-tag">Xcode</span>
                      <span className="tech-tag">iOS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Slider */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
              <span className="gradient-text-professional">Featured Skills</span>
            </h3>
            <div className="skills-slider">
              <div className="skills-track">
                {/* First set of skill cards */}
                <div className="skill-card-sliding featured">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">React Native</h4>
                      <p className="text-sm opacity-90">Mobile Development</p>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-3">
                    <div className="bg-white h-3 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-sm opacity-75">Cross-platform mobile apps with native performance</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">React.js</h4>
                      <p className="text-sm text-muted-foreground">Frontend Framework</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Modern UI development with hooks and context</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">Next.js</h4>
                      <p className="text-sm text-muted-foreground">Full-stack Framework</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Server-side rendering and API routes</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">JavaScript</h4>
                      <p className="text-sm text-muted-foreground">Programming Language</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">ES6+, async/await, DOM manipulation</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">Firebase</h4>
                      <p className="text-sm text-muted-foreground">Backend Service</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Authentication, database, and hosting</p>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="skill-card-sliding featured">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">React Native</h4>
                      <p className="text-sm opacity-90">Mobile Development</p>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-3">
                    <div className="bg-white h-3 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-sm opacity-75">Cross-platform mobile apps with native performance</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">React.js</h4>
                      <p className="text-sm text-muted-foreground">Frontend Framework</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Modern UI development with hooks and context</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">Next.js</h4>
                      <p className="text-sm text-muted-foreground">Full-stack Framework</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Server-side rendering and API routes</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">JavaScript</h4>
                      <p className="text-sm text-muted-foreground">Programming Language</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">ES6+, async/await, DOM manipulation</p>
                </div>

                <div className="skill-card-sliding">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 gradient-professional-primary rounded-xl flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">Firebase</h4>
                      <p className="text-sm text-muted-foreground">Backend Service</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-3">
                    <div className="gradient-professional-accent h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Authentication, database, and hosting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skill Categories Grid with Dynamic Layouts */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                category: "Frontend",
                icon: Globe,
                color: "from-blue-500 to-cyan-400",
                accent: "blue",
                description: "Modern web interfaces",
                highlight: "React.js & Next.js Expert",
                stats: "6 Technologies • 85% Avg"
              },
                              {
                  category: "Backend",
                  icon: Database,
                  color: "from-green-500 to-emerald-400",
                  accent: "green",
                  description: "Server & APIs",
                  highlight: "Full-Stack Backend Pro",
                  stats: "7 Technologies • 81% Avg"
                }
            ].map((categoryData, categoryIndex) => (
              <div
                key={categoryData.category}
                className={`skill-category-card-${categoryData.accent} animate-enhanced-fade-in-up animate-delay-${(categoryIndex + 1) * 100}`}
              >
                <div className="skill-category-header">
                  <div className={`skill-category-icon bg-gradient-to-br ${categoryData.color}`}>
                    {React.createElement(categoryData.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <div className="skill-category-info">
                    <div className="skill-category-title">{categoryData.category}</div>
                    <div className="skill-category-subtitle">{categoryData.description}</div>
                    <div className="skill-category-highlight">{categoryData.highlight}</div>
                    <div className="skill-category-stats">{categoryData.stats}</div>
                  </div>
                </div>
                
                <div className="skill-category-content">
                  {skills
                    .filter((skill) => skill.category === categoryData.category)
                    .map((skill, index) => (
                      <div key={index} className={`skill-item-${categoryData.accent}`}>
                        <div className="skill-item-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className={`skill-percentage-${categoryData.accent}`}>{skill.level}%</span>
                        </div>
                        <div className={`skill-progress-container-${categoryData.accent}`}>
                          <div
                            className={`skill-progress-fill-${categoryData.accent}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Unique visual element for each category */}
                {categoryData.category === "Frontend" && (
                  <div className="category-decoration frontend-decoration">
                    <div className="floating-element">⚡</div>
                    <div className="floating-element">🎨</div>
                    <div className="floating-element">🌐</div>
                  </div>
                )}
                
                {categoryData.category === "Mobile" && (
                  <div className="category-decoration mobile-decoration">
                    <div className="floating-element">📱</div>
                    <div className="floating-element">🚀</div>
                    <div className="floating-element">📱</div>
                  </div>
                )}
                
                {categoryData.category === "Backend" && (
                  <div className="category-decoration backend-decoration">
                    <div className="floating-element">🔧</div>
                    <div className="floating-element">⚙️</div>
                    <div className="floating-element">🗄️</div>
                  </div>
                )}
                
                {categoryData.category === "Tools" && (
                  <div className="category-decoration tools-decoration">
                    <div className="floating-element">🛠️</div>
                    <div className="floating-element">💻</div>
                    <div className="floating-element">🔨</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Second Row - Mobile and Tools */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
            {[
              {
                category: "Mobile",
                icon: Smartphone,
                color: "from-purple-500 to-pink-400",
                accent: "purple",
                description: "Cross-platform apps",
                highlight: "React Native Specialist",
                stats: "2 Technologies • 75% Avg"
              },
              {
                category: "Tools",
                icon: Wrench,
                color: "from-orange-500 to-red-400",
                accent: "orange",
                description: "Development workflow",
                highlight: "Git & GitHub Master",
                stats: "3 Technologies • 88% Avg"
              }
            ].map((categoryData, categoryIndex) => (
              <div
                key={categoryData.category}
                className={`skill-category-card-${categoryData.accent} animate-enhanced-fade-in-up animate-delay-${(categoryIndex + 1) * 100}`}
              >
                <div className="skill-category-header">
                  <div className={`skill-category-icon bg-gradient-to-br ${categoryData.color}`}>
                    {React.createElement(categoryData.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <div className="skill-category-info">
                    <div className="skill-category-title">{categoryData.category}</div>
                    <div className="skill-category-subtitle">{categoryData.description}</div>
                    <div className="skill-category-highlight">{categoryData.highlight}</div>
                    <div className="skill-category-stats">{categoryData.stats}</div>
                  </div>
                </div>
                
                <div className="skill-category-content">
                  {skills
                    .filter((skill) => skill.category === categoryData.category)
                    .map((skill, index) => (
                      <div key={index} className={`skill-item-${categoryData.accent}`}>
                        <div className="skill-item-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className={`skill-percentage-${categoryData.accent}`}>{skill.level}%</span>
                        </div>
                        <div className={`skill-progress-container-${categoryData.accent}`}>
                          <div
                            className={`skill-progress-fill-${categoryData.accent}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Unique visual element for each category */}
                {categoryData.category === "Mobile" && (
                  <div className="category-decoration mobile-decoration">
                    <div className="floating-element">📱</div>
                    <div className="floating-element">🚀</div>
                    <div className="floating-element">📱</div>
                  </div>
                )}
                
                {categoryData.category === "Tools" && (
                  <div className="category-decoration tools-decoration">
                    <div className="floating-element">🛠️</div>
                    <div className="floating-element">💻</div>
                    <div className="floating-element">🔨</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section with Modern Timeline */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-professional-dark opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text-professional">Work Experience</span>
            </h2>
            <p className="text-muted-foreground text-xl">My professional journey and achievements</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-16">
              {experience.map((exp, index) => (
                <div key={index} className={`experience-timeline-item animate-enhanced-slide-in-left animate-delay-${(index + 1) * 200}`}>
                  {/* Timeline Dot */}
                  <div className="timeline-dot hidden md:block"></div>
                  
                  {/* Experience Card */}
                  <div className={`experience-card ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-5/12`}>
                    <div className="experience-card-header">
                      <div className="experience-company-logo">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <div className="experience-badge">
                        <span className="experience-type">{exp.type}</span>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                    </div>
                    
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <Calendar className="h-5 w-5 text-accent" />
                      <span>{exp.company}</span>
                    </div>
                    
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="experience-achievements">
                      <h4 className="achievements-title">Key Achievements</h4>
                      <div className="achievements-grid">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="achievement-item">
                            <div className="achievement-icon">✓</div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section with Modern Cards */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient-bg opacity-20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text-professional">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground text-xl">A showcase of my recent work and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className={`enhanced-project-card animate-enhanced-scale-in animate-delay-${(index + 1) * 100}`}>
                <div className="project-card-header">
                  <div className="project-icon-container">
                    <div className="project-icon">
                      <Code className="h-7 w-7 text-white" />
                    </div>
                    <div className="project-status">Live</div>
                  </div>
                  <div className="project-stats">
                    <div className="project-stat">
                      <Star className="h-5 w-5" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="project-stat">
                      <GitBranch className="h-5 w-5" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    <h4 className="tech-stack-title">Tech Stack</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-actions">
                  <Button className="project-button-secondary">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button className="project-button-primary">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-professional-dark opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text-professional">Get In Touch</span>
            </h2>
            <p className="text-muted-foreground text-xl">Let's collaborate and build something amazing together</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-enhanced-slide-in-left">
              <div className="glassmorphism-card p-10 mb-10">
                <h3 className="text-3xl font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-5 text-muted-foreground hover:text-accent transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <span className="text-lg">+91-9179304139</span>
                  </div>
                  <div className="flex items-center gap-5 text-muted-foreground hover:text-accent transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <span className="text-lg">neelg1805@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-5 text-muted-foreground hover:text-accent transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <span className="text-lg">Village Samoda, Dist-Durg (C.G)</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <Button className="github-button px-8 py-4 text-lg">
                  <Github className="mr-3 h-6 w-6" />
                  GitHub
                </Button>
                <Button className="github-button-secondary px-8 py-4 text-lg">
                  <Linkedin className="mr-3 h-6 w-6" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div className="glassmorphism-card p-10 animate-enhanced-scale-in animate-delay-300">
              <h3 className="text-3xl font-bold text-foreground mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input-glassmorphism h-14 text-lg"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input-glassmorphism h-14 text-lg"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input-glassmorphism text-lg"
                  required
                />
                <Button type="submit" className="github-button w-full py-4 font-semibold text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 <span className="text-accent font-semibold">Neelam Gayakwad</span> - Built with passion and code
          </p>
        </div>
      </footer>
    </div>
  )
}