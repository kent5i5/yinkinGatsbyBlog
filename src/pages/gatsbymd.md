---
title: "Make PostgreSQL available on local network and allow second computer to connect to it"
date: "2017-08-10"
---
Make PostgreSQL available on local network and allow second computer to connect to it

If you have two computer, you can have one computer running as SQL server while other one serves as developing device. 

Download the PostgerSQL from  https://www.postgresql.org/download/

Follow the Installation instructions and install packages

Open the PostgreSQL package's data files
For example: C:/PostgreSQL/12/data
we found postgresql.conf and pg_hba.conf

In postgresql add 
listen_addresses = '*' 

now postgresql listen to other TCP/IP other than localhost

In pg_hba.conf add:
host databa-seserver-name username address/submask md5
example:
host postgreSQL12 postuser 192.168.1.0/24 md5

Open connection on the computer running postgre for port 5432 ( default port for postgresql):
Setting-> Network&Internet -> Windows Firewall -> Advanced setting ( Windows Defender Firewall with Advanced Security) 
inbound Rules -> New Rule 
Choose Protoco and Ports - Port - TCT - Specific local ports type 5432 - ALlow the connection - Private, Public - Enter name - Finish

Result: You will be able to write frontend code on one computer and monitor your postgre database on server computer. 




<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>