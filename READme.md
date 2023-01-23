To launch a test you need to do several steps

Install tools:
* install cypress - npm install cypress --save-dev
* update node_modules - npm install

Scripts:
* npx cypress open - Opens a GUI runner
* npx cypress run - Runs tests in non-gui mode (in console)


Custom scripts:
To create a custom script proceed to package.json. In the section "scripts" you can add your scripts.
Name of the script could be any and it is up to you.

"start": "npx cypress run --spec cypress/e2e/*" - launches all tests in the folder e2e
so to start that script you should use 
npx cypress run start