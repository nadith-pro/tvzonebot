module.exports = {
    apps: [
        {
            "name": "tvzone-01",
            "script": "./tvzonebot1.js",
            "instances": 1,
            "exec_mode": "cluster"
        }, {
            "name": "tvzone-02",
            "script": "./tvzonebot2.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-03",
            "script": "./tvzonebot3.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-04",
            "script": "./tvzonebot4.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-05",
            "script": "./tvzonebot5.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-06",
            "script": "./tvzonebot6.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-07",
            "script": "./tvzonebot7.js",
            "instances": 1,
            "exec_mode": "cluster"
        }
    ]
}