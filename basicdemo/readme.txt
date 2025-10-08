mkdir basicdemo && cd basicdemo && mkdir remote && mkdir local && cd remote && npm init -y && npm i -D webpack webpack-cli webpack-dev-server && cd .. && cd local &&  npm init -y && npm i -D webpack webpack-cli webpack-dev-server && cd .. && npm init -y && npm i -D lerna 

add 
"workspaces": {
        "packages" : ["local", "remote"]
  }
      to root package.json
      and run
 npx lerna init

lerna makes it easy to work  with multiple projects


Workspaces is a generic term that refers to the set of features in the npm cli that provides support to managing multiple packages from your local file system from within a singular top-level, root package.


to run mod-fed demo inb development mode
---------------------------
npm run start in root folder
and browse to 
http://localhost:3333/

to run the prod mode based onb  mod-fed
---------------------------
npm run build
created dist directories in remote and local projectscopy the dist directory of remote to 'deployed' folder and rename it as 'remote'. copy the following files from 'local' project into 'deployed' directory - public\index.html & dist\main.js.
start python web server at the 'deployed' folder using
python -m http.server 8888
now browse to localhost:8888
you will see 2 divs - one with text from local website and another with text from remote website
