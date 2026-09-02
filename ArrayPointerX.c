// Array Can Also Represented By 
/*      Arr[2]
        *[Arr + 2]
        *[2 + Arr]
        2[Arr]
*/


#include <stdio.h>

int main()
{
    int Arr[] = {10  ,20 , 30 ,40 };


    int * p = Arr  ;

    printf("Value  of *p : %d\n",&p);

    //Has Same Base Address
    printf("Base Address  of  Arr : %d\n", &Arr);
    printf("BAse Address  of Arr[0] : %d\n",&Arr[0]);
  
    printf("Arr by  Arr[2]:%d\n", &Arr[2]);
    printf("Arr by  *(Arr + 2):%d\n", &(*(Arr + 2)));
    printf("Arr by  &(*(2 + Arr)):%d\n", &(*(2 + Arr)));
    printf("Arr by  &2[Arr]:%d\n", &2[Arr]);
    
    return 0 ;
}