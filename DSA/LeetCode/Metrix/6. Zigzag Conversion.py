class Solution:
    def convert(self, s: str, numRows: int) -> str:

         
        goZigZig =  False
        row, col = 0,0
        
        matrix = [["" for _ in range(len(s))] for _ in range(numRows)]
          
        for char in s:
            if row == 0:
                 
                goZigZig = False
            if row == numRows-1:
                goZigZig = True

          
             
            matrix[row][col]   = char
            if goZigZig:
                row -= 1
                col += 1
            else:
                row +=1
 
        res = ""
        
        for r in range(numRows):  
            
            res +=  "".join(matrix[r])
        return res

            

        