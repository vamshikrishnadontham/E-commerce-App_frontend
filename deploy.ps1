# Replace these placeholders with your actual values
$IIS_Server = "https://98.70.15.8"
$MSDEPLOY_PATH = "C:\Program Files\IIS\Microsoft Web Deploy V3"

# Ping the IIS server
Test-Connection -ComputerName $IIS_Server -Count 2 -ErrorAction SilentlyContinue

# Change directory to MSDEPLOY_PATH
Set-Location -Path $C:\Program Files\IIS\Microsoft Web Deploy V3

# Define the msdeploy command
$msdeployCommand = @"
./msdeploy.exe -verb:sync -source:contentPath='C:/artifact/shopify.zip' -dest:auto,computerName='$98.70.15.8:8172/msdeploy.axd?site=movieinfo,userName=vamshi/Administrator,password=Vamshikrishna@1,authType=Basic' -allowUntrusted=true
"@

# Execute the msdeploy command
Invoke-Expression -Command $msdeployCommand
