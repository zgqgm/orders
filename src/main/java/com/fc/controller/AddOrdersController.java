package com.fc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("upOrders")
public class AddOrdersController {
    @RequestMapping("orders")
    public String lode(){
        return "addOrders";
    }

    @ResponseBody
    @RequestMapping("add")
    public Map<String, Object> add(String name, String price, String time,String sta){
        Map<String, Object> map = new HashMap<>();
        map.put("success",true);
        System.out.println(name+price+time+sta);
        return map;
    }
}
