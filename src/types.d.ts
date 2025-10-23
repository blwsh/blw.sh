import {JSX} from "react";

export type ProgrammingLanguage =
  "JavaScript"
  | "TypeScript"
  | "Python"
  | "Java"
  | "C#"
  | "Node"
  | "Typescript"
  | "Go"
  | "Rust"
  | "PHP"
  | "MySQL"
  | "Docker"
  | "Kotlin"
  | "SASS/SCSS"
  | "Terraform"

export type CIService =
  "Gitlab"
  | "Github Actions"
  | "Teamcity"
  | "Bamboo"
  | "DeployBot"

export type Framework =
  "React"
  | "Serverless"
  | "React Router"
  | "Vue"
  | "Svelte"
  | "Cypress"
  | "Ionic"
  | "NativeScript"
  | "Magento"
  | "GraphQL"
  | "JUnit"
  | "Laravel"
  | "Symfony"
  | "Next.js"
  | "Express"
  | "Bootstrap"
  | "JQuery"
  | "Wordpress"
  | "Istio"

export type CloudProvider =
  "AWS"
  | "GCP"
  | "Azure"
  | "Digital Ocean"
  | "Encore Cloud"

export type CloudService =
  "S3"
  | "RDS"
  | "ECS"
  | "Fargate"
  | "EKS"
  | "Lambda"
  | "API Gateway"
  | "CloudFront"
  | "DynamoDB"
  | "SNS"
  | "SQS"
  | "Secrets Manager"
  | "Systems Manager"
  | "SES"
  | "EventBridge"
  | "CloudWatch"
  | "Step Functions"
  | "Aurora"
  | "IAM"
  | "VPC"
  | "Route53"
  | "CloudFormation"
  | "CodePipeline"
  | "CodeBuild"
  | "CloudTrail"
  | "ECR"
  | "X-Ray"
  | "Sentry"
  | "ELB"

// Any programming language, framework or cloud service
export type Technology =
  ProgrammingLanguage
  | Framework
  | CIService
  | CloudProvider
  | CloudService

export type CategorisedTechnology = {
  languages: ProgrammingLanguage[],
  frameworks: Framework[],
  ciServices: CIService[],
  cloudProviders: CloudProvider[],
  cloudServices: CloudService[],
}

export type WorkArrangement =
  "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Freelance"
  | string

export interface Position {
  title: string
  level?: string // e.g., IC1, IC2, IC3, etc.
  workArrangement: WorkArrangement
  technologies?: CategorisedTechnology
  startDate: Date
  endDate?: Date | null // null means "present"
  location: string
  description: JSX.Element
}

export interface Experience {
  company: string
  description: JSX.Element
  positions: Position[]
}