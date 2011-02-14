/*
(function($) {
    $.fn.linkify = function() {

        function _linkify(s) {

            var re = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            var url = re.exec(s);

            return s = url ? s = s.replace(re, '<a href="' + url[0] + '" target="_new">' + url[0] + '</a>') : s;
            
        }

        $(this).html(_linkify(this.html()));

        return this;
    };
})(jQuery);
*/

(function($){$.fn.linkify=function(){function _linkify(s){var re=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;var url=re.exec(s);return s=url?s=s.replace(re,'<a href="'+url[0]+'" target="_new">'+url[0]+'</a>'):s;}
$(this).html(_linkify(this.html()));return this;};})(jQuery);