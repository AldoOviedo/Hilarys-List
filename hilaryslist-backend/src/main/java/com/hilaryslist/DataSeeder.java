package com.hilaryslist;

import com.hilaryslist.model.Role;
import com.hilaryslist.model.User;
import com.hilaryslist.repository.CafeRepository;
import com.hilaryslist.repository.ReviewRepository;
import com.hilaryslist.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ReviewRepository reviewRepository;
    private final CafeRepository cafeRepository;

    @Value("${HILARY_PASSWORD:changeme123}")
    private String hilaryPassword;

    @Value("${ALDO_PASSWORD:changeme456}")
    private String aldoPassword;

    public DataSeeder(UserRepository userRepository,
                      CafeRepository cafeRepository,
                      ReviewRepository reviewRepository,
                      PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.cafeRepository = cafeRepository;
        this.reviewRepository = reviewRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            userRepository.save(new User("Hilary", "hilarylathrop@gmail.com",
                    passwordEncoder.encode(hilaryPassword), Role.ADMIN));
            userRepository.save(new User("Aldo", "aldooviedo98@gmail.com",
                    passwordEncoder.encode(aldoPassword), Role.ADMIN));
            System.out.println("Seed data created: Hilary and Aldo");
        }
    }
}
