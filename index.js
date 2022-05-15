const request = require("request");

request.post("http://growtopia2.com/growtopia/server_data.php", { body: "version=1&protocol=158",  headers: { "Content-Type": "application/x-www-form-urlencoded" }}, function(error, response, body) {
    if (error) return console.log(error);
    else {
        var server_data = body.split("\n");
        console.log(`IP:${server_data[Math.floor(0)].replace("server|", "")}`);
		    console.log(`PORT:${server_data[Math.floor(1)].replace("port|", "")}`);
    }
});
