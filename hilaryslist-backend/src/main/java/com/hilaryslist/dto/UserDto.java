package com.hilaryslist.dto;



import com.hilaryslist.model.Role;

public class UserDto {
    private Long id;
    private String displayName;
    private String email;
    private Role role;

    public UserDto(Long id, String displayName, String email, Role role) {
        this.id = id;
        this.displayName = displayName;
        this.email = email;
        this.role = role;
    }

    public Long getId() { return id; }
    public String getDisplayName() { return displayName; }
    public String getEmail() { return email; }
    public Role getRole() { return role; }
}
