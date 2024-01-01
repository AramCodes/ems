package com.aramcodes.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class Employee {

    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
}
