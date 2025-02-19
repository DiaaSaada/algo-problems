# O(n^2)  on add() / # O(1)  on get() Solution
# class ProductOfNumbers:

    def __init__(self):
        self.matrix = []
         

    def add(self, num: int) -> None:
        self.matrix.append([num])
        if len(self.matrix) > 1:
            for i in range(len(self.matrix[-2])):
                dig = self.matrix[-2][i]
                if self.matrix[-2][i] == 0:
                    break
                p = num * self.matrix[-2][i]
                self.matrix[-1].append(p) 

    def getProduct(self, k: int) -> int:
        if len(self.matrix[-1]) < k :
            return 0
        return self.matrix[-1][k-1] 


# Your ProductOfNumbers object will be instantiated and called as such:
# obj = ProductOfNumbers()
# obj.add(num)
# param_2 = obj.getProduct(k)

# O(1)  on add() / # O(1)  on get() Solution
class ProductOfNumbers:
    def __init__(self):
        self.prefix_products = [1]  # Initialize with 1 to handle multiplication
        self.last_zero_index = -1    # Track the index of the last zero

    def add(self, num: int) -> None:
        if num == 0:
            # Reset the prefix products and track the zero index
            self.prefix_products = [1]
            self.last_zero_index = len(self.prefix_products) - 1
        else:
            # Multiply the current number with the last prefix product
            self.prefix_products.append(self.prefix_products[-1] * num)

    def getProduct(self, k: int) -> int:
        if k >= len(self.prefix_products):
            # If k is greater than the prefix products length, a zero was encountered
            return 0
        # Compute the product of the last k numbers
        return self.prefix_products[-1] // self.prefix_products[-k - 1]