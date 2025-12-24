// Importing Testgorilla Porfolio images
import testGorillaImage from "./assets/projects/testGorillaProjectImage.png";
import testgorillaProblemImage from "./assets/projectsImage/Testgorilla/testgorillaProblemImage.png";
import roleCollabImg1 from "./assets/projectsImage/Testgorilla/roleCollabImg1.png";
import roleCollabImg2 from "./assets/projectsImage/Testgorilla/roleCollabImg2.png";
import roleCollabImg3 from "./assets/projectsImage/Testgorilla/roleCollabImg3.png";
import earlyConceptDevelopment from "./assets/projectsImage/Testgorilla/earlyConceptDevelopment.png";
import qualitativeResearch from "./assets/projectsImage/Testgorilla/qualitativeResearch.png";
import quantitativeResearch1 from "./assets/projectsImage/Testgorilla/quantitativeResearch1.png";
import quantitativeResearch2 from "./assets/projectsImage/Testgorilla/quantitativeResearch2.png";
import quantitativeResearch3 from "./assets/projectsImage/Testgorilla/quantitativeResearch3.png";
import finalDesignSystem1 from "./assets/projectsImage/Testgorilla/finalDesignSystem1.png";
import finalDesignSystem2 from "./assets/projectsImage/Testgorilla/finalDesignSystem2.png";
import finalDesignSystem3 from "./assets/projectsImage/Testgorilla/finalDesignSystem3.png";

// Importing Secfix Porfolio images
import secfixOverviewImage from "./assets/projectsImage/Secfix/secfixOverviewImage.png";
import accessManagement1 from "./assets/projectsImage/Secfix/accessManagement1.png";
import accessManagement2 from "./assets/projectsImage/Secfix/accessManagement2.png";
import accessManagement3 from "./assets/projectsImage/Secfix/accessManagement3.png";
import finalDesignSecfix1 from "./assets/projectsImage/Secfix/finalDesignSecfix1.png";
import finalDesignSecfix2 from "./assets/projectsImage/Secfix/finalDesignSecfix2.png";
import finalDesignSecfix3 from "./assets/projectsImage/Secfix/finalDesignSecfix3.png";
import finalDesignSecfix4 from "./assets/projectsImage/Secfix/finalDesignSecfix4.png";

// Importing FutureX Porfolio images
import coverImageFutureX from "./assets/projectsImage/FutureX/coverImageFutureX.png";
import overviewImage1 from "./assets/projectsImage/FutureX/overviewImage1.png";
import overviewImage2 from "./assets/projectsImage/FutureX/overviewImage2.png";
import FutureXProblemImage from "./assets/projectsImage/FutureX/FutureXProblemImage.png";
import futureXInformationArchitecture1 from "./assets/projectsImage/image 24.png";
import futureXInformationArchitecture2 from "./assets/projectsImage/image 25.png";
import futureXWireframes1 from "./assets/projectsImage/image 26.png";
import futureXWireframes2 from "./assets/projectsImage/image 27.png";
import futureXWireframes3 from "./assets/projectsImage/image 28.png";

// Importing Jettify Porfolio images
import researchProcess1 from "./assets/projectsImage/Jettify/researchProcess1.png";
import researchProcess2 from "./assets/projectsImage/Jettify/researchProcess2.png";
import jettifyInformationArchitecture from "./assets/projectsImage/Jettify/jettifyInformationArchitecture.png";
import jettifyWireframes1 from "./assets/projectsImage/Jettify/jettifyWireframes1.png";
import jettifyWireframes2 from "./assets/projectsImage/Jettify/jettifyWireframes2.png";
import jettifyWireframes3 from "./assets/projectsImage/Jettify/jettifyWireframes3.png";

