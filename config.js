// Portfolio Configuration
// Modify this file to customize your portfolio

const portfolioConfig = {
    // Personal Information
    name: "Senthamizhan M",
    profession: "Full Stack Engineer | Java Backend | IoT & Real-time Systems",
    
    // Skills Section
    skills: [
        {
            category: "Frontend",
            items: ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS", "JSP", "JSF"]
        },
        {
            category: "Backend",
            items: ["Java", "Spring", "Spring Boot", "REST APIs", "SOAP APIs", "Microservices", "Hibernate", "JPA", "JDBC", "MyBatis"]
        },
        {
            category: "Testing & Quality",
            items: ["Cucumber", "Gherkin (BDD)", "Postman", "SOAP UI", "SonarQube"]
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS (EC2, S3, RDS, ECS)", "Docker", "Jenkins"]
        },
        {
            category: "Tools & Systems",
            items: ["GitHub", "ServiceNow", "Linux"]
        }
    ],
    
    // Experience Section
    experience: [
        {
            role: "Software Engineer",
            company: "Synechron Technologies",
            period: "Oct 2024 – Present",
            description: [
                "Working on core banking and regulatory systems integrated with SAMA (Saudi Central Bank)",
                "Handled incident management, feature development, and application support in Agile environment",
                "Implemented vulnerability remediation using SAST/DAST tools (Fortify, Nexus IQ)",
                "Automated API testing using Gherkin (BDD) to improve regression coverage",
                "Automated operational workflows via API integrations to improve efficiency",
                "Supported application migration and stabilization activities",
                "Collaborated across teams and managed JIRA workflows",
                "Traveled onsite to Bahrain for knowledge transfer and system transition"
            ]
        },
        {
            role: "Software Engineer",
            company: "Capgemini",
            period: "Jun 2021 – Oct 2024",
            description: [
                "Built and maintained scalable backend services using Java and Spring Boot for financial applications",
                "Developed full-stack features using Angular and REST/SOAP APIs",
                "Migrated applications from on-premise infrastructure to AWS (EC2, S3, RDS, ECS)",
                "Improved performance through SQL optimization and system tuning",
                "Implemented security measures including SAST/DAST and data protection (encryption)",
                "Handled production incidents ensuring high system availability",
                "Led tech stack migration from legacy Java frameworks to Spring Boot + Angular",
                "Migrated legacy browser applications to modern environments (Chrome support)"
            ]
        }
    ],
    
    // Featured Projects Section
    projects: [
        {
            title: "Project 1",
            description: "A brief description of your hobby project. What problem does it solve? What did you learn?",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "#"
        },
        {
            title: "Project 2",
            description: "Another interesting side project showcasing your creativity and technical skills.",
            technologies: ["React", "Node.js"],
            link: "#"
        },
        {
            title: "Project 3",
            description: "Describe your third project and the technologies you used to build it.",
            technologies: ["Python", "API"],
            link: "#"
        }
    ],
    
    // Contact Information
    contact: {
        email: "senthamiz13.98@gmail.com",
        github: "https://github.com/yourprofile",
        linkedin: "https://linkedin.com/in/senthamiz",
        twitter: "https://twitter.com/yourprofile"
    },
    
    // Footer
    year: new Date().getFullYear()
};