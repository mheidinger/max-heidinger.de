FROM linode/lamp:latest
MAINTAINER Max Heidinger

RUN mkdir -p /var/www/max-heidinger.de/public_html/ && mkdir /var/www/max-heidinger.de/log/
ADD public_html /var/www/max-heidinger.de/public_html/

RUN mkdir -p /usr/local/ssl/crt/
ADD crt /usr/local/ssl/crt/

RUN sed -i 's/localhost/www.max-heidinger.de/g' /etc/apache2/apache2.conf
ADD max-heidinger.de.conf /etc/apache2/sites-available/
RUN a2dissite example.com && a2ensite max-heidinger.de && a2enmod ssl

#RUN service mysql start

EXPOSE 80 443
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
