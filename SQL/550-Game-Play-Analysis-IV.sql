WITH firstLogin as  (

SELECT player_id, MIN(event_date) AS first_event_date
FROM Activity
GROUP BY player_id
)
select ROUND( COUNT(CASE WHEN secondDay.event_date is not null then 1 end) /
COUNT(DISTINCT firstDay.player_id ) , 2) as fraction
from firstLogin as firstDay
left join Activity as secondDay
ON secondDay.player_id  = firstDay.player_id
AND
secondDay.event_date  =  DATE_ADD(firstDay.first_event_date, INTERVAL 1 DAY)