const {Client}=require('pg')

const environment='DESARROLLO';

let client;

if (environment=='DESARROLLO'){
    client=new Client({
        host:'ec2-75-101-142-91.compute-1.amazonaws.com',
        port:5432,
        database:'d1imauvd6b7ead',
        user:'nwgduvvrtdrkoo',
        password:'100029e82f1568a271314f96222fd7f33cfa1784386e650f9923911027034c68',
        ssl:'true'
    })
}

/*
if (environment=='PRODUCCION'){
     client=new Client({
        host:'ec2-50-19-105-188.compute-1.amazonaws.com',
        port:5432,
        database:'d9j66f96la2sl8',
        user:'omfmobapptjmda',
        password:'6210dfdd76d76d84783de8d11c63c3937a579dadd91b08e58a764f0175ad1cd3',
        ssl:'true'
    })
}
*/

client.connect();

module.exports=client;