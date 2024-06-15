class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {

        Map<Integer, Integer> map = new HashMap();

        for (int n : arr1) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        List res = new ArrayList();

        for (int n : arr2) {
            int repeat = map.getOrDefault(n, 0);

            List<Integer> tempList = new ArrayList<>(Collections.nCopies(repeat, n));

            res.addAll(tempList);
            map.remove(n);
        }

        List<Integer> temp = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int num = entry.getKey();
            int repeat = entry.getValue();
            List<Integer> tempList = new ArrayList<>(Collections.nCopies(repeat, num));
            temp.addAll(tempList);
        }

        Collections.sort(temp);

        res.addAll(temp);

        int[] array = new int[res.size()];
        for (int i = 0; i < res.size(); i++) {
            array[i] = (int) res.get(i);
        }

        return array;
    }
}