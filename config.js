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
            title: "CovidShield – Smart Safety Automation System",
            description: "An Android-based IoT system that automates COVID-19 safety protocols using computer vision and hardware integration. Performs real-time mask detection using TensorFlow Lite, triggers temperature checks via USB UART, and enables contactless sanitization and automated access control using a state-driven workflow.",
            technologies: ["Android (Kotlin)", "TensorFlow Lite", "CameraX", "USB UART", "Arduino", "Computer Vision"],
            link: "#"
        },
        {
            title: "Slave Android System – Real-time IoT Control Platform",
            description: "A modular Android-based remote device controller designed for real-time monitoring and hardware interaction. Integrates WebRTC for low-latency video streaming, Firebase for remote command/control, USB UART for microcontroller communication, and TensorFlow Lite for on-device vision processing. Runs as a foreground service enabling persistent, headless operation.",
            technologies: ["Android (Kotlin)", "WebRTC", "Firebase Realtime DB", "USB UART", "TensorFlow Lite", "Room DB"],
            link: "#"
        },
        {
            title: "Master NG Web – Remote Device Control Dashboard",
            description: "A web-based control panel built with Angular that manages and interacts with remote Android slave devices. Implements WebRTC for real-time video streaming and Firebase for signaling and device orchestration. Supports live device monitoring, joystick-based control, and bidirectional communication with hardware systems.",
            technologies: ["Angular", "WebRTC", "Firebase Realtime DB", "TypeScript", "SCSS"],
            link: "#"
        },
        
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