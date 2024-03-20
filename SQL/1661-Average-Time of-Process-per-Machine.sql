# Write your MySQL query statement below
SELECT started.machine_id  , 
ROUND(AVG(ender.timestamp - started.timestamp),3) as processing_time 
FROM Activity  as started
INNER JOIN   Activity  as ender
ON started.machine_id =  ender.machine_id 
AND started.process_id = ender.process_id
and started.activity_type  =  "start"
AND ender.activity_type = "end"
GROUP BY started.machine_id