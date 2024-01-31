# Replace these placeholders with your actual values
$ArtifactPath = "C:\Users\vamshi\actions-runner\myworkspace\E-commerce-App_frontend\E-commerce-App_frontend\build"
$ArchivePath = "C:\Users\vamshi\actions-runner\myworkspace\E-commerce-App_frontend\E-commerce-App_frontend\artifacts\E-commerce-App.zip"
$RemoteServerUrl = "https://98.70.15.8/msdeploy.axd?site=shopify"
$RemoteServerUsername = "iis-vamshi"
$RemoteServerPassword = "Vamshikrishna@1"

# Create a zip archive
Compress-Archive -Path $C:\Users\vamshi\actions-runner\myworkspace\E-commerce-App_frontend\E-commerce-App_frontend\artifacts\E-commerce-App.zip -C:\inetpub\wwwroot\shopify $C:\inetpub\wwwroot\shopify

# Deploy the archive to the remote server using msdeploy
# Make sure to replace placeholders in the msdeploy command with your actual values
$msdeployCommand = @"
msdeploy.exe -verb:sync -source:contentPath='$C:\Users\vamshi\actions-runner\myworkspace\E-commerce-App_frontend\E-commerce-App_frontend\artifacts\E-commerce-App.zip' -dest:C:\inetpub\wwwroot\shopify,computerName='$98.70.15.8',userName='$vamshi',password='$Vamshikrishna@1',authType=Basic -allowUntrusted=true
"@

# Execute the msdeploy command
Invoke-Expression -Command $msdeployCommand
