$(document).ready(function() {
    var userFeed = new Instafeed({
        get: 'user',
        userId: '10603786049',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '10603786049.1677ed0.eabf52ac399c4ea7afb829dd850d2fb4',
        sortBy: 'most-recent',
        template: '<div class="ichover"><div class="instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid" draggable="false" onmousedown="return false;"/><div class="likes"><i class="fas fa-heart"></i>{{likes}}</div></a></div></div>',
    });
    userFeed.run();

    

});