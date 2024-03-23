# Write your MySQL query statement below
SELECT Students.student_id , student_name , Subjects.subject_name  , COUNT(Examinations.student_id) as attended_exams
FROM Students
         CROSS  JOIN Subjects
         LEFT  JOIN Examinations
                    on Students.student_id  = Examinations.student_id
                        and Subjects.subject_name = Examinations.subject_name
GROUP BY Students.student_id , student_name , Subjects.subject_name
ORDER BY Students.student_id, subject_name