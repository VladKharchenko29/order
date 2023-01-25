To launch a test you need to do several steps

Install tools:
* install cypress - npm install cypress --save-dev
* update node_modules - npm install

Scripts:
* npx cypress open - Opens a GUI runner
* npx cypress run - Runs tests in non-gui mode (in console)
* npx cypress run <script> - Runs a specific script


Custom scripts:
To create a custom script proceed to package.json. In the section "scripts" you can add your scripts.
Name of the script could be any and it is up to you.

"start": "npx cypress run --spec cypress/e2e/*" - launches all tests in the folder e2e
so to start that script you should use 
npx cypress run start

Before the tests launch, please make sure that each of the following requirements are met:
* creator_link - should have an active creator with at least one subscription
* purchase_link - should have an active subscription for purchase
* post - should have a created post from any creator
* unsubscribe - should have an active subscription for the account, which is used in specific test
* crypto_disabled - first, the correct creator with disabled crypto should be used. Then, find a mentioned creator's susbcription for purchase.