#include <stdio.h>

///call by addresss
int StrlenX(char *ptr)
{
    int i = 0; 

    while(*ptr != '\0')
    {
        i++ ;
        ptr++ ;
    }
    return i;

}

int main()
{
    char Str[]="Ganesh"; //100
    int ret = 0;

    ret = StrlenX(Str);   ///strlen(100)
    printf("String length:%d\n",ret);

    return 0 ;
}