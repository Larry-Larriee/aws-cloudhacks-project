![Alt text](./app/images/header.png)

### Summary

Students often utilize many methods to study for midterms and final exams; one of the most common methods is to review past quizzes or tests. However, the number of past quizzes or tests are limited and it's often distracting to see one's past answers underneath the question. As a result, students may not be truly testing their knowledge retention. Our app Cognitive solves this problem by allowing students to create new versions of their quizzes and tests and provides the user with both the questions and an answer key, allowing for more effective studying.

### Inspiration

As college students, we know the challenges that come with studying for a midterm or final exam. In fact, we both had a midterm recently for our ICS 45C (c++) class. One of the most common methods of studying we found among ourselves and with our peers in the class was studying by reviewing past quizzes, which was useful as topics were compressed into short questions (way easier than reading the 100 pages of notes). However, both my teammate and I noticed it was harder to perform active recall and study when the answer to the question was right in front of our face (hopefully we still did good on the midterm). Seeing AWS Cloudhacks going on, we decided to take the chance and use AWS to create a solution that solves this issue, as well as possibly try to go one step further.

### What it does

Cognition allows you to upload one or multiple old quizzes to our web app and our service will generate a compiled midterm in similar format but with unique questions to make studying more effective. In addition to hiding away the answers from quiz questions, having unique questions removes the secondary issue of having limited quizzes to study from. Our product also generates an answer key quiz so students can properly do the custom midterm and compare results.

### How we built it

Cognition is built with Next.js and hosted on AWS amplify. We also use AWS bedrock to generate these unique quizzes and API Gateway so the client can communicate with the backend. Furthermore, we are using a serverless backend thanks to AWS lambda (with Python) and we have S3 to store data. Finally, AWS IAM allows everything to work together. The quizzes that are created from Bedrock are in .tex format to allow mathematical formatting.

### Challenges we ran into

Generating images using AWS bedrock involved a lot of thinking of how to format the prompt. Additionally, generating the output file to contain all the questions required normally the use of third party libraries or paid API keys. Implementing the third party libraries in Lambda was too difficult, leading to using Gemini to help format the code in a way we didn't need to use third party libraries and ultimately store the result in a readable .tex file to be obtained by the front-end. Adding permissions to invoke the many services and allowing them to work together was also a huge challenge in itself. A finally, one of the biggest issues we ran into (and unfortunately still currently face is getting past CORS). Truthfully, our project is not completely finished.

### Accomplishments that we're proud of

Being able to understand AWS and pick out the right services to take advantage of allowed both of us to see the value in cloud computing. Additionally, we are both very proud to create a meaningful product with a use case that may extend beyond being a project made for a hackathon, potentially helping others in the near future.

### What we learned

We learned to navigate the complexities of AWS and effectively use the various AWS services to make something meaningful. We also learned to be frugal by taking the time of the hackathon seriously and actively hack our project out. Thinking of multiple projects before this one, we also learned about the importance of customer obsession and that starting with the customer (in this case us) was the best way to get good ideas.

### What's next for Cognition

Making Cognition work is our biggest priority right now. We also are considering asking our peers to try out our app and ask for their feedback to possibly make it even better so students across our campus can study more effectively and get better grades. When planning Cognition, we saw a genuine vision for the web-app that could help students. We hope to create proper login details as well as trying to make the app become class-based personalized study system for a user. This means, once the user would be able to login, they could create class elements to signify the classes they are part of, and then they could add references to materials used in the class, notes, past quizzes, and past midterms all to generate helpful quizzes and midterms for all types of classes. We would make the app have more user choice on what type of quizzes they want, making the app their personal storage and study resource for the class

---

Made by Larry Le and Aadi Agrawal.

Devpost can be found here: https://devpost.com/software/cognition-k26j7c?ref_content=my-projects-tab&ref_feature=my_projects
