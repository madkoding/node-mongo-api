# Node.js Mongo RESTful API
[![Total alerts](https://img.shields.io/lgtm/alerts/g/madkoding/node-mongo-api.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/madkoding/node-mongo-api/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/madkoding/node-mongo-api.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/madkoding/node-mongo-api/context:javascript)

## Docker API and Mongo

This command will lauch a docker image with mongo and the api server to test locally
```bash
$ docker-compose up -d
```

To check the logs for the api response
```bash
$ docker logs -f api
```

To kill docker instances
```bash
$ docker kill api
$ docker kill mongo-express
$ docker kill mongo
```

### Node.js API without Mongo

Raise de development instance with
```
$ npm start
```

When you commit your code, automaticly fix it any linter problems.
If you wish to check them just run `npm run lint`
If you wish to auto fix them just `npm run lint:fix`
If you wish to modify the code, fork this repo and replace the api endpoints,
and don't forget to star it ;>

And then just hit the endpoint to the port 5000 as is the default setted in code,
or the alternative is to set the `PORT` in the environment vars

## Endpoints

| Method | URL | What is | Sample Data |
| ------ | --- | ------- | ----------- |
| GET | http://localhost:5000/colaborator | Get list | |
| GET | http://localhost:5000/colaborator/1 | Get one by id | |
| POST | http://localhost:5000/colaborator | Post data | `{"name":"blah", "rut": "1234"}` |
| PUT | http://localhost:5000/colaborator/1 | Update data by id | `{"name":"blah","rut":"4321","age": 22}` |
| DELETE | http://localhost:5000/colaborator/1 | Delete data by id |

### Mongo Dashboard (when using docker image)

Open your browser at [http://localhost:8081](http://localhost:8081)

## Troubleshooting

If you have mongo connection timeouts or issues, just re run the image
```bash
$ docker-compose restart api
```

## Environment vars

| Env | Sample data |
|-----|-------------|
| PORT | 5000 |
| URI  | mongodb://root:root@localhost:27017/example |

<!-- AUTO-UPDATE-DATE -->
**Última actualización:** 2026-02-20 03:21:12 -03
