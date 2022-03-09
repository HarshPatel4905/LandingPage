import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContactFormComponent } from './forms/contact-form.component';
import swal from 'sweetalert2';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LandingPage';
  employeeForm!: FormGroup;
  category!: String;


  data: any[] = [{
    title: "HR Executive",
    JDTITLE: "At ConvergeSol, we are always looking to strengthen our organization by adding the best available talent to our staff. We're seeking a HR Executive - Talent Acquisition to help us source, identify, screen, and hire individuals for various roles in our company. Our ideal candidate will have excellent communication and organizational skills, 2-3 years' experience in talent acquisition, proficiency in Applicant Tracking Systems, and the ability to devise sourcing strategies for potential applicants. This role requires a candidate with excellent interpersonal skills as you'll often be asked to work closely with others across different departments.",
    POINTS: ["Input into overall hiring strategy of the organization to ensure our teams consist of a diverse set of qualified individuals",
      "Ensure the staffing needs of the company are being met, with a long-term talent strategy in mind",
      "Devise and implement sourcing strategies to build pipelines of potential applicants, such as employer branding initiatives",
      "Create and implement end-to-end candidate hiring?processes to ensure a positive experience",
      "Form close relationships with hiring managers to ensure clear candidate/interviewer expectations",
      "Coordinate with hiring managers to identify staffing needs in different areas and departments",
      "Determine selection criteria for candidates by liaising with managers and other members of staff",
      "Source applicants through online channels, such as LinkedIn and other professional networks",
      "Create job descriptions and interview questions that reflect the requirements for each position",
      "Identify and refine down the most suitable talent from available candidates",
      "Plan interview and selection procedures, including screening calls, assessments, and in-person interviews - if possible",
      "Assess candidates' information, including C.Vs., portfolios and references",
      "Organize and attend job fairs and recruitment events to build a strong candidate pipeline",
      "Keep records of all materials used for recruitment, including interview notes and related paperwork, to share with key stakeholders"],
    RequiedExp: 2,
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    skills: ["Work experience in talent acquisition or similar roles",
      "Familiarity with social media, C.V. databases, and professional networks",
      "Experience with full-cycle recruiting, using various interview techniques and evaluation methods",
      "Knowledge of Applicant Tracking Systems",
      "Experience in using LinkedIn Talent Solutions to proactively source candidates",
      "A keen understanding of the requirements for each role in the company",
      "Proficiency in documenting processes and keeping up with industry trends",
      "Excellent interpersonal and communication skills"],
    PreferedQualifications: ["Bachelor's Degree in Human Resources Management, or similar",
      "2-3 years of experience as a Talent Acquisition Specialist, or similar",
      "Certification obtained from the HR Certification Institute would be advantageous"],
    Location: "Ahmedabad",
    Qualification: "Bachelor's Degree in Human Resources Management"
  },
  {
    title: "Salesforce Delivery Lead",
    JDTITLE: "We are looking for a Delivery Lead that will be able to deliver salesforce based projects. The main scope of work will include everything from back-end to client-side code, using optimal and efficient technologies, frameworks, and patterns. Your primary responsibilities will be to design and develop these applications. Therefore, it’s essential that you are skilled at problem-solving, solution design, and high-quality coding.",
    POINTS: ["Manages Salesforce delivery projects as the Delivery Lead",
      "Works and coordinates across all workstreams to make sure there are no blockers and everybody knows what they need to do",
      "Tracks delivery progress and shares updates externally to the client",
      "Assigns work items to developers & testers",
      "Helps to shape testing strategy",
      "Identifies any potential delay or risk during delivery and escalate to program team",
      "Has some understanding of technical challenges so he/she can communicate or escalate the risk/issue",
      "Understands which are the Salesforce Development Lifecycle phases when working on Hybrid Mode and knows how to lead the delivery team to the right goal through every step of the project",
      "Works across functions to deliver best practice solutions aligned with the Salesforce application and the increased adoption of automated solutions. Provides insight into the Salesforce feature roadmap and recommends components aligning with the operational requirements",
      "Hands-on responsibilities for maintaining and implementing customer integrations. Drive innovation and continuous improvement in design and delivery practices of our solutions, including Salesforce best practice in the implementation of client solutions",
      "Manages the delivery teams to deliver full Salesforce lifecycle implementations, with a focus on the client success but awareness of other wider business and technology focused delivery considerations",
      "Always be a go to person in providing solutions to clients and act as a role model for the team by always demonstrating the highest standards in business, digital led transformation",
      "Conduct quality reviews of our implementation to ensure they meet our high standards",
      "Lead end-to-end pre-sales project delivery activities",
      "Provide leadership and support for delivery teams and across SEA region"],
    RequiedExp: 5,
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    skills: ["5+ years' experience with the Salesforce.com platform",
      "5+ years working with Salesforce Sales Cloud and Service Cloud",
      "3+ years' experience with Lightning Design System and creating components",
      "Strong ability to implement applications across various Salesforce environments such as Force.com, Heroku, etc",
      "3+ years' experience with technologies integral to Salesforce.com including: HTML/XHTML, jQuery, JavaScript, AJAX, SQL, SOAP, REST, JSON, Apex, and SOQL",
      "3+ years Visual Force and Sites page development",
      "3+ years data modelling using Force.com Platform standard and custom objects is desired",
      "Salesforce Platform Dev I certification is strongly desired. Other Salesforce certifications expected",
      "Experience with the SFDC toolkit (Apex, LWC, Triggers, Aura, and Batch etc.)",
      "Proven track record of delivering results. - Excellent communication skills",
      "Salesforce Platform Developer I or Salesforce Admin certification",
      "Minimum 4+ years of LWC experience"],
    PreferedQualifications: ["Some experience with Sales cloud/Service cloud/Community cloud",
      "Development experience on force.com with custom objects",
      "Salesforce solutions implementation/release experience to end-client",
      "Salesforce PD1 certification will be a huge plus"],
    Location: "Ahmedabad (Work From Home)",
    Qualification: "BE"
  },
  {
    title: "IT TECH SUPPORT",
    JDTITLE: "We are looking for technically skilled candidates with excellent interpersonal skills for the Technical Support position. Technical Support Officers troubleshoot technical issues, provide timely customer feedback, and support the roll-out of new applications, among other duties. Moreover, Technical Support Officers need to talk to customers directly, as well as create written documentation, requiring excellent written and verbal communication.",
    POINTS: ["Champion’s problem solving and providing L1 support",
      "Adept at managing customer communication and escalation to the appropriate technical team",
      "Expert at various operations tasks like ticket management system, customer relation system, issue tracking, et al.",
      "Require basic knowledge of SQL server and financial services domain",
      "Good to have basic knowledge on C# and JIRA reporting tools",
      "Excellent verbal and written communication skills",
      "Team management, issue resolution, escalation methodologies, SLA management",
      "Conduct training for other team members",
      "Technical troubleshooting",
      "Cloud technology service providers like AWS, Azure, and GCP",
      "BS/MS in Literature with training in computer/MBA Know-how of Agile SDLC methodology",
      "Proficiency in Windows/Linux/Mac OS",
      "Strong troubleshooting and critical thinking skills",
      "Talking to customers through a series of actions to resolve a problem.",
      "Following up with clients to ensure the problem is resolved"],
    RequiedExp: 4,
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    skills: ["Tech Support, SQL Server, Basic knowledge of cloud engineering AWS, Azure, GCP."],
    PreferedQualifications: [],
    Location: "Ahmedabad",
    Qualification: "IT/MCA/Computer/ Tech Support/ Engineering"
  },
  {
    title: "Project Manager",
    JDTITLE: "We are urgently looking for a Project Manager for the Ahmedabad location ( Work from home).",
    POINTS: ["Elicits, analyzes, specifies, and validates the business needs of stakeholders, be they customers or end-users.",
      "Collaborates with project sponsors to determine project scope and vision.",
      "Clearly identifies project stakeholders and establish customer classes, as well as their characteristics.",
      "Conducts interviews to gather customer requirements via workshops, questionnaires, surveys, site visits, workflow storyboards, use cases, scenarios, and other methods.",
      "Identifies and establishes scope and parameters of requirements analysis on a project-by-project basis to define project impact, outcome criteria, and metrics.",
      "Works with stakeholders and project team to prioritize collected requirements.",
      "Researches, reviews, and analyzes the effectiveness and efficiency of existing requirements-gathering processes and develops strategies for enhancing or further leveraging these processes.",
      "Assists in conducting research on products to meet agreed-upon requirements and to support purchasing efforts.",
      "Participates in the QA of purchased solutions to ensure features and functions have been enabled and optimized.",
      "Participates in the selection of any requirements documentation software solutions that the organization may opt to use.",
      "Analyzes and verifies requirements for completeness, consistency, comprehensibility, feasibility, and conformity to standards.",
      "Develops and utilizes standard templates to accurately and concisely write requirements specifications.",
      "Translates conceptual customer requirements into functional requirements in a clear manner that is comprehensible to developers/project team.",
      "Creates process models, specifications, diagrams, and charts to provide direction to developers and/or the project team.",
      "Develops and conducts peer reviews of the business requirements to ensure that requirement specifications are correctly interpreted.",
      "Assists with the interpretation of customer requirements into feasible options, and communicating these back to the business stakeholders.",
      "Manages and tracks the status of requirements throughout the project lifecycle; enforce and redefine as necessary.",
      "Communicates changes, enhancements, and modifications of business requirements - verbally or through written documentation - to project managers, sponsors, and other stakeholders so that issues and solutions are understood.",
      "Provides guidance and/or instruction to junior staff members.",
      "Able to exercise independent judgment and take action on it"],
    RequiedExp: 7,
    skills: ["Front End: Angular (mandatory)",
      "Back End: C# dot Net Framework (mandatory)",
      "Cloud: AWS (mandatory)",
      "Management Tools: JIRA, ASANA, etc. (preferred)"],
    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    Location: "Ahmedabad",
    Qualification: "BCA/MCA/BTech/MBA/BBA"
  },
  {
    title: "Tech Analyst",
    JDTITLE: "We are looking for an all-rounder, here is a list of tasks/skills:",
    POINTS: ["Assist with documentation e.g. Software user guide, installation guide etc",
      "Assist with testing our software product, both front end and back end",
      "Creating test cases for clients",
      "Running test cases for clients",
      "Understanding and running the data compare utility of a software product",
      "Suggest and document functionality improvement for software product",
      "Where required, we will train the individual on the trading system we are testing so he/she is able to effectively create test cases. As the individual gets more familiar with the system, he/she will also help with the root cause analysis (analysis why data is different or why the test case has failed).",
      "Must have good spoken, reading and writing skills",
      "This is a great opportunity for an individual who wants to learn about derivatives and fixed income. If they want to learn and read (in their own time), I can send them reading material and show them how/why trades are done."],
    RequiedExp: 1,
    skills: ["N/A"],
    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    Location: "Ahmedabad",
    Qualification: "BCA/MCA/BTech/MscIT"
  },
  {
    title: "ANGULAR DEVELOPER",
    JDTITLE: "We are urgently looking for an Angular Developer for the Ahmedabad location ( Work from home).",
    POINTS: ["Build modular, testable, and reusable front-end modules",
      "Contribute in all phases of the feature release cycle",
      "Contribute ideas on using the latest technologies"],
    RequiedExp: 2,
    skills: ["Strong experience with Angular - JS 4.0+ versions",
      "Strong knowledge of HTML , CSS , RWD, JavaScript and J-Query",
      "Strong OOPS ( Object Oriented Programming ) concepts",
      ".Net / C# / .Net MVC"],
    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    Location: "Ahmedabad",
    Qualification: "BCA/MCA/BTech/MscIT"
  },
  {
    title: "Full Stack Developer",
    JDTITLE: "We are urgently looking for an Angular Developer for the Ahmedabad location ( Work from home).",
    POINTS: ["Looking for seasoned professionals with self-drive, excellent coding, and problem solver attitude",
      "Responsibilities:",
      "Build modular, testable, and reusable front-end modules",
      "Contribute in all phases of the feature release cycle",
      "Contribute ideas on using the latest technologies",
      "Basic Requirements:",
      "Strong experience with Angular - JS 2.0 or Angular - JS 4.0",
      "Strong knowledge of HTML, CSS, RWD, JavaScript, and J-Query",
      "Strong OOPS (Object Oriented Programming) concepts"],
    RequiedExp: 3,
    skills: ["Angular / .Net / C# / .Net MVC"],
    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    Location: "Ahmedabad",
    Qualification: "BCA/MCA/BTech/MscIT"
  },
  {
    title: "Business Development Executive",
    JDTITLE: "We are urgently looking for an Angular Developer for the Ahmedabad location ( Work from home).",
    POINTS: ["Experience with bidding portals like Upwork, Guru, etc.",
      "Ability to generate quality leads",
      "Excellent communication skills",
      "Build contacts with potential clients to create new business opportunities",
      "Keep prospective client database updated",
      "Make cold calls for new business leads",
      "Support in writing new business proposals",
      "Maintain knowledge of all product and service offerings of the company",
      "Arrange meetings for senior management with prospective clients",
      "Follow company guidelines and procedures for the acquisition of customers, submission of tenders, etc.",
      "Shift:",
      "US shift (10 PM to 6 AM) Should be flexible."],
    RequiedExp: 3,
    skills: ["N/A"],
    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    Location: "Ahmedabad",
    Qualification: "BCA/MCA/BTech/MscIT"
  }, {
    title: "Jr. Tech Analyst",
    JDTITLE: "We are urgently looking for Jr. Tech Analyst, here is a list of tasks / skills:",
    POINTS: ["Assist with documentation e.g. Software user guide, installation guide etc",
      "Assist with testing our software product, both front end and back end",
      "Creating test cases for clients",
      "Running test cases for clients",
      "Understanding and running the data compare utility of a software product",
      "Suggest and document functionality improvement for software product",
      "Where required, we will train the individual on the trading system we are testing so he/she is able to effectively create test cases. As the individual gets more familiar with the system, he/she will also help with the root cause analysis (analysis why data is different or why the test case has failed).",
      "Must have good spoken, reading and writing skills",
      "This is a great opportunity for an individual who wants to learn about derivatives and fixed income. If they want to learn and read (in their own time), I can send them reading material and show them how/why trades are done.",],
    RequiedExp: 2,
    skills: ["N/A"],
    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],
    Location: "Ahmedabad/Work from home",
    Qualification: "BCA/MCA/BTech/MscIT"
  },
  {
    title: "Sr. DevOps Engineer",

    JDTITLE: "We are looking for a Sr. DevOps Engineer to help us build functional systems that improve customer experience.  Sr. DevOps Engineer responsibilities include deploying product updates, identifying production issues, and implementing integrations that meet customer needs. As A Sr. DevOps Engineer, you are responsible to set up and maintain GIT repository, DevOps tools like Jenkins, UCD, Docker, Kubernetes, Jfrog Artifactory, Cloud monitoring tools, Cloud security. You will automate daily tasks using Ansible, Puppet, or chef. Setup, configure, and maintain GIT repos, Jenkins, UCD, etc for the multi hosting cloud environment. DevOps process involves a lot of development, testing, and deployment technologies for developing automated CI/ CD pipelines.",

    POINTS: [" Analyze current technology utilized within the company and develop steps and processes to improve and expand upon them.",
      "Implement integrations requested by customers.",
      "Deploy updates and fixes.",
      "Provide Level 2 technical support.",
      "Build tools to reduce the occurrences of errors and improve customer experience.",
      "Develop software to integrate with internal back-end systems.",
      "DevOps process involves a lot of development, testing, and deployment technologies for developing automated CI/ CD pipelines.",
      "Perform root cause analysis for production errors.",
      "Investigate and resolve technical issues.",
      "Develop scripts to automate visualization.",
      "Design procedures for system troubleshooting and maintenance.",
      "Manage code deployments, fixes, updates, and related processes.",
      "Automate our operational processes as needed, with accuracy and in compliance with our security requirements."
    ],


    RequiedExp: 3,

    skills: ["Git and GitHub – Source code management (Version Control System)",
      "Jenkins – Automation server, with plugins built for developing CI/ CD pipelines",
      "Selenium – Automation testing",
      "Docker – Software Containerization Platform",
      "Kubernetes – Container Orchestration tool",
      "Puppet – Configuration Management and Deployment",
      "Chef – Configuration Management and Deployment",
      "Ansible – Configuration Management and Deployment",
      "Nagios – Continuous Monitoring"
    ],

    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],

    Location: "Ahmedabad",

    Qualification: "Bachelor Degree"
  },
  {
    title: "IT Infrastructure Engineer",

    JDTITLE: "An IT Infrastructure Engineer will primarily responsible for overseeing both the technical and managerial aspects of the company's IT department.  In order to ensure that company’s IT infrastructure is always functioning as effectively as possible and is never sluggish or outdated, the IT Infrastructure Engineer performs a variety of tasks.An IT infrastructure engineer relies on a deep body of knowledge and a wide variety of hard and soft skills to go about their work. These include:",

    POINTS: [" Software knowledge – IT infrastructure engineers work with a variety of software. Working knowledge of how these various systems interact virtually helps the engineer conduct rapid troubleshooting",
      "Hardware knowledge – routers, servers, PCs, printers, and other equipment all fall under the IT infrastructure engineer’s purview. The engineer also knows how to manage LANs and wired/wireless networks to connect these devices",
      "Problem-solving skills – getting many pieces of hardware and software to work in harmony is an ongoing and challenging task. Strong deductive reasoning and patience serve engineers well here",
      "Customer service – infrastructure engineers tend to work with internal rather than external partners. Communicating well with these “customers” helps the engineer resolve outages quickly and build strong working relationships",
      "Teaching ability – engineers may need to explain complex technical concepts to non-technical colleagues and train them to use software and hardware",
      "Organization skills – whether keeping cable sprawl to a minimum, documenting their work, or prioritizing requests for support, IT infrastructure engineers need to stay organized to keep on top of their tasks",
    ],


    RequiedExp: 3,

    skills: ["Inspect LAN and WAN infrastructure for problems.",
      "Handling IBM/HPE HPC server setup (Linux servers) and providing primary support to users.",
      "Design and install high-functioning computer network connections including cabling.",
      "Address and solve system failures to increase network uptime.",
      "Evaluate network functionality and create data backups."
    ],

    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],

    Location: "Ahmedabad",

    Qualification: "Bachelor Degree"
  },
  {
    title: "QA Tester",

    JDTITLE: "We are urgently looking for QA Tester for our Ahmedabad location(Work From Home).The position holder will be responsible for understanding requirements, creating test scenarios, test cases, preparing test data, executing test cases and reporting defects and reporting results to test lead.",

    POINTS: [" Prepare test cases for the defined test plan and modify the existing test cases as test requirements changes",
      "Execution of tests, Reporting of defects via Reporting tool JIRA",
      "Send daily testing status for current stories",
      "Must have knowledge of Website and Mobile site testing",
      "Should have knowledge on back end testing, reading logs.",
      "Excellent knowledge of Test methodology Waterfall, Iterative, Agile Scrum",
      " Can work in a fast pace continuously changing environment and support the team when required"],

    RequiedExp: 2,

    skills: [" Good knowledge of software testing life cycle and process",
      "Perform feature tests based on a thorough understanding of feature requirements and desired behavior with Cross Behavior Compatibility testing",
      "Good knowledge on Regression, Smoke, Sanity, Modular, Component, Integration testing",
      "Good to have basic knowledge on Automation testing(Selenium) and Java",
      "Good knowledge on testing on Mobile Platforms, reading mobile logs",
      "Ability to understand the requirements and test web applications",
      " ISTQB/CASTP-P/Vskills certified will be an added advantage and will be preferred",
      "Ability to communicate effectively with others using spoken and written English",
      "Must have a testing mind-set with a passion for quality",
      "Excellent organizational skills to focus on the tasks at hand",
      "Automation testing(Selenium) and Java.",
      "ISTQB/CASTP-P/Vskills certified will be an added advantage.",
      "Regression, Smoke, Sanity, Modular, Component, Integration testing.",
      "Waterfall, Iterative, Agile Scrum.",
      "JIRA."
    ],

    PreferedQualifications: [],
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],

    Location: "Ahmedabad",

    Qualification: "BCA/MCA/BTech/MscIT"
  },
  {
    title: "Senior Angular Developer",

    JDTITLE: "We are hiring at mid-senior level Angular / Full Stack Developers. Angular/Angular - JS experience mandatory.Looking for seasoned professionals with self drive, excellent coding and problem solver attitude.",

    POINTS: [],
    Responsibility: ["Build modular, testable, and reusable front-end modules.",
      "Contribute in all phases of the feature release cycle.",
      "Contribute ideas on using latest technologies."],

    basicRequirement: ["Strong experience with Angular - JS 4.0 or higher.",
      "Strong knowledge of HTML , CSS , TypeScript, Angular CLI 4+ , Web API, JavaScript and J-Query.",
      "Strong OOPS ( Object Oriented Programming ) concepts."],
    goodTO: [".Net / .Net Core / C# / .Net MVC ."],


    RequiedExp: 3,

    skills: [" Cascading Style Sheets (CSS)",
      "HTML5",
      "Angular Command Line Interface (CLI)",
      "Good to have basic knowledge on Automation testing(Selenium) and Java",
      "Web Services API",
      "Bootstrap",
      " ASP.NET Web API",
      "TypeScript",
      "AngularJS",
      "C#"],

    PreferedQualifications: [],

    Location: "Ahmedabad",

    Qualification: "BE, B. Tech, BCA/MCA"
  },
  {
    title: "Tester",

    JDTITLE: "The position holder will be responsible for understanding requirements, creating test scenarios, test cases, preparing test data, executing test cases and reporting defects and reporting results to test lead.",


    POINTS: ["Job Summary: ", " Prepare test cases for the defined test plan and modify the existing test cases as test requirements changes ",
      "Execution of tests, Reporting of defects via Reporting tool JIRA",
      "Send daily testing status for current stories",
      "Must have knowledge of Website and Mobile site testing",
      "Should have knowledge on back end testing, reading logs.",
      "Excellent knowledge of Test methodology Waterfall, Iterative, Agile Scrum",
      " Can work in a fast pace continuously changing environment and support the team when required"],

    RequiedExp: 1,
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],

    skills: [" Good knowledge of software testing life cycle and process",
      "Perform feature tests based on a thorough understanding of feature requirements and desired behavior with Cross Behavior Compatibility testing",
      "Good knowledge on Regression, Smoke, Sanity, Modular, Component, Integration testing",
      "Good to have basic knowledge on Automation testing(Selenium) and Java",
      "Good knowledge on testing on Mobile Platforms, reading mobile logs",
      "Ability to understand the requirements and test web applications",
      " ISTQB/CASTP-P/Vskills certified will be an added advantage and will be preferred",
      "Ability to communicate effectively with others using spoken and written English",
      "Must have a testing mind-set with a passion for quality",
      "Excellent organizational skills to focus on the tasks at hand"],

    PreferedQualifications: ["BE, B. Tech, BCA/MCA"],

    Location: "Ahmedabad",

    Qualification: "BE"
  },
  {

    title: "NET Developer",

    JDTITLE: "A rapidly growing offshore software development company is looking for a bright, dedicated and knowledgeable individual to join their development team. The company is in aggressive expansion mode and looking to capitalize on the international growth. The Developer will be a key member of our delivery team working closely with developers, customers and stakeholders. This position will be initially based in Ahmedabad, India. The developer will be regarded as the technical expert on all development related tasks. This includes business understanding and documentation, data flow and data architecture, development, unit testing and deployment. The ideal candidate would have 3+ years of development experience across various technologies including but not limited to .NET CORE, C#, ASP.NET, Web Services, MVC, JQuery, JSON, MS SQL Server 2008/2012/2014,CICD( Concepts in Continuous Integration and Deployment) SSRS, SSIS, Stored Procedures, SQL Queries, Version Control.",

    POINTS: [],

    RequiedExp: 3,
    Responsibility: [],
    basicRequirement: [],
    goodTO: [],

    skills: ["A rapidly growing offshore software development company is looking for a bright, dedicated and knowledgeable individual to join their development team. The company is in aggressive expansion mode and looking to capitalize on the international growth. The Developer will be a key member of our delivery team working closely with developers, customers and stakeholders. This position will be initially based in Ahmedabad, India. The developer will be regarded as the technical expert on all developm"],

    PreferedQualifications: [],

    Location: "Ahmedabad",

    Qualification: "BE"

  }];




  constructor(
    public dialog: MatDialog,
    private formbuilder: FormBuilder,
  ) { }



  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({
      name: ['', { validators: [Validators.required], asyncValidators: [] }],
      email: new FormControl('', [Validators.required, Validators.email],),
      phone: ['', [Validators.required, Validators.maxLength(10),Validators.pattern('[0-9]{10}')]],
      file: ''
    })
  }



  CommonApplyButton() {
    let dialogRef = this.dialog.open(ContactFormComponent, {
      height: '400px',
      width: '600px',
    });
  }
  restrictNumber(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = event.key;

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  setCategory(text: string) {
    this.category = text;
  }
  public sendEmail(e: Event, a: number = 0) {
    if (this.employeeForm.valid) {

      var template = "template_hlu2p7e";
      if (a === 1) {
        template = "template_anixppa";
      }
      swal.fire("Success", "Email Sent Successfully!", "success")
      e.preventDefault();
      emailjs.sendForm('service_r32dyw6', template, e.target as HTMLFormElement, '64p8R75AxIDAOTt5q')
        .then((result: EmailJSResponseStatus) => {
          this.employeeForm.reset();
          // alert("Application submitted successfully.\nThank you for showing your interest...");

        }, (error: any) => {
          console.log(error.text);
        });

        // this.employeeForm.reset()
        // Object.keys(this.employeeForm.controls).forEach(key => {
        //   this.employeeForm.get(key)!.setErrors(null) ;
        // });

      // sgMail.setClient(new Client());
      // sgMail.setApiKey("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");
      // sgMail.send({
      //   from: "harshpatel4905@gmail.com",
      //   to: "harshpatel4905@gmail.com",
      //   subject: "Test Email",
      //   text: "This is a test email",
      //   html: "<p>This is a test email</p>"
      // }).then(result => {
      //   console.log("Sent email");
      // }, err => {
      //   console.error(err);
      // });
    }
  }

  public checkUserError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName);
  }

  closeForm(form: any){
    form.reset();

    // Object.keys(form.controls).forEach(key => {
    //   form.get(key).setErrors(null) ;
    // });
  }
}

