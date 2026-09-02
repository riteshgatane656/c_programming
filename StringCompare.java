class StringCompare
{
    public static void main(String A[] )
    {
        String s1 = "Ganesh";    //String constant pool 
        String s2 = new String("Ganesh");  // Heap 

        if(s1 == s2)  ///it will compare the hashcode
        {
            System.out.println("String are equal");

        }

        else
        {
          System.out.println("String are not equal");
        }
    
    }
}