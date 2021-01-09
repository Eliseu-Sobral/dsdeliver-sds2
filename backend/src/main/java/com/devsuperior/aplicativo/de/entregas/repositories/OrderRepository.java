package com.devsuperior.aplicativo.de.entregas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.aplicativo.de.entregas.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
