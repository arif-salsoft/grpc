'use strict';

const PROTO_PATH = "messages.proto";
const protoLoader = require('@grpc/proto-loader')

const fs = require('fs');
const grpc = require('grpc');
const serviceDef = grpc.loadPackageDefinition(protoLoader.loadSync(PROTO_PATH));
const PORT  = 9000;

const cacert = fs.readFileSync(__dirname + '/ca.crt'),
        cert = fs.readFileSync(__dirname + '/client.crt'),
        key  = fs.readFileSync(__dirname + '/client.key');

const kvpair = {
    'private_key': key,
    'cert_chain' : cert
}

const creds = grpc.credentials.createSsl(cacert, key, cert);
const client = new serviceDef.EmployeeService(`localhost:${PORT}`, creds);

const option = parseInt(process.argv[2], 10);

switch (option) {
    case 1:
        sendMetadata(client);
        break;
    case 2:
        getByBadgeNumber(client);
        break;
    case 3:
        getAll(client);
        break;
    case 4:
        addPhoto(client);
        break;
    case 5:
        saveAll(client);
        break;
}

function sendMetadata() {
    const meta = new grpc.Metadata();
    meta.add('username', "arifiqbal");
    meta.add('password', "arifiqbal");
    client.getByBadgeNumber({}, meta, function(){ });
}

function getByBadgeNumber() {
    client.getByBadgeNumber({ badgeNumber: 2080}, function(error, response){
        if(error){
            console.log(error)
            return;
        }
        console.log(response.employee)
    });
}

function getAll() {
    const call = client.getAll({});

    call.on('data', function(data){
        console.log(data.user);
    });
}

function addPhoto() {
    const call = client.addPhoto({}, function(error, response){
        console.log(response);
    });

    const stream = fs.createReadStream(__dirname + '/penguins.jpg');

    stream.on('data', function(chunk){
        call.write({ data: chunk })
    });

    stream.on('end', function () {
        call.end();
    })
}

function saveAll(){
    const emps = [
        {
            id: 3,
            badgeNumber: 3090,
            firstName: "Arif",
            lastName: "Iqbal",
            vacationAccrualRate: 5,
            vacationAccrued: 60,
        },
        {
            id: 4,
            badgeNumber: 3310,
            firstName: "Mohammad",
            lastName: "Sohaib",
            vacationAccrualRate: 90,
            vacationAccrued: 4,
        }
    ];


    const call = client.saveAll();

    call.on('data', function (emp) {
        console.log(emp.employee);
    })

    emps.forEach( emp => call.write({employee: emp}));

    call.end();
}

module.exports = {
    getAll
};