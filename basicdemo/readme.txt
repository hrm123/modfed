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


shared packages
----------------------
copy shared directory into node_modules folder of both local and remote packages

edit remote pkg shared/index.js to 
export default "This is a shared module from remote project"

add this shared project as dependency in remote package.json
"dependencies": {
    "shared": "^1.0.0"
  }

edit local package shared/index.js toexport default "This is a shared module from local project"
add this shared project as dependency in local package.json
"dependencies": {
    "shared": "^1.0.0"
  }
npm run start

browse 
http://localhost:3333/
You will see 2 text
Local package
REMOTE: Info module says This is a shared module from remote project

This means even the local website is using the shared package that is provided by the remote. This an be done if local project imports shared package even before importing the remote project.

addimport('shared') at start of entry.js file of local package

stop and rerun 
npm run start

Now you will see node_modules_shared_index_js.js chunk in both local and remote project

http://localhost:3333/
will show 2 text
Local package
REMOTE: Info module says This is a shared module from local project
=> now it is loading share module from local package

