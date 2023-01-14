import subprocess
 
command = " node upload.mjs token.png 'A name for my token' 'A longer description for the token...'" #command to be executed
 
res = subprocess.check_output(command)
#the method returns the exit code
 
print("Returned Value: ", res)
print("Decoded string: ", res.decode("utf-8"))