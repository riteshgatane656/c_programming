#include <stdio.h>

int main() 
{
    float Marks[5];///20 bytes   
    printf("Enter your marks:\n");

    //SEquence     ///forr 
    scanf("%f",&Marks[0])   
    scanf("%f",&Marks[1])
    scanf("%f",&Marks[2]);
    scanf("%f",&Marks[3]);
    scanf("%f",&Marks[4]);
 /////for loop 
    printf("Enter marks are:\n ");
    printf("%f\n",Marks[0]);
    printf("%f\n",Marks[1]);

    printf("%f\n",Marks[2]);
    printf("%f\n",Marks[3]);

     printf("%f\n",Marks[4]);


    
    return 0;
}