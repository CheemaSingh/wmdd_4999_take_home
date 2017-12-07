'use strict';
var AWS = require('aws-sdk');
var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
var tableName = "wmdd-4999-take-home";


module.exports.requestUploadURL = (event, context, callback) => {
  var s3 = new AWS.S3();
  var params = JSON.parse(event.body);

  var s3Params = {
    Bucket: 'cheema-filesharing',
    Key:  params.name,
    ContentType: params.type,
    ACL: 'public-read',
  };

  var filename = params.name;
  var description = params.description;
  var imageURL = "https://s3-us-west-2.amazonaws.com/cheema-filesharing/" + filename;

  var uploadURL = s3.getSignedUrl('putObject', s3Params);


var item = {
     "id":filename,
     "filename":  filename,
     "description": description,
     "imageURL": imageURL
};
 var params = {
     TableName:tableName, 
     Item: item
 };
 dynamo.putItem(params,function(err,data){
     if (err) console.log(err);
     else console.log(data);
 });  
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ uploadURL: uploadURL }),
  })
}

module.exports.list = (event, context, callback) => {
    var params = {
        TableName: tableName,
        ProjectionExpression: "id, filename, description,imageURL"
    };

    console.log("Scanning Images table.");
    const onScan = (err, data) => {

        if (err) {
            console.log('Scan failed to load data. Error JSON:', JSON.stringify(err, null, 2));
            callback(err);
        } else {
            console.log("Scan succeeded.");
            return callback(null, {
                statusCode: 200,
                 headers: {
              'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
              },
                body: JSON.stringify({
                    images: data.Items
                })
            });
        }

    };

    dynamo.scan(params, onScan);

};