# React-Practical-9
  React App Deployment in AWS
  
# Before we get started, you need to have:

  1. A Github account
  2. An AWS Account

## Step 1: Create Amazon S3 Bucket
![image](https://user-images.githubusercontent.com/97098100/163358700-f83fcc7b-cc30-4527-bca8-5391f27fb057.png)

## Step 2:Add Bucket Policy
This makes the contents of your bucket publicly available. This action is not recommended when working with S3 buckets, but for this our purpose this is fine.

Under Buckets, choose the name of your bucket(s3-github-actions) > Choose Permissions > Choose Bucket Policy.

Copy the following bucket policy, and paste it in the editor.

![Screenshot from 2022-04-14 15-14-47](https://user-images.githubusercontent.com/97098100/163359639-2fdaeffd-8d0d-4e5e-8ebe-1cba48f1af8f.png)

Update the snippet to include your bucket name. In the bucket policy, <bucket-name> you must update this name to match your bucket name.
Then, click on Save.

## Step 3: Enable Static Website Hosting
![image](https://user-images.githubusercontent.com/97098100/163360597-bbf65ab2-db58-4930-a89b-fad529b83487.png)
That's it for AWS

## Step 4: In github
After create react app clone the sample React App repository S3-Github Actions React App that we will be using for this post and add your repository's remote URL. 
  
## step 5: Now go to github repo setting->security->Secrets->Actions
![image](https://user-images.githubusercontent.com/97098100/163363665-dc07ac93-e1f9-4e8b-a966-335b3616a405.png)

## Step 6: Create New repo secrets
![image](https://user-images.githubusercontent.com/97098100/163367558-b93defa2-7ad7-4d82-9a9e-0cc3b974a233.png)

## Step 7:  Add AWS credentials 
![Screenshot from 2022-04-14 15-58-41](https://user-images.githubusercontent.com/97098100/163369008-021f3e7a-19f5-487e-b29d-2878cd062686.png)

## Step 8: Add your workflow accordingly and commit it.
![Screenshot from 2022-04-14 16-01-34](https://user-images.githubusercontent.com/97098100/163371077-32dbb286-a9ee-46f1-ba5c-47bc85d588fe.png)

That's it site is live

### Live preivew
#### Open http://userlist-prac-9.s3-website-us-west-2.amazonaws.com/
  
  
  
# React-Practical-7
  React App Deployment

# Output:
![Screenshot from 2022-04-01 16-17-47](https://user-images.githubusercontent.com/97098100/161249204-f4fff03b-81dc-4e72-89b3-e921df483081.png)

# Development Mode
![Screenshot from 2022-04-01 17-39-59](https://user-images.githubusercontent.com/97098100/161262260-65ee1e82-83b1-4eb7-a0e6-75f51740dc97.png)

# Production Mode
![Screenshot from 2022-04-01 17-37-56](https://user-images.githubusercontent.com/97098100/161262391-23a9b8ac-31bd-4196-962b-a4471bec6d1f.png)

# Staging Mode
![Screenshot from 2022-04-01 17-38-10](https://user-images.githubusercontent.com/97098100/161262509-501d97a9-e1a4-477e-a55f-25fd926b073e.png)


# 1. [Setup React](https://reactjs.org/docs/try-react.html)

# 2. Clone the repo
```sh
$ https://github.com/bhumilodhari/Reactjs-Practical7-deploy
$ cd Reactjs-Practical6/
```

# 3. Install dependency
```sh
$ npm install
```

# 4. Start Development:
```sh
$ npm run start:dev
```

Runs the app in the development mode.
#### Open http://localhost:3000 to view it in your browser.

# 5. Production Build:
```sh
$ npm run build:production
```

# 6. Staging Build:
```sh
$ npm run build:staging
```
# 7. Serve Build:
```sh
$ serve -s build
```

### Live preivew
#### Open https://users-list-application.netlify.app/to view it in your browser.
