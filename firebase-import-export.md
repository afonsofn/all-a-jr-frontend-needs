# How to import/export json files to firebase

We all have to say a big thank you to [jloosli](https://github.com/jloosli) because this man just solved one of the most annoying problem when you work with FireStore database which is import and export data, with [node-firestore-import-export](https://github.com/jloosli/node-firestore-import-export) package we can do that in a very easy way.

## Steps

### 1 - Install the node-firestore-import-export package
 ```bash
npm install -g node-firestore-import-export
```

### 2 - Generate a new private key in Firebase Console
- Open the Firebase Console.
- Navigate to your project and click the gear icon next to the “Project Overview” heading.
- Click the “Project Settings” button.
- In the “Service accounts” tab, click the “Generate new private key” button. This will download a JSON file with your Firebase project’s configuration.
- Rename the downloaded file to appConfig.json.

### 3.1 - Export your Firestore database
- Open a terminal and navigate to the directory where you want to save the exported JSON file. Make sure the appConfig.json file exists in the same directory as well.
- Run the following command to export data from your Firestore database:
 ```bash
npx -p node-firestore-import-export firestore-export -a appConfig.json -b backup.json
```
- This command exports all data from your Firestore database and saves it to a JSON file named backup.json in the current directory.

### 3.2 - Import your Firestore database
- Create a JSON file with the format bellow with the data that you want to import:
 ```json
{
  "__collections__": {
    "companies": {
      "docA": {
        "name": "Big Co",
        "employee_count": 2012,
        "created": {
          "__datatype__": "timestamp",
          "value": {
            "_seconds": 12343456,
            "_nanoseconds": 7890
          }
        },
        "location": {
          "__datatype__": "geopoint",
          "value": {
            "_latitude": -123.456789,
            "_longitude": 34.5678
          }
        },
        "AdministratorRef": {
          "__datatype__": "documentReference",
          "value": "path/to/the/document"
        },
        "__collections__": {
          "employees": ...,
          "products": ...
        }
      },
      "docB": ...,
      "docC": ...
    },
    "administrators": {
      "docA": ...,
      "docB": ...
    }
  }
}
```
- Open a terminal and navigate to the directory of the JSON file. Make sure the appConfig.json file exists in the same directory as well.
- Run the following command to import data to your Firestore database:
```bash
npx -p node-firestore-import-export firestore-import -a appConfig.json -b database.json -p
```
- This command import you JSON file and will update your database.
- Be careful! This can easily overwrite or mess up your data if you import to the wrong location.
