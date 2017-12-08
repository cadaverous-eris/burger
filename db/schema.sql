drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers (
	id int auto_increment not null,
	burger_name varchar(255) not null,
	devoured boolean default false not null,
	date timestamp default current_timestamp not null,
	
	primary key (id)
);