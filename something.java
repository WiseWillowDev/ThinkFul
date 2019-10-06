  public static boolean containsUnique(List<Character> unique , String temp) {
         boolean hasIt = false;
         int counter = 0;
        for(int i = 0; i < unique.size(); i ++) {
            for(int j = 0 ; j < temp.length(); j ++) {
                if(temp.charAt(j) == unique.get(i)) {
                    counter++;
                    break;
                }
            }
        }
        if(counter == unique.size()) {
            hasIt = true;
        }
         return hasIt;
     }


    public static int shortestSubstring(String s) {
        List<Character> unique = new ArrayList<Character>();
        for (char c: s.toCharArray()) {
            if (!unique.contains(c)) {
                unique.add(c);
            }
        }
        if(unique.size() == 1){
            return 1;
        }
        if(unique.size() == 2) {
            return 2;
        }
        if(unique.size() == s.length()) {
            return s.length();
        }
        for(int y = 0; y < s.length()-(unique.size()); y++) {
            int limit = (s.length()-(unique.size() - (1 - y)));
            for(int i = 0; i < limit; i++) {                                        
                int x = i + unique.size() + y;
                String temp = s.substring(i, x);
                if(containsUnique(unique, temp)){
                    return temp.length();
                }
            }
        }
        return 0;
    }