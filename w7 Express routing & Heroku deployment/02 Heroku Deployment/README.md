
# Deploying to Heroku

Heroku provides a free hosting tier and makes it really easy to deploy your API. Unlike other material in this module you will need to be working with a separate git repository containing only a single NodeJS project, your assignment API for example. Start by creating a free [Heroku](https://www.heroku.com) account.

Once you have created your account and logged in you need to download and install the [Heroku Toolbelt](https://toolbelt.heroku.com). Once this is installed you need to **log in**.
```
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku login
Enter your Heroku credentials.
Email: username@email.com     
Password (typing will be hidden):
Authentication successful.
```
Next you need to navigate into the root of your Git repository and create a new Heroku project, replacing _project-name_ with your chosen project name. Each hosted project need to have a unique name so your first choice may not be available.
```
heroku create project-name
Creating project-name... done, stack is cedar-14
https://project-name.herokuapp.com/ | https://git.heroku.com/project-name.git
Git remote heroku added
```
This will create a new project on the Heroku servers and will also add a _heroku git remote_. You can check this has happened.
```
git remote -v
heroku	git@heroku.com:project-name.git (fetch)
heroku	git@heroku.com:project-name.git (push)
```
If you need to add the remote manually you can find the correct procedure by loading the [dashboard](https://dashboard.heroku.com/apps) page, selecting your app then choosing the **Deploy** tab.

### TODO 1 Test your understanding

1. Last week you coded a little REST API. Continue to work with your code, but create a new project in GitLab for it and a new workspace in Cloud 9.
2. Implement a small client side to use your API.
3. Deploy your code in Heroku.
