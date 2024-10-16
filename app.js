const express = require('express')
const app = express();
const port = process.env.PORT || 3002
const templ = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        h1 {
            font-size: 2em;
            margin-bottom: 0.5em;
        }
        h2 {
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5em;
            margin-bottom: 1em;
        }
        .section {
            margin-bottom: 20px;
        }
        .contact-info {
            margin-bottom: 20px;
        }
        .contact-info p {
            margin: 5px 0;
        }
        .list {
            list-style-type: none;
            padding: 0;
        }
        .list li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Resume - Nikhil Nandkumar Devne</h1>
    <div class="contact-info">
        <p>Email: nikhildevne@yahoo.com</p>
        <p>Phone: 9175669865</p>
        <p>Address: Baner, Pune Maharashtra</p>
    </div>

    <div class="section">
        <h4>3.8 Years Experienced Fullstack Developer, Hands-on experience in Backend Development using NodeJs, ExpressJs,
            MongoDb, GraphQL along with Frontend Reactjs, Redux, Material Ui, Angularjs. Familiar with Devops tool Docker,
            AWS Serivice Cognito, S3 Bucket and Successfully developed and deployed E-commerce, Logistic and Health Care
            Domain Applications for Client.</h4>
       
    </div>

    <div class="section">
        <h4> 3 years and 8 months of working experience in fullstack development (Nodejs, Expressjs, Reactjs(Redux Toolkit), Mongodb and AWS)</h4>
        <ul class="list">
            <li>
                <h3>Software Engineer - Pras Webart Technologies Pvt Ltd.</h3>
                <p><strong>Pune</strong> | May 2024 - Present</p>
                <ul>
                    <li>Developed Rest APIs Using Nodejs, Express and Mongodb for Client-Server Interaction.</li>
                    <li>Worked on Healthcare domain.</li>
                    <li>Implemented Authentication service for secure login and registration using JWT.</li>
                    <li>Worked on Reactjs framework to provide user friendly and robust interface to End-Users.</li>
                    <li>Implemented State management using Redux Toolkit</li>
                </ul>
            </li>
            <li>
                <h3>Software Engineer - Aloha Technologies Pvt Ltd</h3>
                <p><strong>Pune</strong> | Feb 2021 - May 2024</p>
                <ul>
                    <li>Built Robust and Secure Applications for E-commerce, Logistic, Healthcare Domain.</li>
                    <li>Developed Rest full API achieve seamless communication between client and server.</li>
                    <li>Proficient in designing and implementing GraphQL schemas, queries, and mutations.</li>
                    <li>Experience with GraphQL tools and libraries such as Apollo Client/Server .</li>
                    <li>Implemented secure login and Registration System using AWS Cognito Service.</li>
                    <li>Developed Real-time communication system to send Notifications to user using Socket.io.</li>
                    <li>Familiar with Agile Software Development process.</li>
                    <li>Familiar with Monolithic and Microservice Architecture.</li>
                    <li>Hands on Experience in Event Driven and Asynchronous Programming in Nodejs.</li>
                    <li>Familiar with AWS CI/CD Services such as AWS Codepipeline, Codebuild, Codedeploy, IAM.</li>
                    <li>Developed User Interface Using Reactjs, Redux for Single Page Application Development.</li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="section">
        <h2>Education</h2>
        <ul class="list">
            <li>
                <h3>BE - Computer Science and infromation Technology.</h3>
                <p><strong>Swami Ramanand Teerth Marathwada University</strong> </p>
            </li>
            <li>
                <h3>Diploma - Computer Engineering</h3>
                <p><strong>Maharashtra State Board of Technical Education</strong></p>
            </li>
        </ul>
    </div>

    <div class="section">
        <h2>Skills</h2>

        <ul class="list">
            <li><strong>React.js</strong></li>
            <li><strong>Redux Tollkit</strong></li>
            <li><strong>Node.js</strong></li>
            <li><strong>Express.js</strong></li>
            <li>Jquery</li>
            <li><strong>MongoDB</strong></li>
            <li><strong>AWS EC2, CodeDeploy, CodePipeline, Elastic Beanstalk, IAM</strong></li>
            <li><strong>AWS S3, Cognito, SNS, SES</strong></li>
            <li><strong>JavaScript</strong></li>
            <li><strong>MySQL</strong></li>
            <li><strong>TypeScript</strong></li>
            <li>Kendo UI</li>
            <li>Handlebars.js</li>
            <li>Google Charts (Graphical Representation)</li>
        </ul>
    </div>
</div>

</body>
</html>`
app.get('/',(req,res)=>{
    res.send(templ)
})

app.listen(port,()=>{
    console.log('working')
})