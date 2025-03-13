"""Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3."""

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        
         
        self.memo ={}
        def dp(p1,p2, l):
            k =  f"{p1}-{p2}-{l}"
            if k in self.memo:
                print( "Cahced")
                return self.memo[k]
            """لم احد المؤشرات يطلع برا معناها ما عاد في شي مشترك, رجعاكبر قيمة"""
            if p1 >= len(text1)  or p2 >= len(text2):
                self.max_ = max( self.max_ , l)
                self.memo[k] =  self.max_
                return self.memo[k]
            """text1[p1] == text2[p2]: اذا 
                معناها مشتركين, مشي المؤشرات و زيد الطول"""
            if text1[p1] == text2[p2]:
                return dp(p1+1,p2+1, l+1)
            
            """والا خود الماكس  من الاحتمالين"""
            """ مشي المؤشر الاول بس"""
            """ او مشي المؤشر الثاني بس"""
            self.max_ =  max( dp(p1+1,p2 , l ), dp(p1 ,p2+1, l ))
            self.memo[k] =  self.max_
            return self.memo[k]
            
            
              
        return dp(0,0,0)
            
        
        