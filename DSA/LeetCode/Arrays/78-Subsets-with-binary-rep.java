class Solution {
    public List<List<Integer>> subsets(int[] nums) {

    List result = new ArrayList()
    for (int i = 0; i < 2 ** arr.length; i++) {

        var rep = (i >>> 0).toString(2).padStart(arr.length, '0').split('');
        var temp = []
        for (int j = 0; j < rep.length; j++) {
            if (rep[j] == 1) {
                temp.push(arr[j])
            }

        }
        result.push(temp)

    }
    return result;
}
}