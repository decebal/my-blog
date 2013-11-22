Symfony Standard Edition - Blog
========================
Installing the Standard Edition -- folow steps on  original repo: https://github.com/symfony/symfony
----------------------------------

Simple steps After cloning this:
----------------------------------
1. composer install
2.  APACHEUSER=`ps aux | grep -E '[a]pache|[h]ttpd' | grep -v root | head -1 | cut -d\  -f1`
	sudo setfacl -R -m u:"$APACHEUSER":rwX -m u:`whoami`:rwX app/cache app/logs
	sudo setfacl -dR -m u:"$APACHEUSER":rwX -m u:`whoami`:rwX app/cache app/logs