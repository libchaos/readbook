#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <errno.h>
#include <sys/socket.h>
#include <stdlib.h>
#define BUF_SIZE 100

int main(){
    int s[2];
    int w,r;
    char * buf = (char*)calloc(1 , BUF_SIZE);
    pid_t pid;

    if( socketpair(AF_UNIX,SOCK_STREAM,0,s) == -1 ){
        printf("create unnamed socket pair failed:%s\n",strerror(errno) );
        exit(-1);
    }

    if( ( pid = fork() ) > 0 ){
        printf("Parent process's pid is %d\n",getpid());
        close(s[1]);
  char *messageToChild = "a message to child  process!";
        if( ( w = write(s[0] , messageToChild , strlen(messageToChild) ) ) == -1 ){
            printf("Write socket error:%s\n",strerror(errno));
            exit(-1);
        }
        sleep(1);
        if( (r = read(s[0], buf , BUF_SIZE )) == -1){
          printf("Pid %d read from socket error:%s\n",getpid() , strerror(errno) );
          exit(-1);
    }
        printf("Pid %d read string : %s \n",getpid(),buf);
    }else if(pid == 0){
        printf("Fork child process successed\n");
        printf("Child process's pid is :%d\n",getpid());
        close(s[0]);
  char *messageToParent = "a message to parent process!";
  if( ( w = write(s[1] , messageToParent , strlen(messageToParent) ) ) == -1 ){
            printf("Write socket error:%s\n",strerror(errno));
            exit(-1);
        }
       sleep(1);
       if( (r = read(s[1], buf , BUF_SIZE )) == -1){
          printf("Pid %d read from socket error:%s\n",getpid() , strerror(errno) );
          exit(-1);
       }  
       printf("Pid %d read string : %s \n",getpid(),buf); 
    }else{
        printf("Fork failed:%s\n",strerror(errno));
        exit(-1);
    }
    exit(0);
}