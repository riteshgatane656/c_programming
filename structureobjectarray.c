#include<stdio.h>
//declaration 
//#pragma pack(1)
struct demo
{
    int i ;
    float f;
};

int main()
{
  struct demo arr[4];

  printf("Size of array\n",sizeof(arr[4]));
  arr[0].i = 11;
  arr[0].f = 11.0f;

  arr[1].i = 21;
  arr[1].f = 21.0f;

  arr[2].i = 51;
  arr[2].f = 51.0f;

  arr[3].i = 101;
  arr[3].f = 101.0f;


  printf("%d\n",arr[2].i); //51
  printf("%d\n",arr[1].f); //21.0f
  printf("%d\n",arr->i);
     return 0;

}