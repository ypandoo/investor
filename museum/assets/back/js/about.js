(function(){
  var self = this;

  //avalon control space
  var content_ctrl = avalon.define({
                   $id: 'content_ctrl',
                   content_text:'',

                   validate: {
                     onValidateAll: function (reasons) {

                      var submit_data = {
                              'html':  ue.getContent(),
                              'text':  ue.getContentTxt(),
                      };

                      //Ajax
                      console.log('Submit:提交数据');
                      console.log(submit_data);

                      var url = base_url+'About/update_about';
                      //url call data error_call
                      base_remote_data.ajaxjson(
                        url, //url
                        function(data){
                          if(data.hasOwnProperty('success')){
                                if(data.success == 1){
                                    console.log(data);
                                    alert('文章更新成功！');
                                }
                                else{
                                    alert(data.message);
                                }
                            }
                          else {
                            alert('返回值错误!');
                          }
                      },
                      submit_data,
                      function()
                      {
                        alert('网络错误!');
                      });

                     }//End onValidateAll
                   },//End validate
    get_about:function(){
        var url = base_url+'About/get_about';
        //url call data error_call
        base_remote_data.ajaxjson(
          url, //url
          function(data){
            if(data.hasOwnProperty('success')){
                  if(data.success == 1){
                      console.log(data);
                      ue.setContent(data.data[0].HTML);
                  }
                  else{
                      alert(data.message);
                  }
              }
            else {
              alert('返回值错误!');
            }
        },
        '',
        function()
        {
          alert('网络错误!');
        });
    }
  });


  //Init codes run once
  //content_ctrl.get_list();
  var ue = UE.getEditor('editor');
  content_ctrl.get_about();


}).call(define('space_about'));
