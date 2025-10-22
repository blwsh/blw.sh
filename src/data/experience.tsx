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
          <li>Played a primary role in the architecture/implementation for the migration of a complex financial system alongside other Senior/Staff engineers.</li>
          <li>Designed and delivered a mission-critical financial system (preliminarily written in Go) which
            processed millions of € in transactions per month.
          </li>
          <li>Improved CI/CD pipelines, reducing runtimes by as much as 50% and
            eliminated flaky builds in a major pipeline, saving developer hours/months.
          </li>
          <li>Delivered dozens of full-stack features (React + (Go, Java & Node) backends)</li>
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
          <li>Led an initiative to eliminate ~40%+ of manual effort for the billing team.</li>
          <li>Helped motivate and energise new team members who transferred internally to our team.</li>
          <li>Interviewed candidates for my team and other engineering teams. Resulted in exceptional talent joining the org.</li>
          <li>Worked with other leaders to help develop SDLC policy.</li>
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
          <li>Helped maintain and deliver features for our internal dashboard.</li>
          <li>Reduced pipeline flakiness and cut down total time to deploy from 20m+ to just ~4m</li>
          <li>Trained IC1 & IC2 team members on how to write better React code</li>
          <li>Initiated a DX task force, developed a Go tool to enable securely working with sensitive financial data.</li>
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
          <li>Managed K8S infrastructure. Worked with engineering teams to ensure deploying to the cluster was effortless</li>
          <li>Developed Terraform templates to allow teams to easily deploy using canary deployments via Itsio</li>
          <li>Enabled developers by developing Go tooling which simplified development process</li>
          <li>Managed AWS and VPN infrastructure to enable B2B communication</li>
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
          <li>Implemented new infrastructure which deployed ECS services via TeamCity</li>
          <li>Developed Go tooling to support newly created infrastructure</li>
          <li>Lead the development of an athlete management platform using Laravel and Ionic (PWA/IOS/Android)</li>
          <li>Trained others on engineering best practices, new infrastructure and software patterns.</li>
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
          <li>Eliminated scaling issues for clients which received massive influxes of traffic from national media coverage.</li>
          <li>Delivered features and fixed bugs for an ecommerce client.</li>
          <li>Developed the backend for a property market site using Laravel.</li>
          <li>Created Go tooling which drastically simplified the deployment process in multi-tenant environments.</li>
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
          <li>Designed & developed the majority of the backend for a large PLCs internal learning platform.</li>
          <li>Delivered frontend features for various clients (Using Vue and JQuery)</li>
          <li>Researched how we could benefit from moving to Docker.</li>
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