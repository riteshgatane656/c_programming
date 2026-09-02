//Internally Pointer is Treated as Array and Array can be treated as Pointer 
//Arr is Given as the Base Address 

#include <stdio.h>

int main()
{
    int Arr[] = {10  ,20 , 30 ,40 };


    int * p = Arr  ;

    printf("Value  of *p : %d\n",&p);

    printf("Base Address  of  Arr : %d\n", &Arr);

    printf("BAse Address  of Arr[0] : %d\n",&Arr[0]);
    return 0 ;
}