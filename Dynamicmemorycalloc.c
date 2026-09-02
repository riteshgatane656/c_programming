#include <stdio.h>
#include<stdlib.h>

int main() 
{

  int Size = 0;
  printf("Enter no of elements\n");
  scanf("%d",&Size);

  float * Marks = NULL ;

  ///Dynamic Memory allocation
  int i = 0;

  Marks =(float *)calloc(Size , sizeof(float));

  //Static Memory allocstion
   // float Marks[5];     ///20 bytes  
    
    
    printf("Enter your marks:\n");

    //iteration
       ///  1   2    3
    for(i=0;i<Size ;i++)
    {
      scanf("%f",&Marks[i]);  //4    
    }

    printf("Enter marks are:\n ");

    //iteration
     ///  1   2    3
    for(i=0;   i<Size  ;i++)   
    {
      printf("%f\n", Marks[i]);  //4    
    }    

    free(Marks);
    return 0;
}