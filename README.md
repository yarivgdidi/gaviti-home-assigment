# gaviti-home-assigment

# post a test request
using postman,
post to localhost:3000/search
set headers to 'application-json'
body: raw , JSON
enter body:
{
    "startDate": "123",
    "endDate": "456"
}

click send

# data imported to mongo
the data was imported using studio3t import tool
I've considered using compas and convert date to iso, but had no time
