If you wanted to deploy this today NOT using porter, you would do the following:

## Using the Azure CLI

```bash
# Create function app
az group create -n $resourceGroup -l westus2
az storage account create -g $resourceGroup -n $uniqueStorageName --sku Standard_LRS
az functionapp create -g $resourceGroup -n $uniqueAppName --os-type linux --runtime node --runtime-version 12 --functions-version 3 -s $uniqueStorageName --consumption-plan-location westus2

# Zip and deploy app
zip -rX app.zip .
az functionapp deployment source config-zip -g $resourceGroup -n $uniqueAppName --src ./app.zip --build-remote
```

## Using the Func CLI

```bash
#Create function app
az group create -n $resourceGroup -l westus2
az storage account create -g $resourceGroup -n $uniqueStorageName --sku Standard_LRS
az functionapp create -g $resourceGroup -n $uniqueAppName --os-type linux --runtime node --runtime-version 12 --functions-version 3 -s $uniqueStorageName --consumption-plan-location westus2

# Deploy
func azure functionapp publish $uniqueAppName
```

Once it's deployed you should be able to get the current weather with

```bash
curl https://$uniqueAppName.azurewebsites.net/api/HttpTrigger
```