import {CategorisedTechnology} from "@/types";

const companyTechnologies: Record<string, CategorisedTechnology> = {
  "Taxdoo GmbH": {
    languages: [
      "Go", "Node", "Typescript", "JavaScript", "Java", "Kotlin", "PHP", "MySQL",
    ],
    frameworks: [
      "Serverless", "React", "Express", "GraphQL", "JUnit", "Cypress"
    ],
    ciServices: ["Gitlab"],
    cloudProviders: ["AWS"],
    cloudServices: [
      "Lambda", "Step Functions", "S3", "API Gateway", "RDS", "Aurora", "DynamoDB",
      "ECS", "ECR", "SQS", "SES", "SNS", "EventBridge", "CloudFront",
      "IAM", "Secrets Manager", "Systems Manager", "CloudWatch"
    ],
  },
  "UK Tote Group": {
    languages: ["Go", "C#", "Terraform", "Docker"],
    frameworks: ["Cypress", "Istio"],
    ciServices: ["Bamboo", "Github Actions"],
    cloudProviders: ["AWS", "GCP"],
    cloudServices: [
      "EKS", "ELB", "VPC", "IAM", "CloudFront", "CloudWatch"
    ]
  },
  "We Are Sweet": {
    languages: ["Go", "PHP", "Node", "Typescript", "JavaScript", "Docker"],
    frameworks: ["React", "Ionic", "Laravel", "GraphQL", "Cypress"],
    ciServices: ["Teamcity", "DeployBot"],
    cloudProviders: ["AWS"],
    cloudServices: ["ECS", "Fargate", "ECR", "ELB", "VPC", "S3", "IAM", "CloudFront", "RDS"]
  },
  "Freelance": {
    languages: [
      "Go", "PHP", "Node", "Typescript", "JavaScript", "Docker", "Python"
    ],
    frameworks: [
      "React", "Vue", "Svelte", "GraphQL", "Cypress", "Ionic", "Magento", "Laravel",
      "NativeScript"
    ],
    ciServices: ["Bamboo", "Github Actions", "Teamcity"],
    cloudProviders: ["AWS", "GCP"],
    cloudServices: ["EKS", "ECR", "ELB", "VPC", "IAM", "CodePipeline", "CloudFront", "CodeBuild"]
  },
  "Ascensor": {
    languages: ["PHP", "JavaScript", "Node", "SASS/SCSS", "Docker"],
    frameworks: ["Laravel", "Symfony", "Wordpress", "Vue", "Bootstrap", "JQuery"],
    ciServices: ["DeployBot"],
    cloudProviders: ["Digital Ocean"],
    cloudServices: []
  }
}

