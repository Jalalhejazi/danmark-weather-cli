
$org = "https://dev.azure.com/superusers-kursus"
$work = "nodejs"
az devops configure --defaults organization=$org project=$work

## az pipelines build list --top 1 -o table 

az pipelines build list --top 1 -o table --query "{build: [0].buildNumber, status: [0].status}"