package com.fc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("addOrders")
public class AddOrdersController {
    @RequestMapping("add")
    public Map<String, Object> add(String name, String price, Date time,String sta){
        Map<String, Object> map = new HashMap<>();
        map.put("success",true);
        System.out.println(name+price+time+sta);
        return map;
    }
}
