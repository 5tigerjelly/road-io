# Road.IO

### Poster
![alt text][poster]

### Analysis Repo
https://github.com/jhall38/rioanalysis/

### Overview
Road.IO is a platform that crowdsources dashcam footage that is then processed and packaged into datasets of images and metadata to be sold to Autonomous Car Companies.
    
Around 400 companies are working to bring their autonomous cars to market right now. However, self-driving cars require huge training datasets of tagged traffic images in a variety of conditions to be properly trained. Despite the high costs of gathering this data, existing and emerging companies are forced to collect the same kinds of information over and over again to protect their competitive advantage. We chose this model  so that our customers have greater flexibility when they train their models and to prevent over fitting. When drivers upload their footage, they help make a worldwide socio-technical impact, and are even paid for their submissions. Currently, we only recognize stop signs.

Our platform addresses these challenges by providing rich, hyper-localized metadata and images. Potentially, this may even turn in to a revenue system where companies can post listings on our site asking uploaders to provide footage of a specific area for a premium.


### Summary of the Major Technology Decisions
We ensured that we added a search feature on all the Autonomous Vehicle Engineer pages: Browsing Dataset, their Previously Purchased Datasets, and the Cart. At the iAffiliates Event, we were able to validate that in general, these broad binary categories were what would be of value to companies with Brian Lent, CTO of Here Technologies; Portland is not substantially different from Seattle in the way that a bustling city would be from an idyllic countryside, for example. As we are on the interpreting and packaging data step, we incorporated that feedback. We also confirmed with Brian than UBI is pretty well known to the Financial wings but as the director of that department would be in charge of judging the merit of Road.IO for their business, it is fine if we kept it. We also revamped our color scheme but met Ms. Ferrari in the middle, we included more blues in our palette, but because we wanted to evoke a futuristic feel, we revisited our moodboard to spread the grays and darker tints and incorporated more colorful pictures in our dashboard. Finally, we made sure to equally cater the landing page to both uploaders and car companies by clearly explaining our UVP and adding lots of sleek, modern pictures.

<img src="src/aws_chris.png" width="425"/> <img src="src/aws_arvind.png" width="425"/> 

To prepare for Capstone, two members became AWS Certified as Solutions Architects at the associate level. 


### Serverless Architecture
<img src="src/serverless.jpg" width="700"/> 

We understood the benefits of Serverless and how we would be able to leverage the powerful product offerings while minimizing cost. We chose AWS Cognito to store user credentials, DynamoDB for fast querying of unstructured data and EC2 in tandem with SQS to execute Computer Vision Jobs. The libary we used for this was DLib's Simple Object Detector. For the front-end, we employed the usual suspects: HTML5, CSS3, and Javascript because of their reliable frameworks and support.


### Contact Us
Arvindram : [Email](mailto:karvi90@gmail.com), [LinkedIn](https://www.linkedin.com/in/arvindramkrishnamoorthy)

Tanner Garrett : [Email](mailto:tanner@garrett.org)

Bum Mook Oh : [Email](mailto:bmo5@uw.edu), [LinkedIn](https://www.linkedin.com/in/bummookoh/)

Josh Hall : [Email](mailto:jhall38@uw.edu), [LinkedIn](https://www.linkedin.com/in/jhall38/)



[poster]: src/roadio_capstone_poster.png "Road.IO Poster"
[aws_arvind]: src/aws_arvind.png "Arvind AWS Certificate"
[aws_chris]: src/aws_chris.png "Chris AWS Certificate"
[serverless]: src/serverless.jpg "Serverless"
