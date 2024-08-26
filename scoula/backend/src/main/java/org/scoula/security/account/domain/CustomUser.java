package org.scoula.security.account.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

@Getter
@Setter
public class CustomUser extends User {

    private MemberVO member; // 실질적인 사용자 데이터

    //username, password, authorities를 파라미터로 받는 생성자
    public CustomUser(String username, String password,
                      Collection<? extends GrantedAuthority> authorities) {
        //Collection<? extends GrantedAuthority> : 권한을 나타내는 객체들의 컬렉션
        super(username, password, authorities);
    }

    public CustomUser(MemberVO vo) {
        super(vo.getUsername(), vo.getPassword(), vo.getAuthList());
        this.member = vo;
    }
}
