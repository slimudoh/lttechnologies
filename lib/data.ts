export const projects = [
  {
    title: "Live Learning Marketplace",
    category: "Web Application",
    description:
      "A modern live-learning platform connecting students with instructors through interactive online classes, payments, recordings and instructor management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Jitsi", "Stripe"],
    result:
      "A complete digital learning ecosystem for live and on-demand education.",
    image: "/images/work/tutorshub.jpg",
    featured: true,
  },
  {
    title: "Enterprise Management Platform",
    category: "Enterprise Software",
    description:
      "A secure enterprise platform designed to streamline business operations, approvals, workflows, reporting and user management.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Keycloak"],
    result:
      "Centralized workflows with improved visibility, security and operational efficiency.",
    image: "/images/work/enterprise-platform.jpg",
    featured: true,
  },
  {
    title: "Financial Services Platform",
    category: "FinTech",
    description:
      "A digital platform built to support financial operations, customer management, transactions and business reporting.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST API"],
    result:
      "A scalable foundation for managing financial products and digital operations.",
    image: "/images/work/fintech-platform.jpg",
    featured: false,
  },
  {
    title: "Business Website & Digital Experience",
    category: "Web Development",
    description:
      "A high-performance corporate website designed to communicate services, build trust and convert visitors into prospective clients.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    result:
      "A professional digital presence optimized for performance, SEO and conversion.",
    image: "/images/work/corporate-website.jpg",
    featured: false,
  },
  {
    title: "Customer Portal",
    category: "Web Application",
    description:
      "A secure self-service portal that gives customers access to their accounts, information, requests and important documents.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "JWT"],
    result:
      "Reduced manual processes while giving customers faster access to services.",
    image: "/images/work/customer-portal.jpg",
    featured: false,
  },
  {
    title: "Cloud & API Infrastructure",
    category: "Cloud & DevOps",
    description:
      "Modern backend and cloud infrastructure designed for reliable deployment, API integration, security and scalable application delivery.",
    technologies: ["Node.js", "Docker", "Cloudflare", "CI/CD"],
    result:
      "A more reliable and maintainable infrastructure for growing digital products.",
    image: "/images/work/cloud-infrastructure.jpg",
    featured: false,
  },
  {
    slug: "tutorshub",
    title: "TutorsHub",
    category: "EdTech Platform",
    shortDescription:
      "A live learning marketplace connecting students with instructors through interactive online classes.",
    description:
      "TutorsHub is a digital learning marketplace designed to make live education more accessible. The platform connects students with instructors and provides the infrastructure required to discover lessons, enroll, make payments, attend live classes and access recordings.",
    client: "TutorsHub",
    year: "2026",
    duration: "Product Development",
    services: [
      "Product Development",
      "Web Application Development",
      "Payment Integration",
      "Video Integration",
      "Cloud Infrastructure",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Jitsi",
      "Stripe",
      "Flutterwave",
      "Cloudflare",
    ],
    heroImage: "/images/work/tutorshub.jpg",
    screenshots: [
      {
        image: "/images/work/tutorshub-dashboard.jpg",
        title: "Learning Dashboard",
        description:
          "A centralized dashboard where users can manage their learning activities and upcoming sessions.",
      },
      {
        image: "/images/work/tutorshub-live-class.jpg",
        title: "Live Classes",
        description:
          "Integrated live video functionality allows instructors and students to participate in scheduled classes.",
      },
      {
        image: "/images/work/tutorshub-payments.jpg",
        title: "Payments",
        description:
          "Integrated payment infrastructure allows users to securely purchase access to paid learning sessions.",
      },
    ],
    challenge: [
      "Create a marketplace where students can discover and enroll in live lessons.",
      "Allow instructors to manage their lessons, schedules and students.",
      "Provide reliable live video sessions directly from the platform.",
      "Support online payments and different payment providers.",
      "Give enrolled students access to recordings after live sessions.",
    ],
    approach: [
      "We started by defining the core student and instructor journeys.",
      "The platform architecture was designed around separate frontend, backend and database responsibilities.",
      "Authentication and authorization were implemented to provide different experiences for students and instructors.",
      "Third-party services were integrated where they provided strong value without unnecessarily increasing development complexity.",
    ],
    solution: [
      "Responsive web application built with Next.js and React.",
      "Node.js and Express backend supporting the platform APIs.",
      "PostgreSQL database for structured application data.",
      "Jitsi integration for live classes.",
      "Stripe and Flutterwave integrations for payments.",
      "Cloud storage and CDN infrastructure for digital assets.",
      "Instructor approval and student enrollment workflows.",
    ],
    results: [
      "A complete live-learning marketplace.",
      "Centralized student and instructor workflows.",
      "Integrated live video learning experience.",
      "Online payment infrastructure.",
      "Recording access for enrolled students.",
      "Scalable foundation for future platform growth.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const blogPosts = [
  {
    slug: "how-businesses-can-use-ai",
    title: "How Businesses Can Start Using AI to Work Smarter",
    excerpt:
      "Discover practical ways businesses can use artificial intelligence to automate repetitive tasks, improve customer experiences, and make better decisions.",
    category: "AI & Automation",
    author: "LT Technologies",
    date: "2026-08-10",
    readTime: "7 min read",
    thumbnail: "/images/insights/how-businesses-can-use-ai.jpg",
    tags: ["AI", "Automation", "Business"],
    content: `
      <p>Artificial Intelligence (AI) is no longer just a buzzword — it's a powerful tool that businesses across all industries are leveraging to gain a competitive edge. From automating routine tasks to providing deep insights from data, AI is transforming how companies operate.</p>
      
      <h2>Start Small, Think Big</h2>
      <p>Implementing AI doesn't require a complete overhaul of your systems. Begin with specific use cases where AI can deliver immediate value:</p>
      
      <ul>
        <li><strong>Chatbots:</strong> Automate customer service inquiries and free up human agents for complex issues.</li>
        <li><strong>Data Analysis:</strong> Use AI-powered tools to analyze sales trends, customer behavior, and operational data.</li>
        <li><strong>Process Automation:</strong> Implement robotic process automation (RPA) for repetitive tasks like invoice processing or data entry.</li>
      </ul>
      
      <h2>Invest in the Right Tools</h2>
      <p>The market is flooded with AI solutions. Choose platforms that integrate well with your existing software stack and offer scalability as your business grows.</p>
      
      <blockquote>
        "The best AI strategies are those that align with your business goals and enhance human capabilities, not replace them."
      </blockquote>
      
      <h2>Prepare Your Team</h2>
      <p>Change management is crucial. Train your employees on how to work alongside AI tools and emphasize that AI is meant to augment human skills, not eliminate jobs.</p>
      
      <p>By taking a strategic approach to AI adoption, businesses can unlock new efficiencies, reduce costs, and create more personalized customer experiences — all while staying ahead of the competition.</p>
    `,
  },

  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs Off-the-Shelf Software",
    excerpt:
      "Should your business build custom software or use an existing solution? Here's how to decide.",
    category: "Business Technology",
    author: "LT Technologies",
    date: "2026-08-05",
    readTime: "8 min read",
    thumbnail: "/images/insights/custom-software.jpg",
    tags: ["Software", "Business", "Technology"],
    content: `
      <p>Whether you're building a custom software solution or using an off-the-shelf (OTS) solution, there are several factors to consider when deciding which approach to take.</p>
      
      <h2>Custom Software vs OTS</h2>
      <p>Custom software refers to software that is developed by your company. This can include everything from custom-built applications to custom-built hardware. Custom software is often tailored to your specific business needs and can be expensive to develop.</p>
      
      <p>On the other hand, OTS solutions are software that is developed by a third-party vendor. These solutions are often more affordable and can be customized to meet your specific needs. However, they may lack the features and functionality that your company needs.</p>
      
      <h2>Cost of Development</h2>
      <p>The cost of developing custom software can vary widely depending on the complexity of the project and the skills of the development team. In some cases, custom software can be more expensive than OTS solutions, especially if the software is complex and requires specialized expertise.</p>
      
      <h2>Scalability</h2>      
      <p>When developing custom software, it's important to consider scalability. This means designing your software to be able to handle increased demand without sacrificing performance or functionality. OTS solutions may be more scalable than custom software, but they may also be more expensive to maintain and upgrade.</p>
      
      <h2>Integration</h2>
      <p>Custom software often requires integration with existing systems and databases. This can be a challenge, especially if the integration requires significant customization. OTS solutions may be more flexible and easier to integrate with existing systems, but they may also be more expensive to develop.</p>
      
      <h2>Maintenance and Upgrades</h2>
      <p>When developing custom software, it's important to consider the maintenance and upgrades that will be required over time. This includes bug fixes, security patches, and feature enhancements. OTS solutions may be more difficult to maintain and upgrade, but they may also be more cost-effective in the long run.</p>
      
      <h2>Conclusion</h2>
      <p>When deciding whether to develop custom software or use an OTS solution, it's important to consider the specific needs of your business and the trade-offs involved. By weighing the costs and benefits of each approach, you can make an informed decision that will help you achieve your business goals.</p>
    `,
  },

  {
    slug: "how-much-does-a-web-application-cost",
    title: "How Much Does It Cost to Build a Web Application?",
    excerpt:
      "A practical breakdown of the factors that determine the cost of developing a modern web application.",
    category: "Software Development",
    author: "LT Technologies",
    date: "2026-08-01",
    readTime: "9 min read",
    thumbnail: "/images/insights/web-application-cost.jpg",
    tags: ["Web Development", "Cost", "Software"],
    content: `
      <p>When it comes to building a modern web application, there are several factors to consider when determining the cost of development.</p>
      
      <h2>Development Time</h2>
      <p>The time it takes to develop a web application can vary widely depending on the complexity of the project and the skills of the development team. In some cases, developing a web application can take several months or even years, while in other cases, it may be completed in a matter of weeks or days.</p>
      
      <h2>Technology Stack</h2>
      <p>The technology stack used to build a web application can also impact the cost of development. For example, if a web application is built using a front-end framework like React or Angular, it may be more expensive to develop compared to a back-end framework like Node.js or Django.</p>
      
      <h2>Customization</h2>
      <p>Customization is another important factor to consider when determining the cost of development. If a web application is highly customized to meet the specific needs of your business, it may be more expensive to develop compared to a more general-purpose solution.</p>
      
      <h2>Scalability</h2>
      <p>Scalability is also an important consideration when developing a web application. If a web application is designed to handle increased demand without sacrificing performance or functionality, it may be more expensive to develop compared to a more scalable solution.</p>
      
      <h2>Maintenance and Upgrades</h2>      
      <p>When developing a web application, it's important to consider the maintenance and upgrades that will be required over time. This includes bug fixes, security patches, and feature enhancements. If a web application is highly customized and requires frequent maintenance and upgrades, it may be more expensive to develop compared to a more general-purpose solution.</p>
      
      <h2>Conclusion</h2>
      <p>When deciding whether to develop a web application or use an off-the-shelf (OTS) solution, it's important to consider the specific needs of your business and the trade-offs involved. By weighing the costs and benefits of each approach, you can make an informed decision that will help you achieve your business goals.</p>
    `,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts() {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPostsByCategory(category: string) {
  return blogPosts.filter((post) => post.category === category);
}
