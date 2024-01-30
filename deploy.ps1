# Web Deploy parameters
$serverUrl = "https://98.70.15.8"
$siteName = "shopify"
$username = "vamshi"
$password = "Vamshikrishna@1"
$packagePath = "react.zip"

# Path to msdeploy executable
$msdeployPath = "C:\Program Files\IIS\Microsoft Web Deploy V3\msdeploy.exe"

# Web Deploy command
$deployCommand = "$msdeployPath -verb:sync -source:package='$packagePath' -dest:auto,ComputerName='$http://98.70.15.8:85',UserName='$vamshi',Password='$Vamshikrishna@1',AuthType='Basic',IncludeAcls='False' -setParam:name='IIS Web Application Name',value='$shopify' -enableLink:AppPool"

# Execute Web Deploy command
Invoke-Expression -Command $deployCommand
