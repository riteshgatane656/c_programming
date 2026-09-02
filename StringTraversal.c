#include <stdio.h>
int main()
{
    char Str[]="Ganesh";
    char* ptr = NULL ;

    ptr = Str ;   //100
    while(*ptr != '\0')
     {
        printf("%c\n",*ptr); 
        ptr ++ ;   
     }


    return 0 ;
}