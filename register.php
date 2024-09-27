<?php
    $name = $_POST['name'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $gradeLevel = $_POST['grade-level'];
    $tutor = $_POST['tutor'];
    $courseInterests = $_POST['course-interests'];
    $courses = $_POST['courses'];
    $additionalInfo = $_POST['additional-info'];
    $paymentMethod = $_POST['payment-method'];
    $paymentEmail = $_POST['payment-email'];

    $to = 'zhu@athenatutoracademy.com';
    $subject = 'Form Submission';
  
    // Set the email body
    $body = "Name: $name\nAge: $age\nEmail: $email\nAge: $age\nGender: $gender\nGrade Level: $gradeLevel\nTutor: $tutor\nCourse Interests: $courseInterests\nCourses: $courses\nAdditional Info: $additionalInfo\nPayment Method: $paymentMethod\nPayment Email: $paymentEmail";
  
    // Send the email
    mail($to, $subject, $body);
  
    // Redirect the user to a thank you page
    header('Location: thank_you.php');
    exit;
    // Connect to the database
?>