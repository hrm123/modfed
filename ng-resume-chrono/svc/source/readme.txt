curl -X POST http://localhost:6060/resumes/<name of file uploaded to files folder>

curl -X POST http://localhost:6060/resumes/<name of file uploaded to files folder>














fetch all posts 
 curl -X GET http://localhost:6060/posts

fetch post by identifier 
 curl -X GET http://localhost:6060/posts/88


add new post
curl -X POST  http://localhost:6060/posts -H 'Content-Type: application/json' -d '{"title":"Another post title","body":"Another post body"}'

update post by identifier
curl -X PUT http://localhost:6060/posts/88 -H 'Content-Type:application/json' -d '{ "title": "Another post title", "body": "Another post body" }'

delete single post - http://localhost:6060/posts/id with DELETE http verb
