// AWS questions array
const questions = [
    {
        question: "1. What is the main purpose of AWS Lambda?",
        options: ["A) To run serverless applications", "B) To provide a relational database", "C) To manage container orchestration", "D) To store static files"],
        answer: "A) To run serverless applications"
    },
    {
        question: "2. Which AWS service is used to manage containerized applications?",
        options: ["A) Amazon EC2", "B) Amazon S3", "C) Amazon ECS", "D) AWS Lambda"],
        answer: "C) Amazon ECS"
    },
    {
        question: "3. What does S3 stand for?",
        options: ["A) Secure Storage Service", "B) Simple Storage Service", "C) Standard Storage Service", "D) Scalable Storage Service"],
        answer: "B) Simple Storage Service"
    },
    {
        question: "4. How can you run code without provisioning or managing servers?",
        options: ["A) AWS EC2", "B) AWS Lambda", "C) AWS Batch", "D) Amazon Lightsail"],
        answer: "B) AWS Lambda"
    },
    {
        question: "5. Which AWS service can you use to host a static website?",
        options: ["A) Amazon RDS", "B) Amazon EC2", "C) Amazon S3", "D) AWS Lambda"],
        answer: "C) Amazon S3"
    },
    {
        question: "6. What is the maximum size of an object that can be stored in Amazon S3?",
        options: ["A) 5 GB", "B) 10 GB", "C) 100 GB", "D) 5 TB"],
        answer: "D) 5 TB"
    },
    {
        question: "7. What type of database is Amazon DynamoDB?",
        options: ["A) Relational database", "B) NoSQL database", "C) Graph database", "D) Time series database"],
        answer: "B) NoSQL database"
    },
    {
        question: "8. How do you secure access to AWS resources?",
        options: ["A) Using IAM roles and policies", "B) Using security groups", "C) Using VPC", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "9. Which AWS service allows you to run code in response to events?",
        options: ["A) AWS EC2", "B) AWS Lambda", "C) AWS Batch", "D) Amazon RDS"],
        answer: "B) AWS Lambda"
    },
    {
        question: "10. What is an Amazon Machine Image (AMI)?",
        options: ["A) A backup of your EC2 instance", "B) A template used to create EC2 instances", "C) A monitoring tool for EC2", "D) A type of storage volume"],
        answer: "B) A template used to create EC2 instances"
    },
    {
        question: "11. Which AWS service provides scalable object storage?",
        options: ["A) Amazon EBS", "B) Amazon RDS", "C) Amazon S3", "D) AWS Lambda"],
        answer: "C) Amazon S3"
    },
    {
        question: "12. How can you track AWS resource usage?",
        options: ["A) AWS CloudTrail", "B) AWS CloudFormation", "C) AWS Config", "D) AWS Lambda"],
        answer: "A) AWS CloudTrail"
    },
    {
        question: "13. What is AWS CloudFormation used for?",
        options: ["A) Monitoring AWS resources", "B) Creating and managing AWS resources", "C) Providing billing information", "D) Managing user permissions"],
        answer: "B) Creating and managing AWS resources"
    },
    {
        question: "14. What is the purpose of Amazon RDS?",
        options: ["A) To run NoSQL databases", "B) To manage relational databases", "C) To store static files", "D) To monitor server performance"],
        answer: "B) To manage relational databases"
    },
    {
        question: "15. Which AWS service provides a fully managed NoSQL database?",
        options: ["A) Amazon RDS", "B) Amazon Aurora", "C) Amazon DynamoDB", "D) Amazon Redshift"],
        answer: "C) Amazon DynamoDB"
    },
    {
        question: "16. What is the primary use case for Amazon Redshift?",
        options: ["A) Data warehousing", "B) Web hosting", "C) NoSQL database", "D) File storage"],
        answer: "A) Data warehousing"
    },
    {
        question: "17. Which service can help you automate the deployment of applications?",
        options: ["A) AWS CodeDeploy", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) AWS CodeDeploy"
    },
    {
        question: "18. What is AWS IAM used for?",
        options: ["A) To monitor resources", "B) To manage user access and permissions", "C) To deploy applications", "D) To store user data"],
        answer: "B) To manage user access and permissions"
    },
    {
        question: "19. What is the purpose of AWS Elastic Beanstalk?",
        options: ["A) To run serverless applications", "B) To manage containerized applications", "C) To deploy and manage applications easily", "D) To store large amounts of data"],
        answer: "C) To deploy and manage applications easily"
    },
    {
        question: "20. What is a VPC in AWS?",
        options: ["A) Virtual Private Cloud", "B) Virtual Public Cloud", "C) Virtual Private Computer", "D) Virtual Public Computer"],
        answer: "A) Virtual Private Cloud"
    },
    {
        question: "21. What is the maximum number of security groups you can associate with an EC2 instance?",
        options: ["A) 2", "B) 5", "C) 10", "D) 500"],
        answer: "D) 500"
    },
    {
        question: "22. How can you ensure high availability for an application on EC2?",
        options: ["A) Deploy in multiple availability zones", "B) Use auto-scaling", "C) Utilize Elastic Load Balancing", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "23. Which AWS service can be used to orchestrate microservices?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS Step Functions", "D) AWS CodePipeline"],
        answer: "C) AWS Step Functions"
    },
    {
        question: "24. What does AWS CodeCommit provide?",
        options: ["A) Managed version control", "B) Continuous integration", "C) Automated testing", "D) Deployment automation"],
        answer: "A) Managed version control"
    },
    {
        question: "25. Which AWS service allows you to create a hybrid cloud?",
        options: ["A) AWS Storage Gateway", "B) Amazon S3", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) AWS Storage Gateway"
    },
    {
        question: "26. Which of the following is a benefit of using EC2 instances with auto-scaling?",
        options: ["A) Lowering operational costs", "B) Increasing resource availability", "C) Reducing the risk of over-provisioning", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "27. What is the purpose of the EC2 Instance Metadata?",
        options: ["A) To provide billing information", "B) To enable instances to retrieve data about themselves", "C) To store user data", "D) To manage security groups"],
        answer: "B) To enable instances to retrieve data about themselves"
    },
    {
        question: "28. Which AWS service is used for managing large-scale batch processing jobs?",
        options: ["A) AWS Batch", "B) Amazon EC2", "C) AWS Lambda", "D) Amazon ECS"],
        answer: "A) AWS Batch"
    },
    {
        question: "29. What is the primary function of Amazon Elastic Block Store (EBS)?",
        options: ["A) To provide scalable object storage", "B) To provide block-level storage for EC2 instances", "C) To manage container storage", "D) To store data in a relational database"],
        answer: "B) To provide block-level storage for EC2 instances"
    },
    {
        question: "30. How can you enhance the security of your AWS account?",
        options: ["A) Enable MFA", "B) Use IAM roles", "C) Set strong passwords", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "31. What is AWS X-Ray used for?",
        options: ["A) To monitor and troubleshoot applications", "B) To store large data sets", "C) To manage IAM users", "D) To deploy applications"],
        answer: "A) To monitor and troubleshoot applications"
    },
    {
        question: "32. What is the default limit for EC2 instances per region?",
        options: ["A) 20", "B) 100", "C) 50", "D) 200"],
        answer: "B) 100"
    },
    {
        question: "33. Which AWS service provides DNS and domain management?",
        options: ["A) Amazon Route 53", "B) AWS CloudFormation", "C) Amazon S3", "D) Amazon VPC"],
        answer: "A) Amazon Route 53"
    },
    {
        question: "34. Which service is best for building serverless APIs?",
        options: ["A) AWS Lambda with API Gateway", "B) AWS EC2", "C) Amazon RDS", "D) Amazon S3"],
        answer: "A) AWS Lambda with API Gateway"
    },
    {
        question: "35. What is the purpose of an Elastic Load Balancer (ELB)?",
        options: ["A) To store data", "B) To distribute incoming application traffic across multiple targets", "C) To manage user permissions", "D) To monitor application performance"],
        answer: "B) To distribute incoming application traffic across multiple targets"
    },
    {
        question: "36. How can you trigger a Lambda function in response to changes in S3?",
        options: ["A) Through IAM", "B) By using SNS", "C) By configuring an S3 event notification", "D) By deploying the function in the same region"],
        answer: "C) By configuring an S3 event notification"
    },
    {
        question: "37. Which AWS service provides managed Kubernetes?",
        options: ["A) Amazon EKS", "B) Amazon ECS", "C) AWS Fargate", "D) AWS Batch"],
        answer: "A) Amazon EKS"
    },
    {
        question: "38. What does the AWS CLI stand for?",
        options: ["A) AWS Command Line Interface", "B) AWS Cloud Line Interface", "C) AWS Common Line Interface", "D) AWS Cloud Command Line"],
        answer: "A) AWS Command Line Interface"
    },
    {
        question: "39. Which AWS service can you use to send notifications to users?",
        options: ["A) AWS CloudTrail", "B) Amazon SNS", "C) Amazon SQS", "D) AWS Lambda"],
        answer: "B) Amazon SNS"
    },
    {
        question: "40. What is AWS CodePipeline used for?",
        options: ["A) Continuous delivery", "B) Version control", "C) Automated testing", "D) Resource monitoring"],
        answer: "A) Continuous delivery"
    },
    {
        question: "41. Which AWS service is used for queuing messages?",
        options: ["A) Amazon SQS", "B) Amazon SNS", "C) AWS Lambda", "D) AWS Batch"],
        answer: "A) Amazon SQS"
    },
    {
        question: "42. What is the maximum message size in Amazon SQS?",
        options: ["A) 256 KB", "B) 512 KB", "C) 1 MB", "D) 2 MB"],
        answer: "A) 256 KB"
    },
    {
        question: "43. Which service provides a managed graph database?",
        options: ["A) Amazon RDS", "B) Amazon Neptune", "C) Amazon DynamoDB", "D) Amazon Redshift"],
        answer: "B) Amazon Neptune"
    },
    {
        question: "44. What type of storage is Amazon S3?",
        options: ["A) Block storage", "B) File storage", "C) Object storage", "D) Database storage"],
        answer: "C) Object storage"
    },
    {
        question: "45. How can you manage access to your S3 buckets?",
        options: ["A) IAM policies", "B) Bucket policies", "C) Access Control Lists (ACLs)", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "46. Which AWS service helps in migrating databases to AWS?",
        options: ["A) AWS DMS", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) AWS DMS"
    },
    {
        question: "47. What is the purpose of AWS Trusted Advisor?",
        options: ["A) To manage resources", "B) To provide cost optimization recommendations", "C) To deploy applications", "D) To monitor performance"],
        answer: "B) To provide cost optimization recommendations"
    },
    {
        question: "48. How can you view AWS resource activity?",
        options: ["A) AWS CloudTrail", "B) AWS Config", "C) Amazon CloudWatch", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "49. What is the primary benefit of using AWS Regions and Availability Zones?",
        options: ["A) Improved latency", "B) Increased redundancy", "C) Enhanced security", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "50. What is the role of AWS CloudWatch?",
        options: ["A) Monitoring AWS resources and applications", "B) Storing backups", "C) Managing user permissions", "D) Providing load balancing"],
        answer: "A) Monitoring AWS resources and applications"
    },
    {
        question: "51. Which service allows you to run code without provisioning servers?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) Amazon ECS", "D) AWS Batch"],
        answer: "A) AWS Lambda"
    },
    {
        question: "52. What is Amazon DynamoDB?",
        options: ["A) A NoSQL database", "B) A relational database", "C) A file storage service", "D) An object storage service"],
        answer: "A) A NoSQL database"
    },
    {
        question: "53. Which AWS service is used to build data lakes?",
        options: ["A) Amazon S3", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) Amazon S3"
    },
    {
        question: "54. What is the maximum size of an object you can store in Amazon S3?",
        options: ["A) 5 GB", "B) 50 GB", "C) 100 GB", "D) 5 TB"],
        answer: "D) 5 TB"
    },
    {
        question: "55. Which of the following is a fully managed relational database service?",
        options: ["A) Amazon S3", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon DynamoDB"],
        answer: "B) Amazon RDS"
    },
    {
        question: "56. What is AWS CloudFormation used for?",
        options: ["A) To create virtual machines", "B) To automate the deployment of resources", "C) To monitor applications", "D) To manage user permissions"],
        answer: "B) To automate the deployment of resources"
    },
    {
        question: "57. Which AWS service is used for real-time messaging between applications?",
        options: ["A) Amazon SNS", "B) Amazon SQS", "C) AWS Lambda", "D) AWS IoT"],
        answer: "A) Amazon SNS"
    },
    {
        question: "58. What does AWS CodeCommit provide?",
        options: ["A) Version control for code", "B) Continuous integration", "C) Code deployment", "D) Monitoring"],
        answer: "A) Version control for code"
    },
    {
        question: "59. Which of the following services is a managed container orchestration service?",
        options: ["A) Amazon EKS", "B) AWS Fargate", "C) Amazon ECS", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "60. How can you secure data at rest in Amazon S3?",
        options: ["A) Use IAM roles", "B) Enable versioning", "C) Use server-side encryption", "D) Use CloudTrail"],
        answer: "C) Use server-side encryption"
    },
    {
        question: "61. What is Amazon API Gateway primarily used for?",
        options: ["A) To manage databases", "B) To create RESTful APIs", "C) To monitor application performance", "D) To host static websites"],
        answer: "B) To create RESTful APIs"
    },
    {
        question: "62. Which AWS service can be used to monitor application logs in real-time?",
        options: ["A) Amazon CloudWatch", "B) AWS Lambda", "C) AWS CloudTrail", "D) Amazon S3"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "63. What is AWS Identity and Access Management (IAM) used for?",
        options: ["A) To manage network resources", "B) To provide user authentication and authorization", "C) To deploy applications", "D) To monitor services"],
        answer: "B) To provide user authentication and authorization"
    },
    {
        question: "64. How does AWS Lambda charge for execution?",
        options: ["A) By the number of requests and duration", "B) By the amount of data processed", "C) By the number of lines of code", "D) By the number of AWS services used"],
        answer: "A) By the number of requests and duration"
    },
    {
        question: "65. Which AWS service is ideal for running a relational database?",
        options: ["A) Amazon S3", "B) Amazon EC2", "C) Amazon RDS", "D) Amazon DynamoDB"],
        answer: "C) Amazon RDS"
    },
    {
        question: "66. What does the AWS Well-Architected Framework help with?",
        options: ["A) Application development", "B) Cloud resource management", "C) Designing secure and efficient architectures", "D) Monitoring application performance"],
        answer: "C) Designing secure and efficient architectures"
    },
    {
        question: "67. Which of the following is a serverless data warehouse service?",
        options: ["A) Amazon RDS", "B) Amazon Redshift", "C) Amazon Aurora", "D) Amazon S3"],
        answer: "B) Amazon Redshift"
    },
    {
        question: "68. Which AWS service is used to automate deployments of applications?",
        options: ["A) AWS CodePipeline", "B) AWS CloudFormation", "C) AWS Elastic Beanstalk", "D) AWS CodeDeploy"],
        answer: "A) AWS CodePipeline"
    },
    {
        question: "69. What is the primary purpose of AWS Secrets Manager?",
        options: ["A) To store large amounts of data", "B) To manage sensitive information like passwords and API keys", "C) To automate application deployments", "D) To monitor resource usage"],
        answer: "B) To manage sensitive information like passwords and API keys"
    },
    {
        question: "70. Which AWS service is used for deploying applications in Docker containers?",
        options: ["A) Amazon EKS", "B) AWS Fargate", "C) Amazon ECS", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "71. What is the function of AWS Step Functions?",
        options: ["A) To create state machines for workflows", "B) To manage databases", "C) To deploy applications", "D) To monitor application performance"],
        answer: "A) To create state machines for workflows"
    },
    {
        question: "72. Which service would you use for server-side caching in your application?",
        options: ["A) Amazon DynamoDB", "B) Amazon ElastiCache", "C) Amazon S3", "D) Amazon RDS"],
        answer: "B) Amazon ElastiCache"
    },
    {
        question: "73. What is the primary function of Amazon Route 53?",
        options: ["A) DNS management", "B) Load balancing", "C) Application monitoring", "D) Data storage"],
        answer: "A) DNS management"
    },
    {
        question: "74. Which of the following provides a managed file storage service?",
        options: ["A) Amazon EFS", "B) Amazon S3", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) Amazon EFS"
    },
    {
        question: "75. What does AWS CloudTrail do?",
        options: ["A) Logs API calls and actions taken in your AWS account", "B) Manages user permissions", "C) Automates resource provisioning", "D) Monitors application performance"],
        answer: "A) Logs API calls and actions taken in your AWS account"
    },
    {
        question: "76. What type of storage is Amazon EBS?",
        options: ["A) Block storage", "B) Object storage", "C) File storage", "D) NoSQL database"],
        answer: "A) Block storage"
    },
    {
        question: "77. Which service can be used for automated scaling of EC2 instances?",
        options: ["A) AWS Auto Scaling", "B) Amazon CloudWatch", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) AWS Auto Scaling"
    },
    {
        question: "78. What is the maximum duration for an AWS Lambda function execution?",
        options: ["A) 30 seconds", "B) 5 minutes", "C) 15 minutes", "D) 1 hour"],
        answer: "C) 15 minutes"
    },
    {
        question: "79. Which AWS service provides a way to deploy applications in a serverless environment?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS Elastic Beanstalk", "D) Amazon ECS"],
        answer: "A) AWS Lambda"
    },
    {
        question: "80. What is the primary use of Amazon Kinesis?",
        options: ["A) To monitor applications", "B) To process streaming data", "C) To manage databases", "D) To deploy applications"],
        answer: "B) To process streaming data"
    },
    {
        question: "81. Which AWS service provides managed blockchain functionality?",
        options: ["A) Amazon Managed Blockchain", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) Amazon Managed Blockchain"
    },
    {
        question: "82. What service would you use to send notifications to multiple recipients?",
        options: ["A) Amazon SNS", "B) Amazon SQS", "C) AWS Lambda", "D) Amazon CloudWatch"],
        answer: "A) Amazon SNS"
    },
    {
        question: "83. What is the AWS service for deploying microservices applications?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS Elastic Beanstalk", "D) Amazon ECS"],
        answer: "D) Amazon ECS"
    },
    {
        question: "84. How can you automate the creation of AWS infrastructure?",
        options: ["A) AWS Management Console", "B) AWS CLI", "C) AWS CloudFormation", "D) AWS Lambda"],
        answer: "C) AWS CloudFormation"
    },
    {
        question: "85. Which service is used for continuous integration and continuous delivery?",
        options: ["A) AWS CodeBuild", "B) AWS CodeDeploy", "C) AWS CodePipeline", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "86. What is the purpose of Amazon CloudFront?",
        options: ["A) To store data", "B) To monitor applications", "C) To deliver content with low latency", "D) To manage user permissions"],
        answer: "C) To deliver content with low latency"
    },
    {
        question: "87. Which of the following is a fully managed NoSQL database service?",
        options: ["A) Amazon Aurora", "B) Amazon RDS", "C) Amazon DynamoDB", "D) Amazon S3"],
        answer: "C) Amazon DynamoDB"
    },
    {
        question: "88. What AWS service provides a way to manage user identities and permissions?",
        options: ["A) AWS IAM", "B) Amazon S3", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) AWS IAM"
    },
    {
        question: "89. What is AWS Elastic Beanstalk used for?",
        options: ["A) To deploy applications", "B) To manage databases", "C) To monitor performance", "D) To manage user access"],
        answer: "A) To deploy applications"
    },
    {
        question: "90. Which service is best for running a serverless application?",
        options: ["A) Amazon RDS", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon S3"],
        answer: "B) AWS Lambda"
    },
    {
        question: "91. What is the purpose of AWS Config?",
        options: ["A) To monitor AWS resources", "B) To automate resource management", "C) To track configuration changes", "D) To manage user permissions"],
        answer: "C) To track configuration changes"
    },
    {
        question: "92. Which AWS service is used for setting up a Virtual Private Cloud (VPC)?",
        options: ["A) Amazon VPC", "B) Amazon EC2", "C) AWS Lambda", "D) AWS Direct Connect"],
        answer: "A) Amazon VPC"
    },
    {
        question: "93. Which service can be used to execute code in response to events?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS CodeDeploy", "D) AWS CloudFormation"],
        answer: "A) AWS Lambda"
    },
    {
        question: "94. What is the purpose of Amazon Aurora?",
        options: ["A) A NoSQL database", "B) A relational database engine", "C) A file storage service", "D) An object storage service"],
        answer: "B) A relational database engine"
    },
    {
        question: "95. What is the main benefit of using AWS Fargate?",
        options: ["A) No need to manage servers", "B) Automatic scaling", "C) Continuous integration", "D) Monitoring applications"],
        answer: "A) No need to manage servers"
    },
    {
        question: "96. Which AWS service helps in managing distributed applications across multiple accounts?",
        options: ["A) AWS Organizations", "B) AWS Config", "C) AWS CloudTrail", "D) Amazon CloudWatch"],
        answer: "A) AWS Organizations"
    },
    {
        question: "97. What is the main purpose of Amazon S3 Glacier?",
        options: ["A) Low-latency data access", "B) Long-term data archiving", "C) Real-time data processing", "D) High-performance computing"],
        answer: "B) Long-term data archiving"
    },
    {
        question: "98. Which AWS service provides a scalable email sending service?",
        options: ["A) Amazon SNS", "B) Amazon SES", "C) AWS Lambda", "D) Amazon S3"],
        answer: "B) Amazon SES"
    },
    {
        question: "99. Which AWS service provides analytics capabilities on streaming data?",
        options: ["A) Amazon Kinesis", "B) Amazon RDS", "C) Amazon DynamoDB", "D) Amazon S3"],
        answer: "A) Amazon Kinesis"
    },
    {
        question: "100. What is the maximum number of IAM users allowed per AWS account?",
        options: ["A) 50", "B) 100", "C) 500", "D) 5000"],
        answer: "D) 5000"
    },
    {
        question: "101. Which service provides automated backups for RDS databases?",
        options: ["A) Amazon Backup", "B) AWS Lambda", "C) Amazon S3", "D) Amazon EC2"],
        answer: "A) Amazon Backup"
    },
    {
        question: "102. How can you protect your application from DDoS attacks?",
        options: ["A) AWS Shield", "B) AWS WAF", "C) Amazon CloudFront", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "103. What is the primary purpose of Amazon Redshift?",
        options: ["A) A NoSQL database", "B) A data warehouse", "C) An object storage service", "D) A file storage service"],
        answer: "B) A data warehouse"
    },
    {
        question: "104. Which service provides a managed Hadoop framework?",
        options: ["A) Amazon EMR", "B) Amazon EC2", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) Amazon EMR"
    },
    {
        question: "105. What is the use of AWS Service Catalog?",
        options: ["A) To manage user permissions", "B) To create and manage AWS resources", "C) To monitor applications", "D) To provision cloud resources"],
        answer: "D) To provision cloud resources"
    },
    {
        question: "106. Which AWS service can help you create a secure, private connection to AWS?",
        options: ["A) AWS Direct Connect", "B) Amazon VPN", "C) AWS CloudFormation", "D) AWS IAM"],
        answer: "A) AWS Direct Connect"
    },
    {
        question: "107. What is AWS Elastic Load Balancing used for?",
        options: ["A) To distribute incoming application traffic", "B) To manage user access", "C) To store data", "D) To monitor applications"],
        answer: "A) To distribute incoming application traffic"
    },
    {
        question: "108. Which AWS service provides distributed tracing for applications?",
        options: ["A) Amazon CloudWatch", "B) AWS X-Ray", "C) AWS CloudTrail", "D) AWS Lambda"],
        answer: "B) AWS X-Ray"
    },
    {
        question: "109. What is AWS Organizations used for?",
        options: ["A) To manage IAM users", "B) To consolidate billing and management for multiple AWS accounts", "C) To deploy applications", "D) To monitor resources"],
        answer: "B) To consolidate billing and management for multiple AWS accounts"
    },
    {
        question: "110. Which of the following can be used to create serverless applications?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS Elastic Beanstalk", "D) Amazon RDS"],
        answer: "A) AWS Lambda"
    },
    {
        question: "111. What is the purpose of AWS Elastic Beanstalk?",
        options: ["A) To create virtual machines", "B) To deploy and manage applications", "C) To store data", "D) To manage databases"],
        answer: "B) To deploy and manage applications"
    },
    {
        question: "112. What is the primary use of Amazon RDS?",
        options: ["A) Object storage", "B) Data warehousing", "C) Relational database service", "D) Serverless applications"],
        answer: "C) Relational database service"
    },
    {
        question: "113. Which AWS service provides a scalable NoSQL database?",
        options: ["A) Amazon Aurora", "B) Amazon DynamoDB", "C) Amazon RDS", "D) Amazon S3"],
        answer: "B) Amazon DynamoDB"
    },
    {
        question: "114. What service is best for monitoring application performance?",
        options: ["A) AWS CloudTrail", "B) Amazon CloudWatch", "C) AWS Config", "D) Amazon VPC"],
        answer: "B) Amazon CloudWatch"
    },
    {
        question: "115. Which AWS service allows you to store objects in the cloud?",
        options: ["A) Amazon S3", "B) Amazon EBS", "C) Amazon RDS", "D) Amazon CloudFront"],
        answer: "A) Amazon S3"
    },
    {
        question: "116. What is the purpose of AWS CloudTrail?",
        options: ["A) To monitor applications", "B) To manage user access", "C) To log AWS API calls", "D) To distribute content"],
        answer: "C) To log AWS API calls"
    },
    {
        question: "117. Which service is best for running Docker containers?",
        options: ["A) Amazon EC2", "B) AWS Lambda", "C) Amazon ECS", "D) Amazon EKS"],
        answer: "C) Amazon ECS"
    },
    {
        question: "118. What is the main benefit of using Amazon EFS?",
        options: ["A) Low-cost storage", "B) File storage accessible from multiple EC2 instances", "C) Backup and recovery", "D) High-performance computing"],
        answer: "B) File storage accessible from multiple EC2 instances"
    },
    {
        question: "119. What is AWS Lambda used for?",
        options: ["A) To run code in response to events", "B) To host websites", "C) To store data", "D) To manage databases"],
        answer: "A) To run code in response to events"
    },
    {
        question: "120. Which AWS service provides the capability to run code without provisioning servers?",
        options: ["A) Amazon EC2", "B) AWS Lambda", "C) AWS Elastic Beanstalk", "D) AWS Fargate"],
        answer: "B) AWS Lambda"
    },
    {
        question: "121. Which AWS service is designed for data archiving?",
        options: ["A) Amazon RDS", "B) Amazon S3 Glacier", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "B) Amazon S3 Glacier"
    },
    {
        question: "122. What service is best for creating a private connection to AWS services?",
        options: ["A) AWS Direct Connect", "B) Amazon VPN", "C) AWS CloudFormation", "D) AWS IAM"],
        answer: "A) AWS Direct Connect"
    },
    {
        question: "123. What is the purpose of Amazon EBS?",
        options: ["A) Block storage for EC2 instances", "B) Object storage", "C) Data warehousing", "D) File storage"],
        answer: "A) Block storage for EC2 instances"
    },
    {
        question: "124. Which service provides a fully managed database service for relational databases?",
        options: ["A) Amazon RDS", "B) Amazon S3", "C) Amazon DynamoDB", "D) AWS Lambda"],
        answer: "A) Amazon RDS"
    },
    {
        question: "125. What is the primary benefit of using Amazon CloudFront?",
        options: ["A) Enhanced security", "B) Content delivery with low latency", "C) Data storage", "D) Virtual machine management"],
        answer: "B) Content delivery with low latency"
    },
    {
        question: "126. Which AWS service helps in automating security assessments?",
        options: ["A) AWS Inspector", "B) AWS Shield", "C) Amazon WAF", "D) AWS Config"],
        answer: "A) AWS Inspector"
    },
    {
        question: "127. What is the main use case for AWS Step Functions?",
        options: ["A) To manage user permissions", "B) To coordinate microservices", "C) To deploy applications", "D) To monitor applications"],
        answer: "B) To coordinate microservices"
    },
    {
        question: "128. What service provides a scalable messaging queue?",
        options: ["A) Amazon SQS", "B) Amazon SNS", "C) AWS Lambda", "D) Amazon CloudWatch"],
        answer: "A) Amazon SQS"
    },
    {
        question: "129. What is the purpose of AWS X-Ray?",
        options: ["A) To monitor and analyze applications", "B) To manage databases", "C) To store data", "D) To deploy applications"],
        answer: "A) To monitor and analyze applications"
    },
    {
        question: "130. Which AWS service provides managed Kubernetes?",
        options: ["A) Amazon ECS", "B) Amazon EKS", "C) AWS Fargate", "D) AWS Lambda"],
        answer: "B) Amazon EKS"
    },
    {
        question: "131. What is Amazon S3 used for?",
        options: ["A) File storage", "B) Block storage", "C) Database service", "D) Virtual machines"],
        answer: "A) File storage"
    },
    {
        question: "132. Which AWS service helps you manage serverless applications?",
        options: ["A) AWS CloudFormation", "B) AWS SAM", "C) AWS Lambda", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "133. What is the purpose of Amazon Route 53?",
        options: ["A) Domain registration", "B) DNS management", "C) Load balancing", "D) Content delivery"],
        answer: "B) DNS management"
    },
    {
        question: "134. Which service is best for real-time analytics on streaming data?",
        options: ["A) Amazon Kinesis", "B) Amazon RDS", "C) Amazon DynamoDB", "D) AWS Lambda"],
        answer: "A) Amazon Kinesis"
    },
    {
        question: "135. What is the primary function of Amazon VPC?",
        options: ["A) To provide a secure network environment", "B) To monitor applications", "C) To store data", "D) To manage users"],
        answer: "A) To provide a secure network environment"
    },
    {
        question: "136. What service can be used to create a deployment pipeline?",
        options: ["A) AWS CodePipeline", "B) AWS CodeBuild", "C) AWS CodeDeploy", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "137. Which AWS service provides a way to monitor and troubleshoot your applications?",
        options: ["A) AWS CloudWatch", "B) AWS CloudTrail", "C) AWS Config", "D) AWS X-Ray"],
        answer: "A) AWS CloudWatch"
    },
    {
        question: "138. What is the purpose of AWS IAM Roles?",
        options: ["A) To define user access", "B) To allow temporary access to AWS resources", "C) To store user credentials", "D) To monitor application performance"],
        answer: "B) To allow temporary access to AWS resources"
    },
    {
        question: "139. What service can be used for user authentication and authorization?",
        options: ["A) AWS IAM", "B) Amazon Cognito", "C) AWS Directory Service", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "140. What is the main benefit of using Amazon RDS for SQL databases?",
        options: ["A) Automated backups", "B) High availability", "C) Scalability", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "141. Which AWS service provides infrastructure monitoring?",
        options: ["A) AWS CloudTrail", "B) AWS CloudWatch", "C) Amazon S3", "D) Amazon RDS"],
        answer: "B) AWS CloudWatch"
    },
    {
        question: "142. What is AWS CodeDeploy used for?",
        options: ["A) To automate code deployments", "B) To monitor applications", "C) To manage user permissions", "D) To store data"],
        answer: "A) To automate code deployments"
    },
    {
        question: "143. Which AWS service provides a way to analyze data in real-time?",
        options: ["A) Amazon RDS", "B) Amazon Redshift", "C) Amazon Kinesis", "D) AWS Glue"],
        answer: "C) Amazon Kinesis"
    },
    {
        question: "144. What is the primary use of AWS Glue?",
        options: ["A) Data warehousing", "B) Data integration", "C) Data analysis", "D) Data visualization"],
        answer: "B) Data integration"
    },
    {
        question: "145. Which AWS service allows you to run code in response to events without provisioning servers?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) Amazon ECS", "D) AWS Fargate"],
        answer: "A) AWS Lambda"
    },
    {
        question: "146. What is the purpose of Amazon CloudFront?",
        options: ["A) To distribute content with low latency", "B) To store data", "C) To monitor applications", "D) To create virtual machines"],
        answer: "A) To distribute content with low latency"
    },
    {
        question: "147. Which AWS service provides a way to implement serverless architectures?",
        options: ["A) AWS Lambda", "B) AWS Fargate", "C) Amazon ECS", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "148. What is the primary benefit of using Amazon DynamoDB?",
        options: ["A) Scalability", "B) Fully managed", "C) Low latency", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "149. What service is used for continuous integration and delivery?",
        options: ["A) AWS CodePipeline", "B) AWS CodeBuild", "C) AWS CodeDeploy", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "150. Which AWS service provides a way to create a virtual private cloud?",
        options: ["A) Amazon VPC", "B) AWS CloudFormation", "C) AWS Direct Connect", "D) Amazon S3"],
        answer: "A) Amazon VPC"
    },
    {
        question: "151. What is the main function of AWS Auto Scaling?",
        options: ["A) To monitor applications", "B) To automatically adjust capacity based on demand", "C) To store data", "D) To deploy applications"],
        answer: "B) To automatically adjust capacity based on demand"
    },
    {
        question: "152. What is AWS Elastic Beanstalk used for?",
        options: ["A) To deploy web applications", "B) To store data", "C) To monitor applications", "D) To manage users"],
        answer: "A) To deploy web applications"
    },
    {
        question: "153. Which AWS service provides a managed environment for Docker containers?",
        options: ["A) Amazon ECS", "B) AWS Lambda", "C) Amazon EC2", "D) AWS Elastic Beanstalk"],
        answer: "A) Amazon ECS"
    },
    {
        question: "154. What is the primary use of Amazon Redshift?",
        options: ["A) Data warehousing", "B) Data analysis", "C) Data storage", "D) Application hosting"],
        answer: "A) Data warehousing"
    },
    {
        question: "155. What is AWS Secrets Manager used for?",
        options: ["A) To store and manage secrets", "B) To monitor applications", "C) To deploy applications", "D) To manage user permissions"],
        answer: "A) To store and manage secrets"
    },
    {
        question: "156. What is the purpose of AWS Config?",
        options: ["A) To monitor compliance", "B) To store data", "C) To create virtual machines", "D) To manage user permissions"],
        answer: "A) To monitor compliance"
    },
    {
        question: "157. Which service can be used to set up a data lake?",
        options: ["A) Amazon RDS", "B) Amazon S3", "C) AWS Glue", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "158. What is the primary function of AWS Lambda?",
        options: ["A) To run code without provisioning servers", "B) To monitor applications", "C) To store data", "D) To manage user permissions"],
        answer: "A) To run code without provisioning servers"
    },
    {
        question: "159. Which AWS service provides a way to create and manage APIs?",
        options: ["A) AWS Lambda", "B) Amazon API Gateway", "C) AWS CloudFormation", "D) Amazon S3"],
        answer: "B) Amazon API Gateway"
    },
    {
        question: "160. What is the main benefit of using AWS Organizations?",
        options: ["A) To manage billing across multiple accounts", "B) To store data", "C) To monitor applications", "D) To deploy applications"],
        answer: "A) To manage billing across multiple accounts"
    },
    {
        question: "161. Which AWS service provides managed relational databases?",
        options: ["A) Amazon RDS", "B) Amazon S3", "C) Amazon EC2", "D) AWS Lambda"],
        answer: "A) Amazon RDS"
    },
    {
        question: "162. What does the AWS Shared Responsibility Model refer to?",
        options: ["A) Responsibility for data security", "B) Responsibility for application performance", "C) Responsibility between AWS and customers", "D) Responsibility for hardware maintenance"],
        answer: "C) Responsibility between AWS and customers"
    },
    {
        question: "163. Which service provides insights into AWS resource usage?",
        options: ["A) AWS Cost Explorer", "B) AWS CloudTrail", "C) AWS CloudWatch", "D) AWS Config"],
        answer: "A) AWS Cost Explorer"
    },
    {
        question: "164. What is the purpose of AWS CloudTrail?",
        options: ["A) To monitor application performance", "B) To track user activity and API usage", "C) To manage user permissions", "D) To create virtual machines"],
        answer: "B) To track user activity and API usage"
    },
    {
        question: "165. What service helps to distribute applications across multiple regions?",
        options: ["A) Amazon Route 53", "B) AWS Global Accelerator", "C) AWS Direct Connect", "D) Amazon VPC"],
        answer: "B) AWS Global Accelerator"
    },
    {
        question: "166. Which AWS service is used for real-time data processing?",
        options: ["A) AWS Lambda", "B) Amazon Kinesis", "C) Amazon S3", "D) Amazon DynamoDB"],
        answer: "B) Amazon Kinesis"
    },
    {
        question: "167. Which AWS service provides a way to run applications without provisioning servers?",
        options: ["A) Amazon EC2", "B) AWS Lambda", "C) Amazon ECS", "D) Amazon RDS"],
        answer: "B) AWS Lambda"
    },
    {
        question: "168. What is Amazon Athena used for?",
        options: ["A) Data warehousing", "B) Running SQL queries on S3 data", "C) Storing data", "D) Monitoring applications"],
        answer: "B) Running SQL queries on S3 data"
    },
    {
        question: "169. Which AWS service allows you to create and manage virtual servers?",
        options: ["A) Amazon EC2", "B) AWS Lambda", "C) Amazon RDS", "D) Amazon VPC"],
        answer: "A) Amazon EC2"
    },
    {
        question: "170. What is the main purpose of Amazon S3?",
        options: ["A) To provide a relational database", "B) To store and retrieve any amount of data", "C) To run applications", "D) To monitor performance"],
        answer: "B) To store and retrieve any amount of data"
    },
    {
        question: "171. Which AWS service can automatically manage your resources based on your defined policies?",
        options: ["A) AWS CloudFormation", "B) AWS Config", "C) AWS Auto Scaling", "D) AWS Systems Manager"],
        answer: "C) AWS Auto Scaling"
    },
    {
        question: "172. Which service is designed for serverless machine learning?",
        options: ["A) Amazon SageMaker", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon EKS"],
        answer: "A) Amazon SageMaker"
    },
    {
        question: "173. What is the primary function of AWS Direct Connect?",
        options: ["A) To create virtual machines", "B) To provide a dedicated network connection", "C) To store data", "D) To monitor applications"],
        answer: "B) To provide a dedicated network connection"
    },
    {
        question: "174. Which AWS service provides a way to monitor and manage resources?",
        options: ["A) AWS Systems Manager", "B) Amazon CloudWatch", "C) AWS Config", "D) AWS CloudTrail"],
        answer: "B) Amazon CloudWatch"
    },
    {
        question: "175. Which AWS service provides a content delivery network?",
        options: ["A) AWS CloudFront", "B) Amazon S3", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) AWS CloudFront"
    },
    {
        question: "176. What is the purpose of AWS Elastic Load Balancing?",
        options: ["A) To distribute incoming application traffic", "B) To store data", "C) To run code", "D) To manage user access"],
        answer: "A) To distribute incoming application traffic"
    },
    {
        question: "177. Which AWS service allows you to create and manage serverless applications?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) Amazon S3", "D) AWS CloudFormation"],
        answer: "A) AWS Lambda"
    },
    {
        question: "178. What is the main purpose of AWS Identity and Access Management (IAM)?",
        options: ["A) To create virtual machines", "B) To manage user permissions", "C) To monitor applications", "D) To store data"],
        answer: "B) To manage user permissions"
    },
    {
        question: "179. Which service is used for monitoring AWS resources and applications?",
        options: ["A) AWS CloudTrail", "B) AWS CloudWatch", "C) AWS Config", "D) AWS Trusted Advisor"],
        answer: "B) AWS CloudWatch"
    },
    {
        question: "180. What is the purpose of Amazon Route 53?",
        options: ["A) To store data", "B) To manage domain name registration and DNS", "C) To deploy applications", "D) To monitor performance"],
        answer: "B) To manage domain name registration and DNS"
    },
    {
        question: "181. Which AWS service provides the ability to create and manage APIs?",
        options: ["A) Amazon API Gateway", "B) AWS Lambda", "C) Amazon S3", "D) AWS CloudFormation"],
        answer: "A) Amazon API Gateway"
    },
    {
        question: "182. What does AWS Lambda use to run your code?",
        options: ["A) Containers", "B) Virtual machines", "C) Dedicated servers", "D) Physical hardware"],
        answer: "A) Containers"
    },
    {
        question: "183. Which AWS service helps to automate deployment of applications?",
        options: ["A) AWS CodeDeploy", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) AWS CodeDeploy"
    },
    {
        question: "184. What is the primary use of AWS Elastic Beanstalk?",
        options: ["A) To monitor applications", "B) To deploy and manage applications", "C) To store data", "D) To create virtual machines"],
        answer: "B) To deploy and manage applications"
    },
    {
        question: "185. What is the function of Amazon S3 Glacier?",
        options: ["A) Data storage for infrequently accessed data", "B) Real-time data processing", "C) Data warehousing", "D) Application hosting"],
        answer: "A) Data storage for infrequently accessed data"
    },
    {
        question: "186. Which AWS service can be used to automate database backups?",
        options: ["A) AWS Backup", "B) AWS Lambda", "C) Amazon RDS", "D) Amazon S3"],
        answer: "A) AWS Backup"
    },
    {
        question: "187. What is AWS CloudFormation primarily used for?",
        options: ["A) To create and manage AWS resources", "B) To monitor applications", "C) To manage user permissions", "D) To deploy applications"],
        answer: "A) To create and manage AWS resources"
    },
    {
        question: "188. Which AWS service provides a way to run Kubernetes clusters?",
        options: ["A) Amazon EKS", "B) AWS Fargate", "C) AWS Lambda", "D) Amazon ECS"],
        answer: "A) Amazon EKS"
    },
    {
        question: "189. What is the main benefit of using AWS Global Accelerator?",
        options: ["A) Improved application performance", "B) Data storage", "C) Virtual machine management", "D) User authentication"],
        answer: "A) Improved application performance"
    },
    {
        question: "190. Which service is used for monitoring AWS costs and usage?",
        options: ["A) AWS Budgets", "B) AWS CloudTrail", "C) AWS Cost Explorer", "D) AWS Config"],
        answer: "C) AWS Cost Explorer"
    },
    {
        question: "191. What is Amazon EBS used for?",
        options: ["A) To store object data", "B) To provide block storage for EC2 instances", "C) To run applications", "D) To monitor performance"],
        answer: "B) To provide block storage for EC2 instances"
    },
    {
        question: "192. What is the function of AWS Trusted Advisor?",
        options: ["A) To provide cost optimization recommendations", "B) To manage user permissions", "C) To monitor applications", "D) To create virtual machines"],
        answer: "A) To provide cost optimization recommendations"
    },
    {
        question: "193. Which AWS service is best for event-driven architectures?",
        options: ["A) Amazon SNS", "B) AWS Lambda", "C) Amazon S3", "D) Amazon EC2"],
        answer: "B) AWS Lambda"
    },
    {
        question: "194. What is Amazon DynamoDB?",
        options: ["A) A relational database", "B) A managed NoSQL database service", "C) A data warehouse", "D) A caching service"],
        answer: "B) A managed NoSQL database service"
    },
    {
        question: "195. What does Amazon RDS support?",
        options: ["A) SQL databases only", "B) NoSQL databases only", "C) Both SQL and NoSQL databases", "D) Data lakes only"],
        answer: "A) SQL databases only"
    },
    {
        question: "196. What is the main purpose of AWS Config?",
        options: ["A) To track resource configurations", "B) To monitor performance", "C) To create virtual machines", "D) To store data"],
        answer: "A) To track resource configurations"
    },
    {
        question: "197. Which AWS service allows for serverless data warehousing?",
        options: ["A) Amazon Redshift", "B) Amazon Aurora", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) Amazon Redshift"
    },
    {
        question: "198. What is the main function of AWS Step Functions?",
        options: ["A) To automate application deployment", "B) To coordinate multiple AWS services into serverless workflows", "C) To monitor application performance", "D) To manage user permissions"],
        answer: "B) To coordinate multiple AWS services into serverless workflows"
    },
    {
        question: "199. Which AWS service is used to build data lakes?",
        options: ["A) AWS Lake Formation", "B) Amazon S3", "C) Amazon Redshift", "D) AWS Glue"],
        answer: "A) AWS Lake Formation"
    },
    {
        question: "200. What is the purpose of Amazon Aurora?",
        options: ["A) A relational database engine compatible with MySQL and PostgreSQL", "B) A NoSQL database", "C) A caching service", "D) A file storage service"],
        answer: "A) A relational database engine compatible with MySQL and PostgreSQL"
    },
    {
        question: "201. Which AWS service helps you to find and fix performance issues?",
        options: ["A) AWS CloudTrail", "B) Amazon CloudWatch", "C) AWS Config", "D) AWS X-Ray"],
        answer: "B) Amazon CloudWatch"
    },
    {
        question: "202. What does Amazon Inspector do?",
        options: ["A) Monitors application performance", "B) Analyzes security vulnerabilities", "C) Manages user access", "D) Creates virtual machines"],
        answer: "B) Analyzes security vulnerabilities"
    },
    {
        question: "203. Which AWS service provides insights into the performance of your applications?",
        options: ["A) AWS CloudTrail", "B) AWS CloudWatch", "C) AWS Config", "D) AWS CodeDeploy"],
        answer: "B) AWS CloudWatch"
    },
    {
        question: "204. What is the main purpose of Amazon SNS?",
        options: ["A) To store data", "B) To send notifications and messages", "C) To run applications", "D) To monitor performance"],
        answer: "B) To send notifications and messages"
    },
    {
        question: "205. What type of storage does Amazon EFS provide?",
        options: ["A) Block storage", "B) Object storage", "C) File storage", "D) Data warehouse"],
        answer: "C) File storage"
    },
    {
        question: "206. What does AWS Glue do?",
        options: ["A) Data integration and ETL (Extract, Transform, Load)", "B) Real-time data processing", "C) Data storage", "D) Application deployment"],
        answer: "A) Data integration and ETL (Extract, Transform, Load)"
    },
    {
        question: "207. What is the primary benefit of using AWS Lambda?",
        options: ["A) Cost savings", "B) Reduced operational overhead", "C) Scalability", "D) All of the above"],
        answer: "D) All of the above"
    },
    {
        question: "208. Which AWS service is used for machine learning model deployment?",
        options: ["A) AWS SageMaker", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon S3"],
        answer: "A) AWS SageMaker"
    },
    {
        question: "209. What does Amazon CloudFront do?",
        options: ["A) Manages DNS", "B) Distributes content globally", "C) Stores data", "D) Monitors applications"],
        answer: "B) Distributes content globally"
    },
    {
        question: "210. Which service allows you to create virtual private networks?",
        options: ["A) Amazon VPC", "B) AWS Direct Connect", "C) Amazon EC2", "D) AWS CloudFormation"],
        answer: "A) Amazon VPC"
    },
    {
        question: "211. What is the purpose of AWS Secrets Manager?",
        options: ["A) To manage user permissions", "B) To store and manage sensitive information", "C) To monitor applications", "D) To create virtual machines"],
        answer: "B) To store and manage sensitive information"
    },
    {
        question: "212. What is AWS Lambda@Edge used for?",
        options: ["A) Running functions in response to CloudFront events", "B) Monitoring applications", "C) Storing data", "D) Creating APIs"],
        answer: "A) Running functions in response to CloudFront events"
    },
    {
        question: "213. Which AWS service can help with data lake formation?",
        options: ["A) Amazon S3", "B) AWS Glue", "C) Amazon Redshift", "D) AWS Lake Formation"],
        answer: "D) AWS Lake Formation"
    },
    {
        question: "214. What is the purpose of AWS Elastic Beanstalk?",
        options: ["A) To manage virtual machines", "B) To automatically handle deployment, capacity provisioning, load balancing, and monitoring", "C) To store data", "D) To create APIs"],
        answer: "B) To automatically handle deployment, capacity provisioning, load balancing, and monitoring"
    },
    {
        question: "215. What is Amazon RDS Multi-AZ deployment used for?",
        options: ["A) Data replication across regions", "B) Automatic failover for high availability", "C) Increased storage capacity", "D) Improved performance"],
        answer: "B) Automatic failover for high availability"
    },
    {
        question: "216. What is Amazon Redshift primarily used for?",
        options: ["A) Block storage", "B) Data warehousing and analytics", "C) Object storage", "D) Application deployment"],
        answer: "B) Data warehousing and analytics"
    },
    {
        question: "217. Which AWS service is best for data migration?",
        options: ["A) AWS Snowball", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon S3"],
        answer: "A) AWS Snowball"
    },
    {
        question: "218. What does AWS CodePipeline do?",
        options: ["A) Automates the software release process", "B) Monitors application performance", "C) Manages user access", "D) Stores data"],
        answer: "A) Automates the software release process"
    },
    {
        question: "219. Which service is best for creating and managing serverless applications?",
        options: ["A) AWS CloudFormation", "B) AWS Lambda", "C) AWS Elastic Beanstalk", "D) AWS EC2"],
        answer: "B) AWS Lambda"
    },
    {
        question: "220. What is the main function of Amazon CloudWatch Logs?",
        options: ["A) To monitor and store logs from AWS resources", "B) To create virtual machines", "C) To manage user permissions", "D) To run applications"],
        answer: "A) To monitor and store logs from AWS resources"
    },
    {
        question: "221. What does Amazon API Gateway enable you to do?",
        options: ["A) Create and publish APIs", "B) Store data", "C) Monitor applications", "D) Manage user permissions"],
        answer: "A) Create and publish APIs"
    },
    {
        question: "222. What is the purpose of AWS CloudFormation?",
        options: ["A) To automate the provisioning of AWS resources", "B) To monitor application performance", "C) To create virtual machines", "D) To store data"],
        answer: "A) To automate the provisioning of AWS resources"
    },
    {
        question: "223. Which service is used to manage access to AWS resources?",
        options: ["A) AWS IAM", "B) AWS Lambda", "C) Amazon EC2", "D) AWS CloudTrail"],
        answer: "A) AWS IAM"
    },
    {
        question: "224. What is AWS CloudTrail used for?",
        options: ["A) Monitoring application performance", "B) Logging AWS API calls", "C) Creating virtual machines", "D) Storing data"],
        answer: "B) Logging AWS API calls"
    },
    {
        question: "225. What does Amazon Route 53 provide?",
        options: ["A) Domain registration and DNS service", "B) Content delivery", "C) Application monitoring", "D) Data warehousing"],
        answer: "A) Domain registration and DNS service"
    },
    {
        question: "226. What is the purpose of AWS Service Catalog?",
        options: ["A) To manage user permissions", "B) To create and manage catalogs of IT services", "C) To monitor application performance", "D) To store data"],
        answer: "B) To create and manage catalogs of IT services"
    },
    {
        question: "227. Which service provides a content delivery network (CDN)?",
        options: ["A) Amazon CloudFront", "B) Amazon S3", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) Amazon CloudFront"
    },
    {
        question: "228. What is the purpose of AWS Batch?",
        options: ["A) To run batch computing jobs at any scale", "B) To manage user permissions", "C) To store data", "D) To create APIs"],
        answer: "A) To run batch computing jobs at any scale"
    },
    {
        question: "229. What is Amazon S3 Glacier used for?",
        options: ["A) Long-term data archiving", "B) Data warehousing", "C) Real-time data processing", "D) File storage"],
        answer: "A) Long-term data archiving"
    },
    {
        question: "230. What does AWS OpsWorks do?",
        options: ["A) Configuration management service", "B) Data integration and ETL", "C) Monitoring application performance", "D) Creating APIs"],
        answer: "A) Configuration management service"
    },
    {
        question: "231. Which AWS service can help you manage multiple AWS accounts?",
        options: ["A) AWS Organizations", "B) AWS IAM", "C) AWS CloudFormation", "D) AWS Config"],
        answer: "A) AWS Organizations"
    },
    {
        question: "232. What is the purpose of AWS Snowball?",
        options: ["A) To migrate large amounts of data into and out of AWS", "B) To manage user permissions", "C) To monitor applications", "D) To create virtual machines"],
        answer: "A) To migrate large amounts of data into and out of AWS"
    },
    {
        question: "233. Which AWS service is used to store objects?",
        options: ["A) Amazon S3", "B) Amazon EBS", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) Amazon S3"
    },
    {
        question: "234. What is the main benefit of AWS Direct Connect?",
        options: ["A) Reduced costs", "B) Increased bandwidth", "C) Private connectivity to AWS", "D) Improved security"],
        answer: "C) Private connectivity to AWS"
    },
    {
        question: "235. Which AWS service is used to create serverless applications?",
        options: ["A) AWS Lambda", "B) AWS Elastic Beanstalk", "C) Amazon EC2", "D) Amazon S3"],
        answer: "A) AWS Lambda"
    },
    {
        question: "236. What is the main purpose of AWS CodeDeploy?",
        options: ["A) Automating application deployment", "B) Monitoring application performance", "C) Storing data", "D) Managing user permissions"],
        answer: "A) Automating application deployment"
    },
    {
        question: "237. Which service helps you automate infrastructure management?",
        options: ["A) AWS CloudFormation", "B) AWS CodePipeline", "C) Amazon S3", "D) Amazon EC2"],
        answer: "A) AWS CloudFormation"
    },
    {
        question: "238. What is Amazon CloudSearch used for?",
        options: ["A) Full-text search and indexing", "B) Data warehousing", "C) Monitoring application performance", "D) Storing data"],
        answer: "A) Full-text search and indexing"
    },
    {
        question: "239. Which AWS service is designed for building APIs?",
        options: ["A) Amazon API Gateway", "B) AWS Lambda", "C) Amazon EC2", "D) AWS Step Functions"],
        answer: "A) Amazon API Gateway"
    },
    {
        question: "240. What is the purpose of Amazon VPC?",
        options: ["A) To provide a virtual network in the AWS cloud", "B) To store data", "C) To monitor application performance", "D) To create APIs"],
        answer: "A) To provide a virtual network in the AWS cloud"
    },
    {
        question: "241. Which AWS service provides a fully managed Kubernetes service?",
        options: ["A) Amazon ECS", "B) Amazon EKS", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "B) Amazon EKS"
    },
    {
        question: "242. What is the purpose of Amazon EKS?",
        options: ["A) To run Docker containers", "B) To manage Kubernetes clusters", "C) To monitor application performance", "D) To store data"],
        answer: "B) To manage Kubernetes clusters"
    },
    {
        question: "243. What does AWS Device Farm do?",
        options: ["A) Tests mobile and web applications across real devices", "B) Manages user permissions", "C) Monitors application performance", "D) Creates virtual machines"],
        answer: "A) Tests mobile and web applications across real devices"
    },
    {
        question: "244. Which AWS service is best for real-time streaming data?",
        options: ["A) Amazon Kinesis", "B) AWS Lambda", "C) Amazon S3", "D) Amazon RDS"],
        answer: "A) Amazon Kinesis"
    },
    {
        question: "245. What is the purpose of AWS WAF?",
        options: ["A) To protect web applications from common web exploits", "B) To monitor application performance", "C) To manage user permissions", "D) To create APIs"],
        answer: "A) To protect web applications from common web exploits"
    },
    {
        question: "246. Which AWS service can be used to analyze large data sets?",
        options: ["A) Amazon Redshift", "B) Amazon S3", "C) AWS Lambda", "D) Amazon EC2"],
        answer: "A) Amazon Redshift"
    },
    {
        question: "247. What is the purpose of AWS X-Ray?",
        options: ["A) To analyze and debug applications", "B) To store data", "C) To manage user permissions", "D) To create virtual machines"],
        answer: "A) To analyze and debug applications"
    },
    {
        question: "248. Which AWS service provides a fully managed data lake?",
        options: ["A) AWS Lake Formation", "B) Amazon S3", "C) Amazon RDS", "D) AWS Glue"],
        answer: "A) AWS Lake Formation"
    },
    {
        question: "249. What is the purpose of Amazon S3 Select?",
        options: ["A) To retrieve a subset of data from an object", "B) To store data", "C) To monitor applications", "D) To create APIs"],
        answer: "A) To retrieve a subset of data from an object"
    },
    {
        question: "250. What does Amazon Cognito do?",
        options: ["A) Manages user authentication and access", "B) Monitors application performance", "C) Creates virtual machines", "D) Stores data"],
        answer: "A) Manages user authentication and access"
    },
    {
        question: "251. What is AWS Config used for?",
        options: ["A) To track configuration changes", "B) To store data", "C) To create virtual machines", "D) To monitor applications"],
        answer: "A) To track configuration changes"
    },
    {
        question: "252. Which AWS service allows you to create and manage APIs for your applications?",
        options: ["A) Amazon API Gateway", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) Amazon API Gateway"
    },
    {
        question: "253. What is the main purpose of AWS Elastic Beanstalk?",
        options: ["A) To deploy and manage applications", "B) To store data", "C) To monitor application performance", "D) To manage user permissions"],
        answer: "A) To deploy and manage applications"
    },
    {
        question: "254. Which service is used for data warehousing?",
        options: ["A) Amazon Redshift", "B) Amazon S3", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) Amazon Redshift"
    },
    {
        question: "255. What does AWS Cloud9 provide?",
        options: ["A) A cloud-based IDE for coding", "B) A database service", "C) A monitoring tool", "D) A content delivery network"],
        answer: "A) A cloud-based IDE for coding"
    },
    {
        question: "256. What is the purpose of AWS CodePipeline?",
        options: ["A) To automate the software release process", "B) To monitor application performance", "C) To store data", "D) To manage user permissions"],
        answer: "A) To automate the software release process"
    },
    {
        question: "257. Which service is used to host a static website on AWS?",
        options: ["A) Amazon S3", "B) Amazon EC2", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon S3"
    },
    {
        question: "258. What does Amazon Athena allow you to do?",
        options: ["A) Query data in S3 using SQL", "B) Store data", "C) Monitor application performance", "D) Create APIs"],
        answer: "A) Query data in S3 using SQL"
    },
    {
        question: "259. What is the purpose of AWS DMS?",
        options: ["A) To migrate databases to AWS", "B) To store data", "C) To monitor applications", "D) To create APIs"],
        answer: "A) To migrate databases to AWS"
    },
    {
        question: "260. Which AWS service is best for deploying machine learning models?",
        options: ["A) Amazon SageMaker", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) Amazon SageMaker"
    },
    {
        question: "261. What is the main purpose of AWS Step Functions?",
        options: ["A) To coordinate distributed applications", "B) To monitor application performance", "C) To store data", "D) To manage user permissions"],
        answer: "A) To coordinate distributed applications"
    },
    {
        question: "262. Which service can help you manage your data lifecycle?",
        options: ["A) AWS Data Lifecycle Manager", "B) AWS Lambda", "C) Amazon S3", "D) Amazon RDS"],
        answer: "A) AWS Data Lifecycle Manager"
    },
    {
        question: "263. What is Amazon RDS used for?",
        options: ["A) To manage relational databases", "B) To store unstructured data", "C) To monitor applications", "D) To create APIs"],
        answer: "A) To manage relational databases"
    },
    {
        question: "264. What is the purpose of Amazon CloudWatch?",
        options: ["A) To monitor AWS resources and applications", "B) To store data", "C) To create virtual machines", "D) To manage user permissions"],
        answer: "A) To monitor AWS resources and applications"
    },
    {
        question: "265. Which AWS service is designed for building chatbots?",
        options: ["A) Amazon Lex", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) Amazon Lex"
    },
    {
        question: "266. What is the purpose of AWS Glue?",
        options: ["A) Data integration and ETL", "B) To monitor applications", "C) To manage user permissions", "D) To create APIs"],
        answer: "A) Data integration and ETL"
    },
    {
        question: "267. Which AWS service can be used to create a virtual private cloud?",
        options: ["A) Amazon VPC", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon S3"],
        answer: "A) Amazon VPC"
    },
    {
        question: "268. What is the main benefit of using Amazon RDS?",
        options: ["A) Automated backups and scaling", "B) Manual backups only", "C) No scaling options", "D) Requires extensive configuration"],
        answer: "A) Automated backups and scaling"
    },
    {
        question: "269. What does AWS OpsWorks use for configuration management?",
        options: ["A) Chef and Puppet", "B) AWS CloudFormation", "C) Amazon EC2", "D) AWS Lambda"],
        answer: "A) Chef and Puppet"
    },
    {
        question: "270. Which service is used for monitoring AWS resources?",
        options: ["A) Amazon CloudWatch", "B) AWS Config", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "271. What is the purpose of AWS Data Pipeline?",
        options: ["A) To automate data movement and transformation", "B) To monitor applications", "C) To manage user permissions", "D) To create APIs"],
        answer: "A) To automate data movement and transformation"
    },
    {
        question: "272. Which AWS service allows you to run applications without provisioning servers?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS Elastic Beanstalk", "D) Amazon RDS"],
        answer: "A) AWS Lambda"
    },
    {
        question: "273. What is Amazon EFS used for?",
        options: ["A) File storage for Amazon EC2", "B) Object storage", "C) Data warehousing", "D) Monitoring applications"],
        answer: "A) File storage for Amazon EC2"
    },
    {
        question: "274. What does AWS Batch do?",
        options: ["A) Runs batch computing jobs", "B) Monitors application performance", "C) Manages user permissions", "D) Creates APIs"],
        answer: "A) Runs batch computing jobs"
    },
    {
        question: "275. What is the main purpose of AWS Marketplace?",
        options: ["A) To buy and sell software and services", "B) To store data", "C) To manage user permissions", "D) To monitor applications"],
        answer: "A) To buy and sell software and services"
    },
    {
        question: "276. Which service can be used to create data lakes?",
        options: ["A) AWS Lake Formation", "B) Amazon S3", "C) Amazon RDS", "D) AWS Glue"],
        answer: "A) AWS Lake Formation"
    },
    {
        question: "277. What does Amazon EMR do?",
        options: ["A) Processes big data using Apache Hadoop", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Processes big data using Apache Hadoop"
    },
    {
        question: "278. What is the purpose of Amazon Personalize?",
        options: ["A) To build personalized recommendations", "B) To monitor applications", "C) To manage user permissions", "D) To create APIs"],
        answer: "A) To build personalized recommendations"
    },
    {
        question: "279. Which AWS service can help you deploy machine learning models?",
        options: ["A) Amazon SageMaker", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) Amazon SageMaker"
    },
    {
        question: "280. What is the main purpose of AWS S3 Transfer Acceleration?",
        options: ["A) To speed up file uploads to S3", "B) To store data", "C) To monitor applications", "D) To create APIs"],
        answer: "A) To speed up file uploads to S3"
    },
    {
        question: "281. What is the purpose of Amazon QuickSight?",
        options: ["A) Business intelligence and data visualization", "B) To manage user permissions", "C) To monitor applications", "D) To create APIs"],
        answer: "A) Business intelligence and data visualization"
    },
    {
        question: "282. What is the main benefit of AWS Global Accelerator?",
        options: ["A) Improved availability and performance", "B) Reduced costs", "C) Increased security", "D) Simplified management"],
        answer: "A) Improved availability and performance"
    },
    {
        question: "283. Which AWS service provides a fully managed NoSQL database?",
        options: ["A) Amazon DynamoDB", "B) Amazon RDS", "C) Amazon Redshift", "D) AWS Lambda"],
        answer: "A) Amazon DynamoDB"
    },
    {
        question: "284. What does AWS CloudFormation do?",
        options: ["A) Automates resource provisioning", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Automates resource provisioning"
    },
    {
        question: "285. What is the main purpose of Amazon Route 53?",
        options: ["A) DNS web service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) DNS web service"
    },
    {
        question: "286. Which AWS service is used for identity and access management?",
        options: ["A) AWS IAM", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) AWS IAM"
    },
    {
        question: "287. What is the main purpose of AWS Security Hub?",
        options: ["A) Centralized security management", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Centralized security management"
    },
    {
        question: "288. What does AWS CodeCommit provide?",
        options: ["A) A fully managed source control service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) A fully managed source control service"
    },
    {
        question: "289. What is the purpose of AWS CloudTrail?",
        options: ["A) To log AWS account activity", "B) To monitor application performance", "C) To store data", "D) To create APIs"],
        answer: "A) To log AWS account activity"
    },
    {
        question: "290. Which service is used for managing container orchestration?",
        options: ["A) Amazon ECS", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) Amazon ECS"
    },
    {
        question: "291. What is Amazon SQS used for?",
        options: ["A) Message queuing service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Message queuing service"
    },
    {
        question: "292. What is the purpose of AWS IoT Core?",
        options: ["A) To connect IoT devices to the cloud", "B) To monitor application performance", "C) To store data", "D) To create APIs"],
        answer: "A) To connect IoT devices to the cloud"
    },
    {
        question: "293. Which AWS service is used for managing API traffic?",
        options: ["A) Amazon API Gateway", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon S3"],
        answer: "A) Amazon API Gateway"
    },
    {
        question: "294. What does AWS Elastic Load Balancing do?",
        options: ["A) Distributes incoming application traffic", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Distributes incoming application traffic"
    },
    {
        question: "295. What is the purpose of AWS Shield?",
        options: ["A) DDoS protection", "B) User authentication", "C) Data storage", "D) API management"],
        answer: "A) DDoS protection"
    },
    {
        question: "296. Which AWS service is designed for managing data lakes?",
        options: ["A) AWS Lake Formation", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) AWS Lake Formation"
    },
    {
        question: "297. What is the purpose of AWS Snowball?",
        options: ["A) To transfer large amounts of data", "B) To monitor application performance", "C) To create APIs", "D) To manage user permissions"],
        answer: "A) To transfer large amounts of data"
    },
    {
        question: "298. What does Amazon WorkSpaces provide?",
        options: ["A) Desktop as a service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Desktop as a service"
    },
    {
        question: "299. Which service can be used to store and analyze large datasets?",
        options: ["A) Amazon EMR", "B) Amazon RDS", "C) Amazon S3", "D) AWS Lambda"],
        answer: "A) Amazon EMR"
    },
    {
        question: "300. What is the purpose of Amazon Transcribe?",
        options: ["A) To convert speech to text", "B) To monitor applications", "C) To manage user permissions", "D) To create APIs"],
        answer: "A) To convert speech to text"
    },
    {
        question: "301. Which service is used for continuous integration and delivery?",
        options: ["A) AWS CodePipeline", "B) Amazon S3", "C) Amazon RDS", "D) AWS Lambda"],
        answer: "A) AWS CodePipeline"
    },
    {
        question: "302. What is the main benefit of using AWS WAF?",
        options: ["A) Protects applications from common web exploits", "B) Manages user permissions", "C) Stores data", "D) Monitors application performance"],
        answer: "A) Protects applications from common web exploits"
    },
    {
        question: "303. What is the purpose of AWS X-Ray?",
        options: ["A) To analyze and debug distributed applications", "B) To monitor application performance", "C) To store data", "D) To create APIs"],
        answer: "A) To analyze and debug distributed applications"
    },
    {
        question: "304. What does Amazon Kinesis do?",
        options: ["A) Processes real-time streaming data", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Processes real-time streaming data"
    },
    {
        question: "305. What is the main purpose of AWS Config?",
        options: ["A) To track AWS resource configurations", "B) To monitor application performance", "C) To store data", "D) To create APIs"],
        answer: "A) To track AWS resource configurations"
    },
    {
        question: "306. Which AWS service is used for hosting virtual servers?",
        options: ["A) Amazon EC2", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon EC2"
    },
    {
        question: "307. What is the main purpose of AWS S3 Select?",
        options: ["A) To retrieve a subset of data from S3 objects", "B) To monitor applications", "C) To store data", "D) To create APIs"],
        answer: "A) To retrieve a subset of data from S3 objects"
    },
    {
        question: "308. What is the purpose of AWS Amplify?",
        options: ["A) To build and deploy web and mobile applications", "B) To manage user permissions", "C) To monitor application performance", "D) To create APIs"],
        answer: "A) To build and deploy web and mobile applications"
    },
    {
        question: "309. What does AWS CodeDeploy do?",
        options: ["A) Automates code deployments", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Automates code deployments"
    },
    {
        question: "310. Which AWS service is best for serverless application development?",
        options: ["A) AWS Lambda", "B) Amazon EC2", "C) AWS Elastic Beanstalk", "D) Amazon RDS"],
        answer: "A) AWS Lambda"
    },
    {
        question: "311. What is the main purpose of AWS AppSync?",
        options: ["A) To manage GraphQL APIs", "B) To monitor application performance", "C) To store data", "D) To create APIs"],
        answer: "A) To manage GraphQL APIs"
    },
    {
        question: "312. Which service is used for data encryption at rest?",
        options: ["A) AWS KMS", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) AWS KMS"
    },
    {
        question: "313. What is the purpose of Amazon EBS?",
        options: ["A) Block storage for Amazon EC2", "B) Object storage", "C) Data warehousing", "D) Monitoring applications"],
        answer: "A) Block storage for Amazon EC2"
    },
    {
        question: "314. What does AWS Elastic Beanstalk do?",
        options: ["A) Simplifies application deployment", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Simplifies application deployment"
    },
    {
        question: "315. What is the main benefit of using Amazon CloudFront?",
        options: ["A) Content delivery network", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Content delivery network"
    },
    {
        question: "316. Which AWS service is used for monitoring application logs?",
        options: ["A) Amazon CloudWatch", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "317. What is the purpose of Amazon Athena?",
        options: ["A) To query data in S3 using SQL", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) To query data in S3 using SQL"
    },
    {
        question: "318. What does AWS Personalize do?",
        options: ["A) Machine learning for personalized recommendations", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Machine learning for personalized recommendations"
    },
    {
        question: "319. Which service provides managed Kubernetes?",
        options: ["A) Amazon EKS", "B) AWS Lambda", "C) Amazon EC2", "D) Amazon RDS"],
        answer: "A) Amazon EKS"
    },
    {
        question: "320. What is the main purpose of AWS Glue?",
        options: ["A) To extract, transform, and load data", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) To extract, transform, and load data"
    },
    {
        question: "321. What is AWS CodeBuild used for?",
        options: ["A) Continuous integration service", "B) Monitoring application performance", "C) Storing data", "D) Creating APIs"],
        answer: "A) Continuous integration service"
    },
    {
        question: "322. What does AWS CloudTrail provide?",
        options: ["A) API call logging", "B) Data storage", "C) User authentication", "D) Application performance monitoring"],
        answer: "A) API call logging"
    },
    {
        question: "323. Which service is best suited for distributed applications?",
        options: ["A) Amazon EKS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon EKS"
    },
    {
        question: "324. What does Amazon Aurora provide?",
        options: ["A) Managed relational database", "B) NoSQL database", "C) Data warehousing", "D) API management"],
        answer: "A) Managed relational database"
    },
    {
        question: "325. Which AWS service helps with real-time analytics?",
        options: ["A) Amazon Kinesis", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Kinesis"
    },
    {
        question: "326. What is the purpose of AWS Direct Connect?",
        options: ["A) Dedicated network connection", "B) Monitoring application performance", "C) Storing data", "D) Creating APIs"],
        answer: "A) Dedicated network connection"
    },
    {
        question: "327. What does Amazon Inspector do?",
        options: ["A) Security assessment service", "B) Data storage", "C) User authentication", "D) Application performance monitoring"],
        answer: "A) Security assessment service"
    },
    {
        question: "328. Which AWS service provides a data warehouse?",
        options: ["A) Amazon Redshift", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Redshift"
    },
    {
        question: "329. What is the purpose of Amazon QuickSight?",
        options: ["A) Business intelligence service", "B) Data storage", "C) User authentication", "D) Application performance monitoring"],
        answer: "A) Business intelligence service"
    },
    {
        question: "330. Which service can be used to create an API?",
        options: ["A) Amazon API Gateway", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon API Gateway"
    },
    {
        question: "331. What is AWS Lambda primarily used for?",
        options: ["A) Running serverless applications", "B) Storing data", "C) User authentication", "D) API management"],
        answer: "A) Running serverless applications"
    },
    {
        question: "332. What does Amazon S3 provide?",
        options: ["A) Object storage service", "B) Block storage service", "C) Relational database service", "D) API management"],
        answer: "A) Object storage service"
    },
    {
        question: "333. What is the purpose of AWS Budgets?",
        options: ["A) Cost management", "B) Application performance monitoring", "C) Data storage", "D) User authentication"],
        answer: "A) Cost management"
    },
    {
        question: "334. Which service can be used to deploy Docker containers?",
        options: ["A) Amazon ECS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon ECS"
    },
    {
        question: "335. What is the main function of AWS Elastic Beanstalk?",
        options: ["A) Application deployment", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Application deployment"
    },
    {
        question: "336. What does AWS X-Ray help with?",
        options: ["A) Debugging applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Debugging applications"
    },
    {
        question: "337. Which AWS service is designed for content delivery?",
        options: ["A) Amazon CloudFront", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudFront"
    },
    {
        question: "338. What is Amazon ElastiCache used for?",
        options: ["A) In-memory data store", "B) Data warehousing", "C) User authentication", "D) API management"],
        answer: "A) In-memory data store"
    },
    {
        question: "339. Which service provides automated backups for AWS resources?",
        options: ["A) AWS Backup", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Backup"
    },
    {
        question: "340. What is the main purpose of AWS Data Pipeline?",
        options: ["A) Data workflow management", "B) Application performance monitoring", "C) User authentication", "D) API management"],
        answer: "A) Data workflow management"
    },
    {
        question: "341. Which AWS service helps in migrating databases?",
        options: ["A) AWS Database Migration Service", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Database Migration Service"
    },
    {
        question: "342. What does Amazon SNS do?",
        options: ["A) Simple notification service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Simple notification service"
    },
    {
        question: "343. Which service is used for monitoring AWS resources?",
        options: ["A) Amazon CloudWatch", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "344. What is AWS Glue primarily used for?",
        options: ["A) Data integration", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Data integration"
    },
    {
        question: "345. Which AWS service provides DDoS protection?",
        options: ["A) AWS Shield", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Shield"
    },
    {
        question: "346. What does Amazon CloudFormation do?",
        options: ["A) Infrastructure as code", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Infrastructure as code"
    },
    {
        question: "347. What is the main benefit of using AWS IAM?",
        options: ["A) User access control", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) User access control"
    },
    {
        question: "348. Which service is best for managing user identities?",
        options: ["A) AWS IAM", "B) Amazon RDS", "C) AWS Lambda", "D) Amazon S3"],
        answer: "A) AWS IAM"
    },
    {
        question: "349. What is the purpose of Amazon Route 53?",
        options: ["A) DNS management", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) DNS management"
    },
    {
        question: "350. What does AWS KMS provide?",
        options: ["A) Key management service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Key management service"
    },
    {
        question: "351. Which service is used for building chatbots?",
        options: ["A) Amazon Lex", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Lex"
    },
    {
        question: "352. What is the purpose of Amazon SageMaker?",
        options: ["A) Machine learning model building", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Machine learning model building"
    },
    {
        question: "353. What does AWS App Runner do?",
        options: ["A) Runs containerized applications", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Runs containerized applications"
    },
    {
        question: "354. Which AWS service helps in monitoring costs?",
        options: ["A) AWS Cost Explorer", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Cost Explorer"
    },
    {
        question: "355. What is Amazon S3 Glacier used for?",
        options: ["A) Long-term data archiving", "B) Real-time data processing", "C) User authentication", "D) API management"],
        answer: "A) Long-term data archiving"
    },
    {
        question: "356. Which service can be used for data lakes?",
        options: ["A) Amazon Lake Formation", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Lake Formation"
    },
    {
        question: "357. What is the main function of Amazon S3 Transfer Acceleration?",
        options: ["A) Faster data uploads", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Faster data uploads"
    },
    {
        question: "358. Which AWS service provides a managed file storage solution?",
        options: ["A) Amazon EFS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon EFS"
    },
    {
        question: "359. What does AWS CodeDeploy do?",
        options: ["A) Automates application deployments", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Automates application deployments"
    },
    {
        question: "360. What is the purpose of Amazon RDS?",
        options: ["A) Managed relational database service", "B) Object storage service", "C) User authentication", "D) API management"],
        answer: "A) Managed relational database service"
    },
    {
        question: "361. What does AWS DataSync do?",
        options: ["A) Data transfer between on-premises and AWS", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Data transfer between on-premises and AWS"
    },
    {
        question: "362. Which service helps in managing large-scale machine learning workflows?",
        options: ["A) Amazon SageMaker", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon SageMaker"
    },
    {
        question: "363. What is AWS Control Tower used for?",
        options: ["A) Multi-account governance", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Multi-account governance"
    },
    {
        question: "364. Which service is used to schedule AWS Lambda functions?",
        options: ["A) Amazon EventBridge", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon EventBridge"
    },
    {
        question: "365. What does Amazon S3 Object Lambda allow you to do?",
        options: ["A) Modify object data when retrieved", "B) Store data", "C) User authentication", "D) API management"],
        answer: "A) Modify object data when retrieved"
    },
    {
        question: "366. What is the main benefit of using AWS Well-Architected Tool?",
        options: ["A) Assess architectural best practices", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Assess architectural best practices"
    },
    {
        question: "367. Which service provides a managed search solution?",
        options: ["A) Amazon OpenSearch Service", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon OpenSearch Service"
    },
    {
        question: "368. What is AWS Elastic Load Balancing used for?",
        options: ["A) Distributing incoming traffic across multiple targets", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Distributing incoming traffic across multiple targets"
    },
    {
        question: "369. What does Amazon Chime provide?",
        options: ["A) Communication service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Communication service"
    },
    {
        question: "370. Which service allows you to run machine learning inference at the edge?",
        options: ["A) AWS Lambda@Edge", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Lambda@Edge"
    },
    {
        question: "371. What is the main function of AWS CodePipeline?",
        options: ["A) Continuous integration and delivery", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Continuous integration and delivery"
    },
    {
        question: "372. What does Amazon RDS Multi-AZ provide?",
        options: ["A) High availability", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) High availability"
    },
    {
        question: "373. Which service helps with mobile application development?",
        options: ["A) AWS Amplify", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Amplify"
    },
    {
        question: "374. What is the main benefit of using Amazon CloudFront with S3?",
        options: ["A) Faster content delivery", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Faster content delivery"
    },
    {
        question: "375. What does AWS Step Functions allow you to create?",
        options: ["A) Serverless workflows", "B) Monitors application performance", "C) Stores data", "D) Creates APIs"],
        answer: "A) Serverless workflows"
    },
    {
        question: "376. Which AWS service helps with compliance auditing?",
        options: ["A) AWS Config", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Config"
    },
    {
        question: "377. What is AWS Resource Access Manager used for?",
        options: ["A) Sharing resources between accounts", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Sharing resources between accounts"
    },
    {
        question: "378. Which service provides a way to execute code in response to events?",
        options: ["A) AWS Lambda", "B) Amazon S3", "C) AWS CodeDeploy", "D) Amazon RDS"],
        answer: "A) AWS Lambda"
    },
    {
        question: "379. What does Amazon EBS provide?",
        options: ["A) Block storage for EC2 instances", "B) Object storage service", "C) User authentication", "D) API management"],
        answer: "A) Block storage for EC2 instances"
    },
    {
        question: "380. What is the main function of AWS Secrets Manager?",
        options: ["A) Manage sensitive information", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage sensitive information"
    },
    {
        question: "381. What does AWS Service Catalog help with?",
        options: ["A) Managing approved services", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managing approved services"
    },
    {
        question: "382. Which service is used to manage data across different AWS accounts?",
        options: ["A) AWS Organizations", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Organizations"
    },
    {
        question: "383. What is the purpose of AWS App Mesh?",
        options: ["A) Service mesh for microservices", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Service mesh for microservices"
    },
    {
        question: "384. Which service provides a way to analyze large data sets?",
        options: ["A) Amazon EMR", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon EMR"
    },
    {
        question: "385. What does AWS IoT Core do?",
        options: ["A) Connects IoT devices to the cloud", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Connects IoT devices to the cloud"
    },
    {
        question: "386. What is the purpose of AWS Snowball?",
        options: ["A) Data transfer solution", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Data transfer solution"
    },
    {
        question: "387. Which service provides a unified view of billing and cost management?",
        options: ["A) AWS Billing Dashboard", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Billing Dashboard"
    },
    {
        question: "388. What does Amazon Athena allow you to do?",
        options: ["A) Query data in S3 using SQL", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Query data in S3 using SQL"
    },
    {
        question: "389. What is AWS Auto Scaling used for?",
        options: ["A) Automatically adjust resource capacity", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Automatically adjust resource capacity"
    },
    {
        question: "390. What does Amazon QuickSight provide?",
        options: ["A) Business intelligence service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Business intelligence service"
    },
    {
        question: "391. What is the purpose of Amazon Inspector?",
        options: ["A) Security assessment service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Security assessment service"
    },
    {
        question: "392. Which service provides a fully managed NoSQL database?",
        options: ["A) Amazon DynamoDB", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon DynamoDB"
    },
    {
        question: "393. What does AWS WAF do?",
        options: ["A) Protects web applications from common threats", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Protects web applications from common threats"
    },
    {
        question: "394. What is the main benefit of using Amazon Route 53?",
        options: ["A) DNS service with routing capabilities", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) DNS service with routing capabilities"
    },
    {
        question: "395. What does Amazon Transcribe do?",
        options: ["A) Automatic speech recognition", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Automatic speech recognition"
    },
    {
        question: "396. Which service helps with content delivery?",
        options: ["A) Amazon CloudFront", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudFront"
    },
    {
        question: "397. What is the main function of AWS Cost Explorer?",
        options: ["A) Analyze spending patterns", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Analyze spending patterns"
    },
    {
        question: "398. What does AWS Shield provide?",
        options: ["A) DDoS protection", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) DDoS protection"
    },
    {
        question: "399. Which service provides real-time monitoring of applications?",
        options: ["A) Amazon CloudWatch", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "400. What is the purpose of AWS Budgets?",
        options: ["A) Manage spending and set budgets", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage spending and set budgets"
    },
    {
        question: "401. Which AWS service allows you to automate the management of your cloud resources?",
        options: ["A) AWS Systems Manager", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Systems Manager"
    },
    {
        question: "402. What does AWS Global Accelerator do?",
        options: ["A) Improve availability and performance of applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Improve availability and performance of applications"
    },
    {
        question: "403. What is Amazon Connect used for?",
        options: ["A) Cloud-based contact center", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Cloud-based contact center"
    },
    {
        question: "404. Which service provides a way to automate security assessments?",
        options: ["A) Amazon Inspector", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Inspector"
    },
    {
        question: "405. What does AWS Elastic Beanstalk do?",
        options: ["A) Simplifies application deployment", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Simplifies application deployment"
    },
    {
        question: "406. What is the purpose of Amazon Elastic File System (EFS)?",
        options: ["A) Managed file storage", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managed file storage"
    },
    {
        question: "407. What does AWS App Runner do?",
        options: ["A) Deploys web applications and APIs", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Deploys web applications and APIs"
    },
    {
        question: "408. Which AWS service helps with data transfer acceleration?",
        options: ["A) Amazon S3 Transfer Acceleration", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon S3 Transfer Acceleration"
    },
    {
        question: "409. What is the main function of Amazon Kinesis?",
        options: ["A) Real-time data streaming", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Real-time data streaming"
    },
    {
        question: "410. What does AWS Batch do?",
        options: ["A) Run batch computing workloads", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Run batch computing workloads"
    },
    {
        question: "411. What is Amazon Cognito used for?",
        options: ["A) User authentication and access control", "B) Data storage", "C) User management", "D) API management"],
        answer: "A) User authentication and access control"
    },
    {
        question: "412. What does AWS Config do?",
        options: ["A) Tracks resource configurations", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Tracks resource configurations"
    },
    {
        question: "413. Which service provides a way to build APIs?",
        options: ["A) Amazon API Gateway", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon API Gateway"
    },
    {
        question: "414. What is the purpose of AWS CloudTrail?",
        options: ["A) Tracks user activity and API usage", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Tracks user activity and API usage"
    },
    {
        question: "415. What does AWS Elemental MediaConvert do?",
        options: ["A) Video transcoding service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Video transcoding service"
    },
    {
        question: "416. Which service provides a fully managed machine learning platform?",
        options: ["A) Amazon SageMaker", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon SageMaker"
    },
    {
        question: "417. What is the main function of AWS Glue?",
        options: ["A) Data integration service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Data integration service"
    },
    {
        question: "418. What does AWS CloudFormation do?",
        options: ["A) Automates resource provisioning", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Automates resource provisioning"
    },
    {
        question: "419. Which service provides a fully managed relational database?",
        options: ["A) Amazon RDS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon DynamoDB"],
        answer: "A) Amazon RDS"
    },
    {
        question: "420. What does Amazon S3 Select do?",
        options: ["A) Retrieve a subset of data from S3 objects", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Retrieve a subset of data from S3 objects"
    },
    {
        question: "421. What is the purpose of AWS CodeDeploy?",
        options: ["A) Automate application deployments", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Automate application deployments"
    },
    {
        question: "422. Which service helps with application performance monitoring?",
        options: ["A) Amazon CloudWatch", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "423. What does Amazon Rekognition do?",
        options: ["A) Image and video analysis", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Image and video analysis"
    },
    {
        question: "424. What is AWS CodePipeline used for?",
        options: ["A) Automate CI/CD workflows", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Automate CI/CD workflows"
    },
    {
        question: "425. Which AWS service provides a way to manage containers?",
        options: ["A) Amazon ECS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon ECS"
    },
    {
        question: "426. What is the main function of AWS Secrets Manager?",
        options: ["A) Manage secrets and sensitive information", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage secrets and sensitive information"
    },
    {
        question: "427. What does Amazon EMR do?",
        options: ["A) Big data processing framework", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Big data processing framework"
    },
    {
        question: "428. What is the purpose of AWS Step Functions?",
        options: ["A) Coordinate microservices workflows", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Coordinate microservices workflows"
    },
    {
        question: "429. Which service helps with managing DNS records?",
        options: ["A) Amazon Route 53", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Route 53"
    },
    {
        question: "430. What does Amazon Polly do?",
        options: ["A) Text-to-speech service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Text-to-speech service"
    },
    {
        question: "431. What is AWS IoT Core used for?",
        options: ["A) Connect IoT devices to the cloud", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Connect IoT devices to the cloud"
    },
    {
        question: "432. Which service provides a managed service for machine learning?",
        options: ["A) Amazon SageMaker", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon SageMaker"
    },
    {
        question: "433. What is the main purpose of AWS Organizations?",
        options: ["A) Manage multiple AWS accounts", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage multiple AWS accounts"
    },
    {
        question: "434. What does AWS Lambda do?",
        options: ["A) Run code without provisioning servers", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Run code without provisioning servers"
    },
    {
        question: "435. Which service provides a way to manage and deploy serverless applications?",
        options: ["A) AWS SAM", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS SAM"
    },
    {
        question: "436. What does Amazon GuardDuty do?",
        options: ["A) Threat detection service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Threat detection service"
    },
    {
        question: "437. What is the purpose of Amazon FSx?",
        options: ["A) Managed file systems", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managed file systems"
    },
    {
        question: "438. Which service provides a managed database for Apache Cassandra?",
        options: ["A) Amazon Keyspaces", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon Keyspaces"
    },
    {
        question: "439. What is the main function of AWS Elastic Load Balancing?",
        options: ["A) Distribute incoming application traffic", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Distribute incoming application traffic"
    },
    {
        question: "440. What does Amazon EFS do?",
        options: ["A) Managed file storage for use with EC2", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managed file storage for use with EC2"
    },
    {
        question: "441. What is the purpose of AWS Resource Groups?",
        options: ["A) Organize AWS resources", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Organize AWS resources"
    },
    {
        question: "442. Which service provides a managed service for running MySQL databases?",
        options: ["A) Amazon RDS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon DynamoDB"],
        answer: "A) Amazon RDS"
    },
    {
        question: "443. What does AWS Budgets do?",
        options: ["A) Manage and track AWS spending", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage and track AWS spending"
    },
    {
        question: "444. What is the main purpose of Amazon AppSync?",
        options: ["A) Build GraphQL APIs", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Build GraphQL APIs"
    },
    {
        question: "445. What does Amazon Lex do?",
        options: ["A) Build conversational interfaces", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Build conversational interfaces"
    },
    {
        question: "446. What is the purpose of AWS Step Functions?",
        options: ["A) Coordinate distributed applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Coordinate distributed applications"
    },
    {
        question: "447. Which AWS service provides a fully managed Kubernetes service?",
        options: ["A) Amazon EKS", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon EKS"
    },
    {
        question: "448. What does Amazon Elastic Transcoder do?",
        options: ["A) Media transcoding service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Media transcoding service"
    },
    {
        question: "449. What is the purpose of AWS Batch?",
        options: ["A) Run batch jobs in the cloud", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Run batch jobs in the cloud"
    },
    {
        question: "450. Which service provides managed access to data in S3?",
        options: ["A) Amazon S3 Select", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon S3 Select"
    },
    {
        question: "451. What does AWS Glue do?",
        options: ["A) ETL service for data integration", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) ETL service for data integration"
    },
    {
        question: "452. What is the main purpose of Amazon Elastic Beanstalk?",
        options: ["A) Deploy and manage applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Deploy and manage applications"
    },
    {
        question: "453. What does Amazon QuickSight do?",
        options: ["A) Business intelligence service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Business intelligence service"
    },
    {
        question: "454. What is the purpose of Amazon WorkSpaces?",
        options: ["A) Virtual desktop infrastructure", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Virtual desktop infrastructure"
    },
    {
        question: "455. Which AWS service provides a scalable data lake?",
        options: ["A) AWS Lake Formation", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) AWS Lake Formation"
    },
    {
        question: "456. What does AWS Direct Connect do?",
        options: ["A) Establish a dedicated network connection", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Establish a dedicated network connection"
    },
    {
        question: "457. What is the main function of AWS AppConfig?",
        options: ["A) Manage application configurations", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage application configurations"
    },
    {
        question: "458. Which service helps with application performance monitoring?",
        options: ["A) Amazon CloudWatch", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "459. What does Amazon EBS do?",
        options: ["A) Block storage for EC2 instances", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Block storage for EC2 instances"
    },
    {
        question: "460. What is the purpose of AWS Shield?",
        options: ["A) DDoS protection", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) DDoS protection"
    },
    {
        question: "461. Which AWS service provides serverless functions?",
        options: ["A) AWS Lambda", "B) Amazon S3", "C) Amazon RDS", "D) Amazon DynamoDB"],
        answer: "A) AWS Lambda"
    },
    {
        question: "462. What does AWS X-Ray do?",
        options: ["A) Analyze and debug applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Analyze and debug applications"
    },
    {
        question: "463. What is the main function of Amazon Cognito?",
        options: ["A) User authentication and access control", "B) Data storage", "C) API management", "D) Machine learning"],
        answer: "A) User authentication and access control"
    },
    {
        question: "464. What does Amazon S3 Transfer Acceleration do?",
        options: ["A) Speed up uploads to S3", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Speed up uploads to S3"
    },
    {
        question: "465. What is the purpose of AWS CloudTrail?",
        options: ["A) Track AWS account activity", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Track AWS account activity"
    },
    {
        question: "466. What does AWS Key Management Service (KMS) do?",
        options: ["A) Manage encryption keys", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage encryption keys"
    },
    {
        question: "467. What is the main function of AWS Systems Manager?",
        options: ["A) Manage infrastructure and applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage infrastructure and applications"
    },
    {
        question: "468. Which AWS service helps with monitoring resource utilization?",
        options: ["A) Amazon CloudWatch", "B) Amazon S3", "C) AWS Lambda", "D) Amazon RDS"],
        answer: "A) Amazon CloudWatch"
    },
    {
        question: "469. What does AWS Firewall Manager do?",
        options: ["A) Manage firewall rules across accounts", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage firewall rules across accounts"
    },
    {
        question: "470. What is the purpose of AWS WAF?",
        options: ["A) Protect web applications from attacks", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Protect web applications from attacks"
    },
    {
        question: "471. What does Amazon RDS do?",
        options: ["A) Managed relational database service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managed relational database service"
    },
    {
        question: "472. What is the main function of Amazon Redshift?",
        options: ["A) Data warehousing service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Data warehousing service"
    },
    {
        question: "473. What does Amazon SageMaker do?",
        options: ["A) Build and deploy machine learning models", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Build and deploy machine learning models"
    },
    {
        question: "474. What is the purpose of AWS CloudFormation?",
        options: ["A) Manage infrastructure as code", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage infrastructure as code"
    },
    {
        question: "475. What does Amazon Elastic Container Service (ECS) do?",
        options: ["A) Manage Docker containers", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage Docker containers"
    },
    {
        question: "476. What is the main purpose of AWS CodeCommit?",
        options: ["A) Managed source control service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managed source control service"
    },
    {
        question: "477. What does AWS Lambda do?",
        options: ["A) Run code without provisioning servers", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Run code without provisioning servers"
    },
    {
        question: "478. What is the purpose of AWS CloudFront?",
        options: ["A) Content delivery network service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Content delivery network service"
    },
    {
        question: "479. What does AWS CodeBuild do?",
        options: ["A) Compile source code", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Compile source code"
    },
    {
        question: "480. What is the main function of AWS CodeStar?",
        options: ["A) Simplify development and deployment workflows", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Simplify development and deployment workflows"
    },
    {
        question: "481. What does AWS Glue do?",
        options: ["A) ETL service for data integration", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) ETL service for data integration"
    },
    {
        question: "482. What is the purpose of AWS CloudTrail?",
        options: ["A) Track AWS account activity", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Track AWS account activity"
    },
    {
        question: "483. What does AWS App Mesh do?",
        options: ["A) Manage service-to-service communication", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage service-to-service communication"
    },
    {
        question: "484. What is the main function of AWS Service Catalog?",
        options: ["A) Manage catalogs of IT services", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Manage catalogs of IT services"
    },
    {
        question: "485. What does AWS Batch do?",
        options: ["A) Run batch computing workloads", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Run batch computing workloads"
    },
    {
        question: "486. What is the purpose of AWS Elastic Beanstalk?",
        options: ["A) Deploy applications automatically", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Deploy applications automatically"
    },
    {
        question: "487. What does AWS OpsWorks do?",
        options: ["A) Configuration management service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Configuration management service"
    },
    {
        question: "488. What is the main function of AWS Global Accelerator?",
        options: ["A) Improve availability and performance of applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Improve availability and performance of applications"
    },
    {
        question: "489. What does Amazon Inspector do?",
        options: ["A) Automated security assessment service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Automated security assessment service"
    },
    {
        question: "490. What is the purpose of AWS Trusted Advisor?",
        options: ["A) Provide recommendations for AWS best practices", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Provide recommendations for AWS best practices"
    },
    {
        question: "491. What does Amazon CloudWatch do?",
        options: ["A) Monitoring AWS resources and applications", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Monitoring AWS resources and applications"
    },
    {
        question: "492. What is the main function of Amazon VPC?",
        options: ["A) Isolate resources in a virtual network", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Isolate resources in a virtual network"
    },
    {
        question: "493. What does AWS Elastic Load Balancing do?",
        options: ["A) Distribute incoming application traffic", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Distribute incoming application traffic"
    },
    {
        question: "494. What is the purpose of AWS Storage Gateway?",
        options: ["A) Hybrid cloud storage service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Hybrid cloud storage service"
    },
    {
        question: "495. What does AWS Config do?",
        options: ["A) Monitor and record AWS resource configurations", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Monitor and record AWS resource configurations"
    },
    {
        question: "496. What is the main function of AWS Fargate?",
        options: ["A) Run containers without managing servers", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Run containers without managing servers"
    },
    {
        question: "497. What does Amazon S3 do?",
        options: ["A) Object storage service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Object storage service"
    },
    {
        question: "498. What is the purpose of Amazon EFS?",
        options: ["A) Elastic file storage service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Elastic file storage service"
    },
    {
        question: "499. What does Amazon RDS Multi-AZ do?",
        options: ["A) High availability for RDS instances", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) High availability for RDS instances"
    },
    {
        question: "500. What is the main function of Amazon DynamoDB?",
        options: ["A) Managed NoSQL database service", "B) Data storage", "C) User authentication", "D) API management"],
        answer: "A) Managed NoSQL database service"
    }
]

let currentQuestionIndex = 0;

// Load the user's answers from localStorage
function loadAnswersFromLocalStorage() {
    const savedAnswers = localStorage.getItem('answers');
    if (savedAnswers) {
        return JSON.parse(savedAnswers);
    }
    return {};
}

let userAnswers = loadAnswersFromLocalStorage();

// Initialize correct and wrong answer counts
let correctAnswersCount = localStorage.getItem('correctCount') || 0;
let wrongAnswersCount = localStorage.getItem('wrongCount') || 0;

// Update score summary function
function updateScoreSummary() {
    $('#correct-score').text(correctAnswersCount);
    $('#wrong-score').text(wrongAnswersCount);
}

// Save the answers to localStorage
function saveAnswersToLocalStorage() {
    localStorage.setItem('answers', JSON.stringify(userAnswers));
    localStorage.setItem('correctCount', correctAnswersCount);
    localStorage.setItem('wrongCount', wrongAnswersCount);
}

// Load question with slide animation
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    $('#question').text(currentQuestion.question);
    $('#options-container').empty();
    $('#result').hide().removeClass('correct wrong');

    // Load options
    currentQuestion.options.forEach(option => {
        const optionBtn = `<button class="btn btn-outline-secondary option-btn">${option}</button>`;
        $('#options-container').append(optionBtn);
    });

    // Update current question index display
    $('#current-index').text(currentQuestionIndex + 1);
    $('#total-questions').text(questions.length);
}

// Show the result (correct or wrong) with the correct answer
function showResult(isCorrect, selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (isCorrect) {
        $('#result').text("Correct!").addClass('correct').show();
        correctAnswersCount++;
    } else {
        $('#result').text(`Wrong! The correct answer is: ${correctAnswer}`).addClass('wrong').show();
        wrongAnswersCount++;
    }

    // Update score summary
    updateScoreSummary();
}

// Check answer when the user clicks an option
$(document).on('click', '.option-btn', function () {
    const selectedAnswer = $(this).text();
    const correctAnswer = questions[currentQuestionIndex].answer;

    let isCorrect = selectedAnswer === correctAnswer;

    // Store the result in userAnswers object
    userAnswers[currentQuestionIndex] = { selectedAnswer, isCorrect };

    // Save the answer to localStorage
    saveAnswersToLocalStorage();

    // Show the result
    showResult(isCorrect, selectedAnswer);
});

// Load next question with slide animation
$('#next-btn').click(function () {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("You have completed all questions!");
    }
});

// Load previous question with slide animation
$('#prev-btn').click(function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
});

// Reset quiz function
function resetQuiz() {
    currentQuestionIndex = 0; // Reset to the first question
    userAnswers = {}; // Clear the user's answers
    localStorage.removeItem('answers'); // Clear local storage
    localStorage.removeItem('correctCount'); // Clear correct count
    localStorage.removeItem('wrongCount'); // Clear wrong count

    // Reset counts
    correctAnswersCount = 0;
    wrongAnswersCount = 0;

    // Update the score summary
    updateScoreSummary();

    // Load the first question
    loadQuestion();
}

// Add click event for reset button
$('#reset-btn').click(function () {
    resetQuiz();
});

// Initialize the first question on page load
$(document).ready(function () {
    loadQuestion();
    updateScoreSummary(); // Initialize score summary display
});