export const experience = [
  {
    company: "Taxdoo GmbH",
    description: <p>Joined Taxdoo as an IC, rapidly promoted to Engineering
      Manager, then transitioned back into a Senior IC role to lead technical
      delivery on mission-critical finance systems.</p>,
    positions: [
      {
        title: "Senior Software Engineer",
        level: "IC3",
        workArrangement: "Full-time",
        technologies: companyTechnologies["Taxdoo GmbH"],
        startDate: new Date("2023-05-01"),
        endDate: null, // null means "present"
        location: "Hamburg, DE",
        description: <ul>
          <li>Co-architected and migrated a large-scale financial platform,
            reducing system complexity and improving maintainability.
          </li>
          <li>Delivered a high-throughput finance service in Go, processing
            millions of euros monthly with improved accuracy and reliability.
          </li>
          <li>Optimised CI/CD pipelines, cutting build time by ~50% and
            eliminating flakiness, saving hundreds of developer hours per year.
          </li>
          <li>Delivered dozens of full-stack features across React, Go, Java,
            and Node services, directly contributing to critical business
            launches.
          </li>
        </ul>
      },
      {
        title: "Engineering Manager",
        level: "PM3",
        workArrangement: "Full-time",
        technologies: companyTechnologies["Taxdoo GmbH"],
        startDate: new Date("2022-08-01"),
        endDate: new Date("2023-04-30"),
        location: "Hamburg, DE",
        description: <ul>
          <li>Led a cross-functional team to automate billing operations,
            removing ~40% of manual processes.
          </li>
          <li>Rebuilt team morale during reorganisation, enabling faster
            delivery and improved engagement.
          </li>
          <li>Interviewed and hired high-performing engineers who later became
            core contributors.
          </li>
          <li>Partnered with leadership to define engineering processes and SDLC
            standards across the org.
          </li>
        </ul>
      },
      {
        title: "Software Engineer",
        level: "IC2",
        workArrangement: "Full-time",
        technologies: companyTechnologies["Taxdoo GmbH"],
        startDate: new Date("2022-04-01"),
        endDate: new Date("2022-07-31"),
        location: "Leeds, GB",
        description: <ul>
          <li>Modernised internal dashboard systems, improving stability and
            usability for finance operations.
          </li>
          <li>Cut deployment time from 20+ minutes to ~4 minutes by
            re-engineering CI/CD pipelines.
          </li>
          <li>Mentored junior engineers on React best practices and clean
            architecture.
          </li>
          <li>Created a Go-based internal tool for secure handling of sensitive
            financial data, improving developer productivity and compliance.
          </li>
        </ul>
      }
    ]
  },
  {
    company: "UK Tote Group Ltd",
    positions: [
      {
        title: "Platform Engineer",
        level: "IC3",
        workArrangement: "Full-time",
        technologies: companyTechnologies["UK Tote Group"],
        startDate: new Date("2021-06-01"),
        endDate: new Date("2022-02-28"),
        location: "Manchester, GB",
        description: <ul>
          <li>Managed Kubernetes infrastructure and developer enablement for a
            large-scale betting platform.
          </li>
          <li>Built Terraform modules enabling teams to deploy using canary
            releases via Istio.
          </li>
          <li>Developed Go-based tooling that simplified local development and
            CI integration.
          </li>
          <li>Managed AWS and VPN infrastructure to support secure B2B
            integrations with external partners.
          </li>
        </ul>
      }
    ]
  },
  {
    company: "We Are Sweet Ltd",
    positions: [
      {
        title: "Software Engineer",
        level: "Fullstack",
        workArrangement: "Full-time",
        technologies: companyTechnologies["We Are Sweet"],
        startDate: new Date("2020-05-01"),
        endDate: new Date("2021-04-30"),
        location: "London, GB",
        description: <ul>
          <li>Led development of a cross-platform athlete management platform
            (Laravel + Ionic) deployed as PWA, iOS, and Android apps.
          </li>
          <li>Built new AWS ECS-based infrastructure with automated deployments
            via TeamCity.
          </li>
          <li>Created Go tools to support the new deployment pipeline, improving
            team efficiency.
          </li>
          <li>Championed engineering best practices and mentored peers on modern
            frameworks and infrastructure.
          </li>
        </ul>
      }
    ]
  },
  {
    company: "Freelance",
    positions: [
      {
        title: "Software Engineer",
        level: "Fullstack",
        workArrangement: "Part-time",
        technologies: companyTechnologies["Freelance"],
        startDate: new Date("2019-05-01"),
        endDate: new Date("2020-04-30"),
        location: "Leeds, GB",
        description: <ul>
          <li>Delivered scalable, production-grade solutions for high-traffic
            media clients.
          </li>
          <li>Eliminated scaling issues during viral traffic surges, ensuring
            zero downtime.
          </li>
          <li>Built e-commerce and property marketplace backends in Laravel.
          </li>
          <li>Created Go tooling which drastically simplified the deployment
            process in multi-tenant environments.
          </li>
        </ul>
      }
    ]
  },
  {
    company: "Ascensor Ltd",
    positions: [
      {
        title: "Laravel Developer",
        workArrangement: "Full-time",
        technologies: companyTechnologies["Ascensor"],
        startDate: new Date("2016-07-01"),
        endDate: new Date("2017-10-31"),
        location: "Leeds, GB",
        description: <ul>
          <li>Designed and implemented backend architecture for a large PLC’s
            internal learning platform.
          </li>
          <li>Delivered front-end features in Vue and jQuery across multiple
            client projects.
          </li>
          <li>Proposed and piloted Docker adoption for local dev consistency.
          </li>
        </ul>
      },
      {
        title: "Junior Frontend Developer",
        workArrangement: "Part-time",
        technologies: companyTechnologies["Ascensor"],
        startDate: new Date("2015-06-01"),
        endDate: new Date("2015-11-30"),
        location: "Leeds, GB",
        description: <p>
          My professional career began at Ascensor. I started out modifying
          WordPress templates for brochure sites. I helped to develop a flow
          that enabled us to deliver tailored websites for small clients in as
          little as two days. Back then, I worked mainly with PHP, jQuery and
          SASS/SCSS.
        </p>
      }
    ]
  }
]