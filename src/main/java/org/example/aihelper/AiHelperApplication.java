package org.example.aihelper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // 仅扫描本包及子包
public class AiHelperApplication {

    public static void main(String[] args) {
        SpringApplication.run(AiHelperApplication.class, args);
    }

}
