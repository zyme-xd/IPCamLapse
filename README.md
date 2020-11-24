# IPCamLapse
Tool that creates a timelapse of IP cameras.

# How do I use it?
You create a list of ip cameras in config.json, and the tool will take a screenshot on each camera every hour.

For this to work, you need to use a STILL image from the IP Cam's webserver.

For Mobotix cam's, it would be ``http://<camera_IP>/record/current.jpg``

For Yawcam, it would be ``http://<camera_IP>/out.jpg``

I think you get the point.

(We also support .cgi files, because they're fundamentally jpeg's.)
# Is this legal?
In short, it depends on what cameras you use. 

If the camera you use is password protected, then it's illegal.

If the camera has no password and is open to the public, it's legal.
