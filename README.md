# Installation Guide

It is recommended to run this site on a linux machine. The following instructions are for a linux machine running a fresh installation of Debian/Ubuntu.

## Install Dependencies

1. Make sure all systems are up to date by running the following commands
```console
foo@bar:~$ sudo apt-get update
foo@bar:~$ sudo apt-get upgrade
```

### Install Apache

1. Use the following command to install Apache2
```console
foo@bar:~$ sudo apt install apache2 -y
```

2. Find your local IP address
```console
foo@bar:~$ hostname -I
```

3. Test the Apache installation by navigating to your local IP address in a web browser. You should see a generic landing page.

4. Configure folder permissions for 
```console
foo@bar:~$ sudo usermod -a -G www-data $USER
foo@bar:~$ -R -f www-data:www-data /var/www
```

### Install PHP
1. Use the following command to install PHP
```console
foo@bar:~$ sudo apt install php -y
```

### Install mySQL Server
1. Use the following command to install MariaDB-Server
```console
foo@bar:~$ sudo apt install mariadb-server -y
```

2. Now run this command to begin installation of the secure mySQL server.
```console
foo@bar:~$ mysql_secure_installation
```
When prompted, respond `Y` to each of the four prompts.

## Pull Source Files
1. Navigate to the `/var/www` folder and run the following code to pull the latest code from GitHub
```console
foo@bar:/var/www$ git clone https://github.com/jakebusse/craftracker.git
```

## Initiate Database
1. Open the db_init.sql file and replace `[USERNAME]` with your desired db username and `[PASSWORD]` with your desired db password.

1. Copy the contents of the db_init.sql file.

2. Run `sudo mysql -u root -p` to open the SQL CLI

3. Paste the SQL code and hit enter

4. Copy the config.php.sample file, then rename it to config.php. Complete the variables with the db username and password you chose in step 1.

## Adjust VirtualHost
1. Open `/etc/apache2/sites-available/000-default.conf'

2. Change DocumentRoot from `/var/www/html` to `/var/www/[your instance folder]` where [your instance folder] is the directory housing your Craftracker source files.

3. Run the command
```console
foo@bar:~$ sudo systemctl reload apache2
```