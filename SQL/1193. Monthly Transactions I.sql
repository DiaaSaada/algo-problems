# Write your MySQL query statement below
select  SUBSTRING(trans_date, 1 , 7)
as  month ,   country ,
count(*) as trans_count ,
count( case WHEN state = "approved" then 1 END ) as  approved_count ,
SUM(amount ) as trans_total_amount ,
SUM( case WHEN state = "approved" then amount ELSE 0 END ) as  approved_total_amount
FROM Transactions
GROUP BY SUBSTRING(trans_date, 1 , 7), country