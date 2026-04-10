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
            category: "Mobile & IoT",
            items: ["Android (Kotlin)", "USB UART", "Arduino Integration", "Embedded Communication"]
        },
        {
            category: "Real-time & Systems",
            items: ["WebRTC", "Firebase Realtime Database", "Distributed Systems", "State Machine Design"]
        },
        {
            category: "AI / Computer Vision",
            items: ["TensorFlow Lite", "CameraX", "On-device ML Inference"]
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
            role: "Techonology Associate - Java Full Stack Developer",
            company: "Synechron Technologies",
            period: "Oct 2024 - Present",
            description: [
                "Developing and maintaining core banking and regulatory systems with a focus on secure and scalable backend services",
                "Implemented vulnerability remediation using SAST and DAST tools (Fortify, Nexus IQ) to address critical security issues",
                "Designed and executed API automation testing using Gherkin (BDD), improving regression coverage and reducing manual effort",
                "Automated operational workflows through API integrations, enhancing system efficiency and reducing turnaround time",
                "Handled incident management, root cause analysis, and production support in an Agile environment",
                "Contributed to application migration, validation, and post-migration stabilization activities",
                "Collaborated with cross-functional teams to deliver reliable and maintainable software solutions"
            ]
        },
        {
            role: "Associate Consultant - Full Stack Developer & Operations",
            company: "Capgemini",
            period: "Jun 2021 - Oct 2024",
            description: [
                "Developed and maintained scalable backend services using Java and Spring Boot for enterprise financial applications",
                "Built full-stack features using Angular and integrated REST and SOAP APIs",
                "Led migration of applications from on-premise infrastructure to AWS (EC2, S3, RDS, ECS)",
                "Optimized application performance through SQL tuning, code profiling, and system improvements",
                "Implemented security practices including vulnerability management (SAST/DAST) and data protection mechanisms",
                "Managed production incidents to ensure high availability and system reliability",
                "Led migration from legacy Java frameworks to modern architecture using Spring Boot and Angular",
                "Enhanced compatibility and maintainability by modernizing legacy applications"
            ]
        }
    ],

    // Featured Projects Section
    projects: [
        {
            title: "CovidShield - Smart Safety Automation System",
            description: "An Android-based IoT system that automates COVID-19 safety protocols using computer vision and hardware integration. Performs real-time mask detection using TensorFlow Lite, triggers temperature checks via USB UART, and enables contactless sanitization and automated access control using a state-driven workflow.",
            technologies: ["Android (Kotlin)", "TensorFlow Lite", "CameraX", "USB UART", "Arduino", "Computer Vision"],
            link: "https://github.com/Senthamiz13/CovidShield.git"
        },
        {
            title: "Slave Android System - Real-time IoT Control Platform",
            description: "A modular Android-based remote device controller designed for real-time monitoring and hardware interaction. Integrates WebRTC for low-latency video streaming, Firebase for remote command/control, USB UART for microcontroller communication, and TensorFlow Lite for on-device vision processing. Runs as a foreground service enabling persistent, headless operation.",
            technologies: ["Android (Kotlin)", "WebRTC", "Firebase Realtime DB", "USB UART", "TensorFlow Lite", "Room DB"],
            link: "https://github.com/Senthamiz13/Slave.git"
        },
        {
            title: "Master NG Web - Remote Device Control Dashboard",
            description: "A web-based control panel built with Angular that manages and interacts with remote Android slave devices. Implements WebRTC for real-time video streaming and Firebase for signaling and device orchestration. Supports live device monitoring, joystick-based control, and bidirectional communication with hardware systems.",
            technologies: ["Angular", "WebRTC", "Firebase Realtime DB", "TypeScript", "SCSS"],
            link: "https://hv-app-199a9.web.app"
        }
    ],

    // Contact Information
    contact: {
        email: "senthamiz13.98@gmail.com",
        github: "https://github.com/Senthamiz13",
        linkedin: "https://linkedin.com/in/senthamiz",
    },

    // Footer
    year: new Date().getFullYear()
};