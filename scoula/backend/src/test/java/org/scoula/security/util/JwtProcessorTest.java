package org.scoula.security.util;

import lombok.extern.log4j.Log4j;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.scoula.config.RootConfig;
import org.scoula.security.config.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = { RootConfig.class, SecurityConfig.class })
@Log4j
class JwtProcessorTest {
    @Autowired
    JwtProcessor jwtProcessor;

    @Test
    void generateToken() {
        String username = "user0";
        String token = jwtProcessor.generateToken(username);
        log.info(token);
        assertNotNull(token);
    }

    @Disabled
    @Test
    void getUsername() {
        String token =
                "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyMCIsImlhdCI6MTcyNDIwNjc3MywiZXhwIjoxNzI0MjA3MDczfQ.u5iziTDE6PFh-tp_yJnEjn8whcnAGjcau0DmGncqRbxTEkDAj5G1J2Z0jl_WAXJ9";
        String username = jwtProcessor.getUsername(token);
        log.info(username);
        assertNotNull(username);
    }
    @Disabled
    @Test
    void validateToken() {
// 5분 경과 후 테스트
        String token =
                "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyMCIsImlhdCI6MTcyNDIwNjc3MywiZXhwIjoxNzI0MjA3MDczfQ.u5iziTDE6PFh-tp_yJnEjn8whcnAGjcau0DmGncqRbxTEkDAj5G1J2Z0jl_WAXJ9";
        boolean isValid = jwtProcessor.validateToken(token); // 5분 경과 후면 예외 발생
        log.info(isValid);
        assertTrue(isValid); // 5분전이면 true
    }
}
