Linkify
=======

A simple jQuery Plugin to automagically create anchors from recognised HTTP links and convert hash tags into links to Twitter
---------------------------------------------------------------------------------

I created linkify after using the @anywhere Twitter library and found that it didn't automatically link urls in tweets or hash tags.

Usage
-----

$([selector]).linkify();
$([selector]).hashify();

Examples
--------

$('p').linkify(); - convert all recognised urls in all matched paragraph elements to hyperlinks.

$('p').hashify(); - convert all recognised hashtags in all matched paragraph elements to links to hash tags on Twitter.


$('.toLink').linkify(); convert all recognised urls in all matched elements with the class .toLink to hyperlinks.

$('.toLink').hashify(); convert all recognised hashtags in all matched all matched elements with the class .toLink tags to links to hash tags on Twitter.



