import http from "http";

const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html;charset=utf-8")
    console.log(`hello server", "你好主機 ${process.argv[2]}`);
});

server.listen(9000, () => {
    console.log("server id running @ http://localhost:9000");
})