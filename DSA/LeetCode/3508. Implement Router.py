class Router:

    def __init__(self, memoryLimit: int):
        self.memoryLimit = memoryLimit
         
        self.packetQueue = deque()
        self.existingPackets = defaultdict(int)
         
        

    def addPacket(self, source: int, destination: int, timestamp: int) -> bool:
        if self.existingPackets[(source, destination,timestamp)] >= 1:
            return False
        if len(self.packetQueue) + 1 > self.memoryLimit:
            first = self.packetQueue.popleft()
            self.existingPackets[first] -=1
        self.packetQueue.append((source, destination, timestamp))
        self.existingPackets[(source, destination,timestamp)] +=1
        
        return True

    def forwardPacket(self) -> List[int]:
        
        if len(self.packetQueue) > 0:

            packet = self.packetQueue.popleft() 
            self.existingPackets[packet] -= 1
            return packet
        
        else: 
            return []
        

    def getCount(self, destination: int, startTime: int, endTime: int) -> int:
        count_ = 0 
        for p in self.packetQueue:
            if p[1] == destination and p[2] >= startTime and p[2] <= endTime:
                count_ += 1
        return count_


        


# Your Router object will be instantiated and called as such:
# obj = Router(memoryLimit)
# param_1 = obj.addPacket(source,destination,timestamp)
# param_2 = obj.forwardPacket()
# param_3 = obj.getCount(destination,startTime,endTime)