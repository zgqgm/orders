package com.fc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("ordersLists")
public class OrdersController {

    @RequestMapping("orders")
    public String lode(){
        return "ordersList";
    }
}
