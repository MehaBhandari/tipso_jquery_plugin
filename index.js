$(document).ready(function(){
    jQuery('.top').tipso({
        titleContent: 'Hello',
        titleColor: 'Yellow',
        size: 'large',
        width: '400px',
        position: 'right',
        background: 'tomato',
        content: 'This is the tooltip message',
        useTitle: false,
        onShow: function(){
                    alert("onShow Function has executed...");
                },
        onHide: function(){
                    alert("OnHide Function has executed...");
                }
      });
      
})