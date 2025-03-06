def split(txt):
    stack = []
    res = []
    temp = ""
    for c in txt:
        temp += c
        if c == "(":
            stack.append(c)
            
        elif c == ")":
            stack.pop()
            if len(stack) == 0:
                res.append( temp )
                temp = ""
    return res
                
	
print( split("()()()") )
assert ["ASV"] == ["ASV"]
assert split("()()()") == ["()", "()", "()"]
assert split("") == []
assert split("()()(())") == ["()", "()", "(())"]
assert split("(())(())") == ["(())", "(())"]
assert split("((()))") == ["((()))"]
assert split("()(((((((((())))))))))") == ["()", "(((((((((())))))))))"]
assert split("((())()(()))(()(())())(()())") == ["((())()(()))", "(()(())())", "(()())"]
assert split("((()))(())()()(()())") == ["((()))", "(())", "()", "()", "(()())"]
assert split("((())())(()(()()))") == ["((())())", "(()(()()))"]
assert split("(()(()()))()(((()))()(()))(()((()))(())())") == ["(()(()()))", "()", "(((()))()(()))", "(()((()))(())())"]