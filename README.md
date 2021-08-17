# gaviti-home-assigment

# post a test request
using postman,  
post to localhost:3000/search  
set headers to 'application-json'  
body: raw , JSON  
enter body:  
```
{
    "startDate" : "20140101" ,
    "endDate" : "20181231"
}
```


click send
you will get a link to the 'download site'

# data imported to mongo
The data was imported using studio3t import tool
I've considered using compass and convert date to iso, and map fields names but had no time. 
