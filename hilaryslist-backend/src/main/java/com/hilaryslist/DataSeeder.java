package com.hilaryslist;

import com.hilaryslist.model.User;
import com.hilaryslist.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {
            userRepository.save(new User("Hilary"));
            userRepository.save(new User("Aldo"));
            System.out.println("Seed data created: Hilary and Aldo");
        }
    }
}
