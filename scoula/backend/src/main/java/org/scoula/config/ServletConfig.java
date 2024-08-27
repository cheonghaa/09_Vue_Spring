package org.scoula.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@EnableWebMvc
@ComponentScan(basePackages = {
        "org.scoula.controller",
        "org.scoula.exception",
        "org.scoula.board.controller",
        "org.scoula.member.controller",}) // Spring MVC용 컴포넌트 등록을 위한 스캔 패키지
public class ServletConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/")
                .setViewName("forward:/resources/index.html");
    }
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**")
                .addResourceLocations("/resources/");
        registry.addResourceHandler("/assets/**")
                .addResourceLocations("/resources/assets/");
    }


//    @Bean
//    //MultipartResolver는 파일 업로드 요청을 처리하고
//    //업로드 된 파일을 애플리케이션에서 사용할 수 있는 형태로 변환해주는 역할
//    public MultipartResolver multipartResolver() {
////        StandardServletMultipartResolver resolver
////                = new StandardServletMultipartResolver();
////        return resolver;
////        위 아래 둘 다 같은 코드
//        return new StandardServletMultipartResolver();
//    }

    // Servlet 3.0 파일 업로드 사용시 - MultipartResolver 빈 등록
    @Bean
    public MultipartResolver multipartResolver() {
        StandardServletMultipartResolver resolver
                = new StandardServletMultipartResolver();
        return resolver;
    }

}