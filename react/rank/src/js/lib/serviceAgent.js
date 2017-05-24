cordova.define('phonegap/serviceAgent', function(require, exports, module) {
  module.exports = {
    pluginClass: 'CordovaUtil',
    //构建参数
    buildArgs: function(data) {
      var args;
      if (Object.prototype.toString.call(data) === '[object Array]') {
        args = data;
      } else {
        args = [];
        if (Object.prototype.toString.call(data) === '[object Object]') {
          for (var k in data) {
            if (data.hasOwnProperty(k)) args.push({ key: k, value: data[k] });
          }
        } else if (data != null) {
          args.push(data);
        }
      }
      return args;
    },
    /**
		 * 发送多个请求
		 * @param {Array} options  调用参数数组
		 * @param {string} loading 加载等待的文本
		 */
    request: function(action, options, loading) {
      //构建请求参数
      var jsonArr = [];
      for (var i = 0; i < options.length; i++) {
        jsonArr.push({
          url: options[i].url,
          args: this.buildArgs(options[i].data)
        });
      }
      alert(JSON.stringify(jsonArr));
      //执行调用
      document.addEventListener(
        'deviceready',
        function() {
          if (loading)
            cordova.exec(null, null, 'Notification', 'activityStart', [
              '',
              loading
            ]);
          cordova.exec(
            function(results) {
              //递归处理success后的回调
              for (var i = 0; i < results.length; i++) {
                if (results[i].isSuccess) {
                  if (options[i].success) {
                    options[i].success.call(
                      options[i],
                      results[i].value,
                      results
                    );
                  }
                } else {
                  if (options[i].error) {
                    options[i].error.call(
                      options[i],
                      results[i].value,
                      results
                    );
                  }
                }
              }
            },
            function(e) {
              alert('调用失败:' + JSON.stringify(e));
            },
            this.pluginClass,
            action,
            jsonArr
          );
          if (loading)
            Cordova.exec(null, null, 'Notification', 'activityStop', []);
        },
        false
      );
    },
    /**
		 * 接口中转
		 * @param {Array} options  调用参数数组
		 * @param {string} loading 加载等待的文本
		 */
    requestApi: function(options, loading) {
      this.request('requestApi', options, loading);
    },
    /**
		 * h5调原生功能
		 * @param {Array} options  调用参数数组
		 * @param {string} loading 加载等待的文本
		 */
    requestNative: function(options, loading) {
      this.request('requestNative', options, loading);
    }
  };
});
var serviceAgent = cordova.require('phonegap/serviceAgent');
