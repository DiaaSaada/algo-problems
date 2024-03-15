# https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/description/?envType=study-plan-v2&envId=top-sql-50

WITH cte as ( SELECT requester_id as id
FROM RequestAccepted
UNION ALL
SELECT accepter_id  as id
FROM RequestAccepted )

SELECT id, COUNT(1) as num
FROM cte
GROUP BY id
ORDER BY num DESC
LIMIT 1