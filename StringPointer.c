#include <stdio.h>
int main()
{
    char Str[]="Ganesh";
    char* ptr = NULL ;
    ptr = Str ;   //100
    printf("%c\n",*ptr); //G
    ptr ++ ;   //101


    printf("%c\n",*ptr); //a
    ptr++ ; //102

    printf("%c\n",*ptr);//n 
    ptr++;//103

    




    return 0 ;
}