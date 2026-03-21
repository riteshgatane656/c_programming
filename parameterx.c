#include <stdio.h>
void Display(A,B) 
{
    printf("%d %d\n",A,B);
}

int main()
{
    int A=11;
    int B=21;
   Display(A,B);  ///call by value

    return 0;
}