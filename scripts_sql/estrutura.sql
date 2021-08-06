CREATE DATABASE lojasbrasileiranas;

USE lojasbrasileiranas;

create TABLE cliente (
    id_cliente int not null AUTO_INCREMENT,
    cpf char(11) not null UNIQUE,
    nome varchar(200) not null,
    email varchar(50) not null,
    senha varchar(80) not null,
    estado varchar(80) not null,
    cidade varchar(80) not null,
    cep char(8) not null,
    bairro varchar(80) not null,
    logradouro varchar(80) not null,
    numero int not null,
    primary key (id_cliente)
);

CREATE TABLE categoria (
    id_cat int not null AUTO_INCREMENT,
    categoria varchar(50) not null,
    primary key (id_cat)
);

create TABLE produto (
    id_produto int not null AUTO_INCREMENT,
    preco float not null,
    nome varchar(80) not null,
    caminho varchar(50) not null,
    id_cat int not null,
    primary key (id_produto),
    FOREIGN key (id_cat) references categoria (id_cat)
);

create TABLE venda (
    id_venda int not null AUTO_INCREMENT,
    frete float not null,
    quantTotal int not null,
    subtotal float not null,
    id_cliente int not null,
    primary key (id_venda),
    FOREIGN key (id_cliente) references cliente (id_cliente)
);

create TABLE item (
    id_item int not null AUTO_INCREMENT,
    quant int not null,
    id_produto int not null,
    id_venda int not null,
    primary key (id_item),
    FOREIGN key (id_produto) references produto (id_produto),
    FOREIGN key (id_venda) references venda (id_venda)
);

drop DATABASE lojasbrasileiranas;