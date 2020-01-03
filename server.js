'use strict';

const PROTO_PATH = "messages.proto";
const protoLoader = require('@grpc/proto-loader')

const fs = require('fs');
const grpc = require('grpc');
const serviceDef = grpc.loadPackageDefinition(protoLoader.loadSync(PROTO_PATH));
const PORT  = 9000;

const UserQueries = require('./app/db/queries/users');

const cacert = fs.readFileSync(__dirname + '/ca.crt'),
        cert = fs.readFileSync(__dirname + '/server.crt'),
        key  = fs.readFileSync(__dirname + '/server.key');

const kvpair = {
    'private_key': key,
    'cert_chain' : cert
}

const employees = require('./employee');

const creds = grpc.ServerCredentials.createSsl(cacert, [kvpair]);

//const creds = grpc.ServerCredentials.createInsecure();

const server = new grpc.Server();

server.addService(serviceDef.EmployeeService.service, {
    getByBadgeNumber: getByBadgeNumber,
    getAll : getAll,
    addPhoto: addPhoto,
    saveAll : saveAll,
    save : save
});

server.bind(`0.0.0.0:${PORT}`, creds);

console.log(`Starting server on port ${PORT}`);

server.start();

function getByBadgeNumber(call, callback) {
    const md = call.metadata.getMap();

    for(let key in md)
        console.log(key, md[key]);

    const badgeNumber = call.request.badgeNumber;

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        if(employees[i].badgeNumber === badgeNumber)
        {
            callback(null, {employee: employee});
            return;
        }
    }

    callback('Error');
}

async function getAll(call) {


    const users = await UserQueries.getAllUsers();

    // let i = 0;

    // console.log(`Numer of users ${users.length}`);

    // const timer = setInterval(() => {
    //     call.write({user: users[i].dataValues});

    //     if(i++ === (users.length - 1))
    //     { 
    //         call.end(); 
    //         clearInterval(timer);
    //     }
    // }, 0);

    users.forEach(user => {
        call.write({user: user.dataValues});
    });

    call.end();
}

function addPhoto(call, callback) {
    const meta = call.metadata.getMap();
    for (const key in meta) {
        const element = meta[key];
        console.log(element);
    }

    let result = new Buffer(0);
    call.on('data', function(data){
        result = Buffer.concat([result, data.data]);
        console.log(`Message received with size ${data.data.length}`);
    });
    call.on('end', function(data){
        callback(null, { isOk: true });
        console.log(`Total fize size is: ${result.length} bytes`);
    })
}

function saveAll(call) {
    call.on('data', function(emp){
        employees.push(emp.employee);
        call.write({ employee: emp.employee });
    });
    call.on('end', function(){
        employees.forEach(emp => {
            console.log(emp);
        });
        call.end();
    })
}

function save(call, callback) {
    
}