(function($) {
  function replaceSubstitutions(str, array) {

    for (var i = 0; i < array.length; i++) {
      str = str.replace('{' + i + '}', array[i]);
    }

    return str;
  }


  $.fn.linkify = function() {

    function _linkify(s) {

      var re = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/im;
      var match, replacements = [],i = 0;
      while (match = re.exec(s)) {
        replacements.push('<a href="' + match[0] + '" target="_new">' + match[0] + '</a>');
        s = s.replace(re, '{' + i + '}');
        i++;
      }

      return i > 0 ? replaceSubstitutions(s, replacements) : s;
    }

    $(this).html(_linkify(this.html()));

    return this;
  };

  $.fn.hashify = function() {

    function _hashify(s) {

      var re = /\B#(\w*[A-Za-z_]+\w*)/im;
      var match, replacements = [],i = 0;
      while (match = re.exec(s)) {
        replacements.push('<a href="http://twitter.com/#search?q=' + escape(match[0]) + '" target="_new">' + match[0] + '</a>');
        s = s.replace(re, '{' + i + '}');
        i++;
      }

      console.log(s);
      return i > 0 ? replaceSubstitutions(s, replacements) : s;

    }

    $(this).html(_hashify(this.html()));

    return this;
  };


})(jQuery);

