module.exports = {
    apps: [
        {
            "name": "tvzone-01",
            "script": "./index1.js",
            "instances": 1,
            "exec_mode": "cluster"
        }, {
            "name": "tvzone-02",
            "script": "./index2.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-03",
            "script": "./index3.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-04",
            "script": "./index4.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-05",
            "script": "./index5.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-06",
            "script": "./index6.js",
            "instances": 1,
            "exec_mode": "cluster"
        },{
            "name": "tvzone-07",
            "script": "./index7.js",
            "instances": 1,
            "exec_mode": "cluster"
        }
    ]
}