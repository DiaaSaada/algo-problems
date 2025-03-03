import hashlib
import bisect

class ConsistentHashing:
    def __init__(self, nodes=None, num_replicas=3):
        """Initialize the consistent hashing ring."""
        self.ring = {}  # Maps hash to node
        self.sorted_keys = []  # Sorted list of hashes
        self.num_replicas = num_replicas  # Virtual nodes per real node

        if nodes:
            for node in nodes:
                self.add_node(node)

    def _hash(self, key):
        """Generate a hash using MD5 and return as an integer."""
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_node(self, node):
        """Add a new node (with replicas) to the hash ring."""
        for i in range(self.num_replicas):
            replica_key = f"{node}#{i}"
            hash_val = self._hash(replica_key)
            self.ring[hash_val] = node
            bisect.insort(self.sorted_keys, hash_val)

    def remove_node(self, node):
        """Remove a node (and its replicas) from the hash ring."""
        for i in range(self.num_replicas):
            replica_key = f"{node}#{i}"
            hash_val = self._hash(replica_key)
            if hash_val in self.ring:
                del self.ring[hash_val]
                self.sorted_keys.remove(hash_val)

    def get_node(self, key):
        """Find the closest node in the ring for the given key."""
        if not self.ring:
            return None

        hash_val = self._hash(key)
        index = bisect.bisect(self.sorted_keys, hash_val) % len(self.sorted_keys)
        return self.ring[self.sorted_keys[index]]

# Example Usage
nodes = ["Node1", "Node2", "Node3"]
ch = ConsistentHashing(nodes, num_replicas=5)

# Lookup nodes for different keys
print("user1" , ch.get_node("user1"))  # Returns assigned node for "user1"
print("user2" , ch.get_node("user2"))  # Returns assigned node for "user2"

# Dynamically add a node
ch.add_node("Node4")
print(ch.get_node("user3"))  # New assignments after adding a node

# Remove a node
ch.remove_node("Node2")
print("user4", ch.get_node("user4"))  # New assignments after removing a node
print("user1", ch.get_node("user1"))
for i in range(33):
    user  =  f"user{i}"
    print(user, ch.get_node(user))