// Importing Zennor Porfolio images
import zennorCoverImage from "./assets/projectsImage/Zennor/zennorCoverImage.png";
import businessResearch1 from "./assets/projectsImage/Zennor/businessResearch1.png";
import businessResearch2 from "./assets/projectsImage/Zennor/businessResearch2.png";
import wireframe1 from "./assets/projectsImage/Zennor/wireframe1.jpg";
import wireframe2 from "./assets/projectsImage/Zennor/wireframe2.jpg";
import wireframe3 from "./assets/projectsImage/Zennor/wireframe3.png";
import wireframe4 from "./assets/projectsImage/Zennor/wireframe4.jpg";
import wireframe5 from "./assets/projectsImage/Zennor/wireframe5.jpg";

import secfixImage from "./assets/projects/secfixProjectImage.png";
import futurexImage from "./assets/projects/futurexProjectImage.png";
import jettifyImage from "./assets/projects/jettifyProjectImage.png";
import zennorImage from "./assets/projects/zennorProjectImage.png";

const projects = [
  {
    id: 1,
    projectName: "TestGorilla",
    path: "testgorilla",
    img: testGorillaImage,
    description:
      "Redesigning Talent Cards for a Skills-Based Sourcing Experience",
    role: [
      {
        title: "Product Designer",
        color: "#42FFB7", //green
      },
    ],
    theme: [
      {
        title: "saas",
        color: "#FFF0C1", //cream
      },
      {
        title: "Sourcing",
        color: "#9EE5FF", //light blue
      },
      {
        title: "HR Tech",
        color: "#FFB05F", //brown
      },
      {
        title: "Redesign",
        color: "#FFB05F",
      },
    ],
    tools: [
      {
        title: "Figma",
        color: "#F0BFFF", //purple
      },
      {
        title: "maze",
        color: "#9EE5FF", //light blue
      },
      {
        title: "Google meet",
        color: "#FFB05F", //brown
      },
      {
        title: "dovetail",
        color: "#FFF0C1",
      },
    ],
    research: [
      {
        title: "interviews",
        color: "#42FFB7",
      },
      {
        title: "Prototyping",
        color: "#F0BFFF",
      },
      {
        title: "Usability Testing",
        color: "#9EE5FF",
      },
    ],
    timeline: [
      {
        title: "3 weeks",
        color: "#FFF0C1",
      },
    ],
    overview: {
      title: "Overview",
      body: [
        "Talent Cards are central to how TestGorilla customers review and invite candidates. Over time, the existing design became difficult to scan, visually unbalanced, and failed to support our core value: skills-based, bias-minimized candidate evaluation",
        "I led a three-week research and design initiative to reimagine this experience. The result: a redesigned Talent Card system grounded in user insights, validated through qualitative and quantitative research, and aligned with technical and brand direction. Within three months of launch, the redesign drove measurable improvements in user engagement and invite conversion.",
      ],
      img: [testGorillaImage],
    },
    problem: {
      headingTitle: "Contect & Problem",
      bodyText: {
        paragraphBody: [
          "Through initial audits, stakeholder discussions, and research synthesis, several issues became clear:",
        ],
        listBody: [
          "Skills—our strongest differentiator—were not visually or structurally prioritized.",
          "Cards felt impersonal and visually cluttered, reducing clarity.",
          "Recruiters struggled to distinguish between candidates with similar test scores.",
          "Key decision-supporting details (salary expectations, location preference, work format) were difficult to access.",
          "The UI did not align with familiar mental models found in other sourcing platforms.",
          "Tension remained between humanizing the experience and preserving fairness.",
        ],
      },
      bodyImg: [testgorillaProblemImage],
      quote: {
        quoteBody:
          "The current Talent Cards feel impersonal and messy, displaying only scores and test results… We want to explore a middle ground where profiles feel more human without introducing bias.",
      },
      quoteTitle: "- VP Product, TestGorilla.",
    },
    roleCollab: {
      headingTitle: "My Role & Collaboration Model",
      bodyText: {
        paragraphBody: [
          "I led the design and research process in close partnership with:",
          "I kept teams aligned through regular Slack updates, design reviews, and documentation.",
        ],
        listBody: [
          "Product Manager— scope, priority, and alignment",
          "UX Researcher — research planning, recruitment, and co-synthesis",
          "Rest of the UX Team — exploration, critique, and collaborative ideation",
          "Engineering Manager — feasibility, data constraints, and implementation considerations",
          "Marketing Designer — avatar system exploration",
          "Leadership (ExCo) — final review and signoff",
        ],
      },
      bodyImg: [roleCollabImg1, roleCollabImg2, roleCollabImg3],
      quote: {
        quoteBody:
          "The current Talent Cards feel impersonal and messy, displaying only scores and test results… We want to explore a middle ground where profiles feel more human without introducing bias.",
      },
      quoteTitle: "- VP Product, TestGorilla.",
    },
    researchFoundation: {
      headingTitle: "Research Foundations",
      bodyText: {
        paragraphBody: [
          "Before exploring solutions, I consolidated existing research on candidate evaluation, trust signals, and customer decision-making. Key patterns emerged:",
        ],
        listBody: [
          "Verified skills carry the most decision weight",
          "Contextual experience increases trust",
          "Salary, location, and work preference signals significantly influence decisions",
          "Self-declared skills matter only when tied to experience",
          "Personality summaries have low influence on invite decisions",
        ],
      },
      quote: {
        quoteBody: "Recruiters prioritize clarity, credibility, and relevance.",
      },
      hierachy: {
        title: "The UI should reflect this hierarchy:",
        body: ["Verified Skills", "↓", "Essential Metadata", "↓", "Experience Context", "↓", "Optional Signals"],
      },
    },
    conceptDevelopment: {
      headingTitle: "Exploration & Early Concept Development",
      bodyText: {
        paragraphBody: [
          "I explored a range of concepts focusing on:",
          "Engineering feasibility reviews helped narrow concepts that required disproportionate effort relative to value. Marketing Design provided several avatar system directions. Early options were visually engaging but competed with skill bars and CTAs, prompting further refinement.",
        ],
        listBody: [
          "Horizontal vs. vertical layouts",
          "Skill bar visualizations",
          "Metadata grouping",
          "Avatar vs. profile picture variants",
          "Anonymization methods",
          "Progressive disclosure patterns",
          "Information architecture improvements",
        ],
      },
      bodyImg: [earlyConceptDevelopment],
    },
    qualitativeResearch: {
      headingTitle: "Qualitative Research (Customer Interviews)",
      bodyText: {
        paragraphBody: [
          "We conducted six in-depth interviews with recruiters and hiring managers. Feedback was consistent:",
        ],
        listBody: [
          {
            heading: "Orientation",
            list: [
              "Universal preference for horizontal cards",
              "Vertical cards increased cognitive load",
            ],
          },
          {
            heading: "Information Hierarchy",
            list: [
              "Verified skills",
              "Salary, location, work format",
              "Work experience",
              "Self-declared skills (only with context)",
              "Personality summary",
            ],
          },
          {
            heading: "Humanization",
            list: [
              "Avatars acceptable; photos preferred emotionally",
              "Photos did not objectively improve decision accuracy",
              "Partial name anonymization perceived as untrustworthy",
            ],
          },
        ],
      },
      quote: {
        quoteBody:
          "If you're not going to show the name, then don't show it at all.",
      },
      bodyImg: [qualitativeResearch],
    },
    quantitativeResearch: {
      headingTitle: "Quantitative Research (Maze Study)",
      bodyText: {
        paragraphBody: [
          "We validated qualitative insights with two Maze studies (100 participants total). Results were clear:",
          "This alignment between qualitative and quantitative data strengthened our confidence.",
        ],
        listBody: [
          {
            list: [
              "Photos vs. avatars: No impact on invite decisions",
              'Card title: "Last work experience" strongly preferred',
              "Self-declared skills vs. personality summary: Self-declared skills performed better",
            ],
          },
        ],
      },
      bodyImg: [
        quantitativeResearch1,
        quantitativeResearch2,
        quantitativeResearch3,
      ],
    },
    finalDesignSystem: {
      headingTitle: "Final Design System",
      bodyText: {
        listBody: [
          {
            heading: "Default talent card",
            list: [
              "Horizontal structure",
              "Neutral avatar system",
              "Verified skills as the visual anchor",
              "Clear metadata (salary, location, role preference)",
              "Invite CTA secondary to skills",
            ],
          },
          {
            heading: "Expanded Talent Card",
            list: [
              "Work experience timeline",
              "Full verified and self-declared skills breakdown",
              "Optional personality summary",
            ],
          },
        ],
      },
      bodyImg: [finalDesignSystem1, finalDesignSystem2, finalDesignSystem3],
    },
    finalImpact: {
      headingTitle: "Impact (First 90 Days Post-Launch)",
      bodyText: {
        paragraphBody: [
          "These results validated the clarity-driven, skills-first design approach.",
        ],
        listBody: [
          {
            heading: "1. FASTER DECISIONS",
            list: [
              "23% reduction in candidate cards viewed before sending an invite",
            ],
          },
          {
            heading: "2. higher engagement",
            list: ["35% increase in invites sent"],
          },
          {
            heading: "3. MORE SEARCH ACTIVITY",
            list: ["24.4% increase in searches performed"],
          },
        ],
      },
    },
    reflections: {
      headingTitle: "Reflections",
      bodyText: {
        paragraphBody: ["This project reinforced several core lessons:"],
        listBody: [
          {
            list: [
              "Mixed-method research produces more reliable product direction",
              "Ethical design requires deliberate choices (e.g., defaulting to avatars)",
              "Hierarchy is a strategic asset, not just a visual one",
              "Cross-functional alignment accelerates execution",
              "Senior design leadership requires clear communication and rationale",
            ],
          },
        ],
      },
    },
    conclusion: {
      headingTitle: "Conclusion",
      bodyText: {
        paragraphBody: [
          "The Talent Card redesign significantly improved clarity, fairness, and decision-making efficiency across the Sourcing experience. By grounding decisions in research, collaborating across disciplines, and prioritizing skills as the central differentiator, the new design created a more intuitive and trustworthy evaluation experience—and demonstrated measurable impact shortly after launch.",
        ],
      },
    },
  },
  {
    id: 2,
    projectName: "Secfix",
    path: "secfix",
    img: secfixImage,
    description:
      "Automating Cybersecurity Compliance (Access Management Redesign)",
    role: [
      {
        title: "UX Researcher",
        color: "#42FFB7", //green
      },
      {
        title: "UI Designer",
        color: "#FFF0C1",
      },
      {
        title: "UX Designer",
        color: "#F0BFFF",
      },
    ],
    theme: [
      {
        title: "saas",
        color: "#FFF0C1", //cream
      },
      {
        title: "Compliance",
        color: "#9EE5FF", //light blue
      },
      {
        title: "B2B",
        color: "#9EE5FF",
      },
      {
        title: "Cybersecurity",
        color: "#FFB05F",
      },
    ],
    tools: [
      {
        title: "Figma",
        color: "#F0BFFF", //purple
      },
      {
        title: "Google meet",
        color: "#FFB05F", //brown
      },
    ],
    research: [
      {
        title: "interviews",
        color: "#42FFB7",
      },
      {
        title: "Prototyping",
        color: "#F0BFFF",
      },
      {
        title: "Contextual inquiry",
        color: "#9EE5FF",
      },
      {
        title: "Usability Testing",
        color: "#9EE5FF",
      },
    ],
    overview: {
      title: "Overview",
      body: [
        "Secfix is a cybersecurity compliance platform that automates workflows for achieving and maintaining certifications like ISO 27001, SOC 2, and GDPR. Compliance traditionally requires extensive manual work, lengthy audit preparation, and constant cross-departmental coordination.",
        "I was the Founding Product Designer, working alongside a UX researcher, CTO, developers, and sales/marketing teams.",
      ],
      img: [secfixOverviewImage],
    },
    problem: {
      headingTitle: "The Core Problem",
      bodyText: {
        paragraphBody: [
          "Organizations struggle to stay compliant due to:",
          "Secfix aimed to automate these processes and help companies reduce certification timelines from 4–6 months to 3–5 weeks.",
        ],
        listBody: [
          " Manual evidence gathering",
          "Limited visibility into user access across systems",
          "Long onboarding cycles",
          "Inconsistent access reviews",
          "Difficulty generating audit-ready reports",
        ],
      },
    },
    roleCollab: {
      headingTitle: "Access Management: The Key Feature",
      bodyText: {
        paragraphBody: [
          "Access Management ensures companies maintain proper system permissions across all tools, vendors, and users—a critical compliance requirement.",
          "The goal was to design a feature that:",
        ],
        listBody: [
          "Monitors user access across all connected tools",
          "Surfaces risks from misconfigured permissions",
          "Supports quarterly access reviews",
          "Generates audit-ready evidence",
          "Aligns fully with compliance workflows",
        ],
      },
      bodyImg: [accessManagement1, accessManagement2, accessManagement3],
    },
    initialApproach: {
      headingTitle: "The Initial Approach—And Why It Failed",
      bodyText: {
        paragraphBody: [
          "To move quickly, the first iteration of Access Management was designed primarily through competitor analysis (Vanta, Drata). This gave us a baseline for:",
          "However, usability testing revealed a critical issue. Customers said:",
        ],
        listBody: [
          " Navigation",
          "Access list structure",
          "Filtering",
          "Review flows",
        ],
      },
      quote: {
        quoteBody:
          "This doesn't match how we perform access reviews internally.",
      },
      keyMisalignments: {
        heading: "key misalignments",
        listBody: [
          "The workflow didn't match compliance audit processes",
          "Terminology and steps didn't reflect how organizations manage access",
          "The structure was tool-centric rather than role or responsibility centric",
          "Review flows lacked the nuance compliance personnel needed",
        ],
      },
      endingText: "This led us back to the drawing board RESEARCH.",
    },
    researchPivot: {
      headingTitle: "The Research Pivot",
      bodyText: [
        {
          heading: "Step 1—Internal Expert Interview",
          body: "I met with Secfix's cybersecurity expert to understand:",
          listBody: [
            "How access reviews are evaluated in ISO 27001/SOC 2",
            "Auditor expectations",
            "Evidence structures",
            "Role-based access policies",
          ],
        },
        {
          heading: "Step 2—Customer Research (5 Interviews)",
          body: "I interviewed 5 customers in compliance roles to discuss:",
          listBody: [
            "Their current manual access review workflows",
            "Tools used (Sheets, HRIS, SSO dashboards)",
            "Review frequency and triggers",
            "Common pain points and risks",
          ],
        },
        {
          heading: "Step 3—Journey Mapping the Manual Process",
          body: "I created a manual Access Review Journey Map to visualize the process. The steps involved are:",
          listBody: [
            "→ Quarterly audit cycle begins",
            "→ Export user lists from tools",
            "→ Match employees to departments",
            "→ Verify role-based permissions",
            "→ Flag inconsistencies",
            "→ Request updates from IT",
            "→ Approve or deny access",
            "→ Compile evidence for auditors",
            "→ Submit",
          ],
        },
      ],
      painPoints: {
        heading: "Pain points identified",
        listBody: [
          "Manual exports were tedious",
          "Tools didn't match HR systems",
          "No centralized view across applications",
          "Communication gaps caused delays",
          "Audit evidence was often incomplete",
        ],
      },
    },
    finalDesignSystem: {
      headingTitle: "Redesigning Access Management",
      bodyText: {
        listBody: [
          {
            heading: "key UI ENHANCEMENTS",
            list: [
              "Clear separation between monitoring and reviewing",
              "A new dual-tab structure",
              "Role-aware filtering",
              "Department-level grouping",
              "Consistent visual indicators (✓ status, MFA flags, missing evidence)",
              "Human-readable explanations for non-compliance",
              "Empty states guiding next steps",
            ],
          },
        ],
      },
      bodyImg: [
        finalDesignSecfix1,
        finalDesignSecfix2,
        finalDesignSecfix3,
        finalDesignSecfix4,
      ],
    },
    usabilityTesting: {
      headingTitle: "Usability Testing Results",
      bodyText: {
        paragraphBody: [
          "After presenting the redesigned flow to users:",
          "One of the users specifically mentioned:",
        ],
        listBody: [
          "They immediately understood the workflow",
          "It matched their mental model of compliance work",
          "Review time dropped significantly",
          "Compliance personnel asked fewer clarifying questions",
        ],
      },
      quote: {
        quoteBody: "This finally feels like how we handle reviews internally.",
      },
    },
    finalImpact: {
      headingTitle: "Impact on the Secfix Product",
      bodyText: {
        paragraphBody: [
          "Though Access Management was one feature, it drove significant product wins:",
        ],
        listBody: [
          {
            list: [
              "Employee onboarding time cut from 6 hours to 2 hours",
              "Clearer compliance workflows improved audit readiness",
              "Higher customer satisfaction and increased product trust",
            ],
          },
        ],
      },
    },
    reflections: {
      headingTitle: "Key Learnings",
      bodyText: {
        listBody: [
          {
            list: [
              "Mental models matter more than copying competitors",
              "Compliance workflows are deeply process-driven",
              "Users prefer clarity over visual complexity",
              "Internal expert knowledge is critical",
              "Research pivots prevent costly misalignment",
            ],
          },
        ],
      },
    },
    conclusion: {
      headingTitle: "Conclusion",
      bodyText: {
        paragraphBody: [
          "The redesign of Access Management aligned the feature with real-world compliance practices. By grounding the UX in research and domain expertise, the final solution improved usability, increased customer satisfaction, and strengthened Secfix's core value: simplifying cybersecurity compliance.",
        ],
      },
    },
  },
  {
    id: 3,
    projectName: "FutureX",
    path: "futurex",
    img: futurexImage,
    description:
      "A learning & education management system to cater for the needs & flaws of the traditional education system",
    role: [
      {
        title: "UX Researcher",
        color: "#42FFB7", //green
      },
      {
        title: "Information Architect",
        color: "#9EE5FF", //light blue
      },
      {
        title: "UI Designer",
        color: "#FFF0C1",
      },
      {
        title: "UX Designer",
        color: "#F0BFFF",
      },
    ],
    theme: [
      {
        title: "Education",
        color: "#FFF0C1", //cream
      },
      {
        title: "Vuejs",
        color: "#FFB05F", // brown
      },
      {
        title: "Web application",
        color: "#9EE5FF",
      },
    ],
    tools: [
      {
        title: "Figma",
        color: "#F0BFFF", //purple
      },
      {
        title: "Abobe XD",
        color: "#9EE5FF",
      },
      {
        title: "Google Docs",
        color: "#FFB05F", //brown
      },
      {
        title: "Whimsical",
        color: "#FFF0C1",
      },
    ],
    research: [
      {
        title: "interviews",
        color: "#42FFB7",
      },
      {
        title: "Prototyping",
        color: "#F0BFFF",
      },
      {
        title: "Usability Testing",
        color: "#9EE5FF",
      },
      {
        title: "Wireframing",
        color: "#FFF0C1",
      },
      {
        title: "Contextual inquiry",
        color: "#FFB05F",
      },
    ],
    timeline: [
      {
        title: "3 months",
        color: "#FFF0C1",
      },
    ],
    coverImage: coverImageFutureX,
    overview: {
      title: "Overview",
      body: [
        "The entire project lasted a period of about 3 months and is broken down into 5 phases (Discovery, Problem Definition, Design, Testing & Iteration, Handoff). However, the reality was there were back and forth's between these phases as the entire development process was in an agile environment.",
        "I was the sole designer for this project working alongside 3 software developers and a project manager. I designed the website and the web application catering for responsiveness in mobile and tablet views.",
      ],
      img: [overviewImage2, overviewImage1],
    },
    problem: {
      headingTitle: "Problem Statement",
      bodyText: {
        paragraphTitle:
          "RESHAPING THE TRADITIONAL SYSTEM OF LEARNING AND EDUCATION MANAGEMENT AROUND THE GLOBE",
        paragraphBody: [
          "Over the years, the traditional system of learning involving the learner and teacher in a class with a textbook, note and whatever medium has been what is known and widespread. However, there have been flaws with this system in the aspect of data collection, analysis, tracking and recording alongside the ever-increasing cost of material and equipment involved in having traditional classes or set-ups.",
          "The plan for FutureX was to develop a system for managing the intricacies of education across all levels of education and handling the peculiarities of education across different locations. We also wanted to create a platform that could be accessible by other stakeholders beyond just the teacher and learner e.g. guardians and the government.",
        ],
      },
      bodyImg: [FutureXProblemImage],
    },
    informationArchitecture: {
      headingTitle: "Information Architecture",
      bodyImg: [
        futureXInformationArchitecture1,
        futureXInformationArchitecture2,
      ],
    },
    wireFrames: {
      headingTitle: "Wireframes",
      bodyImg: [futureXWireframes1, futureXWireframes2, futureXWireframes3],
    },
  },
  {
    id: 4,
    projectName: "Jettify",
    path: "jettify",
    img: jettifyImage,
    description:
      "A multi-service app primarily for ride-hailing and goods delivery/tracking perfect for the digital age.",
    role: [
      {
        title: "UX Researcher",
        color: "#42FFB7", //green
      },
      {
        title: "UI Designer",
        color: "#FFF0C1",
      },
      {
        title: "UX Designer",
        color: "#F0BFFF",
      },
    ],
    theme: [
      {
        title: "Ride",
        color: "#FFF0C1", //cream
      },
      {
        title: "Mobile app",
        color: "#FFB05F",
      },
      {
        title: "Compliance",
        color: "#9EE5FF", //light blue
      },
    ],
    tools: [
      {
        title: "Figma",
        color: "#F0BFFF", //purple
      },
      {
        title: "Google Docs",
        color: "#FFB05F", //brown
      },
      {
        title: "Whimsical",
        color: "#FFF0C1", //cream
      },
    ],
    research: [
      {
        title: "interviews",
        color: "#42FFB7",
      },
      {
        title: "a/b Testing",
        color: "#F0BFFF",
      },
      {
        title: "Usability Testing",
        color: "#9EE5FF",
      },
      {
        title: "Qualitative Research",
        color: "#FFF0C1",
      },
      {
        title: "Contexual inquiry",
        color: "#FFB05F", //brown
      },
    ],
    coverImage: jettifyImage,
    problem: {
      headingTitle: "The Problem",
      bodyText: {
        paragraphTitle: "THE FUTURE OF TRANSPORTATION IN A DIGITAL AGE",
        paragraphBody: [
          "Commuting is an essential part of our daily activities and alongside the affordance of moving from place to place is the aim to have comfort and speed also accounted for. In a digital age as this, we are posed with the opportunity of doing literally anything with our mobile phones. What if we also had the ability to determine the means by which we commute and the affordances we have as we do.",
        ],
      },
    },
    researchProcess: {
      headingTitle: "Research Process",
      bodyText: [
        {
          heading:
            "A QUALITATIVE APPROACH TO GATHERING INSIGHT ON RIDE-HAILING",
          body: "Owing to the fact that there are already existent ride-hailing apps available to our target population. Most of the research was targeted at finding loopholes in the current solutions and figuring out pain points that weren’t previously catered for.",
        },
        {
          body: "However, most of the insights that we got bordered around the following:",
          listBody: [
            "Swiftness of response of cabs that were selected.",
            "Safety cautions",
            "Nature of transactions done on the apps.",
            "Catering for emergency financial strain etc.",
          ],
        },
      ],
      bodyImg: [researchProcess1, researchProcess2],
    },
    informationArchitecture: {
      headingTitle: "Information Architecture",
      bodyImg: [jettifyInformationArchitecture],
    },
    wireFrames: {
      headingTitle: "Low Fidelity Wireframes",
      bodyImg: [jettifyWireframes1, jettifyWireframes2, jettifyWireframes3],
    },
  },
  {
    id: 5,
    projectName: "Zennor Energy",
    path: "zennor-energy",
    img: zennorImage,
    description: "A B2B solution for gasoline distribution and record keeping.",
    role: [
      {
        title: "UX Researcher",
        color: "#42FFB7", //green
      },
      {
        title: "UI Designer",
        color: "#FFF0C1",
      },
      {
        title: "UX Designer",
        color: "#F0BFFF",
      },
    ],
    theme: [
      {
        title: "Gasoline",
        color: "#FFF0C1", //cream
      },
      {
        title: "Mobile app",
        color: "#9EE5FF",
      },
    ],
    tools: [
      {
        title: "Abobe XD",
        color: "#F0BFFF", //purple
      },
    ],
    research: [
      {
        title: "interviews",
        color: "#42FFB7",
      },
      {
        title: "Wireframing",
        color: "#FFB05F",
      },
      {
        title: "Prototyping",
        color: "#F0BFFF",
      },
      {
        title: "Usability Testing",
        color: "#9EE5FF",
      },
    ],
    timeline: [
      {
        title: "5 weeks",
        color: "#FFF0C1",
      },
    ],
    coverImage: zennorCoverImage,
    overview: {
      title: "Overview",
      body: [
        "Design an app that would help keep records of all orders and financial activities for a gasoline (and other products related) wholesales distributor.",
      ],
    },
    problem: {
      headingTitle: "Challenges",
      bodyText: {
        paragraphBody: [
          "I'll be writing in the exact words of the client to avoid change in meaning due to paraphrasing.",
          "1. I find it hard to keep track of all my orders from all my clients.",
          "2. Often times, I get calls from a client for an order and by the time I get there, a superior tells me he didn't make the call so it's not needed.",
          "3. Sometimes, my clients buy from me on credit and it can be really cumbersome having to keep track on all of them and the outstanding payments.",
          "4. I need a much more organized transactions record for my business.",
        ],
      },
    },
    researchProcess: {
      headingTitle: "Business Research",
      bodyText: [
        {
          heading:
            "RESHAPING THE TRADITIONAL SYSTEM OF LEARNING AND EDUCATION MANAGEMENT AROUND THE GLOBE",
          body: "The first thing I had to do was understand the workflow for an order being placed through till delivery; that way, I'd be able to know where the challenges would arise and proffer accurate solutions along sides the project manager. After my enlightening journey through the business workflow, I was able to map out the user journey and identify the challenges.",
        },
      ],
      bodyImg: [businessResearch1, businessResearch2],
    },

    wireFrames: {
      headingTitle: "Low Fidelity (sketches)",
      bodyImg: [wireframe1, wireframe3, wireframe4, wireframe5, wireframe2],
    },
  },
];

export default projects;
